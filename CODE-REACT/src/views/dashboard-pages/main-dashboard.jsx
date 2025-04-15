import React, { useEffect, useRef } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Chart from "react-apexcharts";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const MainDashboard = () => {
  // Globe chart references
  const globeChartRef = useRef(null);
  const globeRootRef = useRef(null);
  const globeChartDivRef = useRef(null);
  const rotationIntervalRef = useRef(null);

  // Reports Analyzed Chart
  const reportsAnalyzedOptions = {
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false
      }
    },
    colors: ['#089bab'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    series: [{
      name: 'Reports Analyzed',
      data: [42, 65, 58, 87, 73, 98, 112]
    }],
    xaxis: {
      type: 'datetime',
      categories: [
        "2024-09-19T00:00:00.000Z",
        "2024-09-20T00:00:00.000Z",
        "2024-09-21T00:00:00.000Z",
        "2024-09-22T00:00:00.000Z",
        "2024-09-23T00:00:00.000Z",
        "2024-09-24T00:00:00.000Z",
        "2024-09-25T00:00:00.000Z"
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy'
      },
    },
  };

  // Patient Statistics Chart
  const patientOptions = {
    chart: {
      height: 350,
      type: 'donut',
    },
    series: [442, 551, 413, 175],
    labels: ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics'],
    colors: ['#089bab', '#FC9F5B', '#8F5FE8', '#37D5F2'],
    plotOptions: {
      pie: {
        donut: {
          size: '55%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
            },
            value: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Poppins, sans-serif',
              formatter: function(val) {
                return val;
              }
            },
            total: {
              show: true,
              label: 'Total',
              fontSize: '16px',
              fontFamily: 'Poppins, sans-serif',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              }
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function(val, opts) {
        return opts.w.config.series[opts.seriesIndex];
      }
    },
    legend: {
      position: 'bottom',
      formatter: function(seriesName, opts) {
        return seriesName + ': ' + opts.w.globals.series[opts.seriesIndex];
      }
    }
  };

  // Hospital Stats
  const hospitalStats = [
    { title: "Total Doctors", value: "42", icon: "ri-user-2-line", color: "primary" },
    { title: "Total Patients", value: "1,520", icon: "ri-user-line", color: "success" },
    { title: "Total Departments", value: "12", icon: "ri-hospital-line", color: "warning" },
    { title: "Available Beds", value: "80", icon: "ri-hotel-bed-line", color: "info" }
  ];

  useEffect(() => {
    // Initialize the 3D globe after component mounts and DOM is ready
    if (globeChartDivRef.current) {
      initGlobeChart();
    }

    return () => {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
      }
      if (globeRootRef.current) {
        globeRootRef.current.dispose();
      }
    };
  }, []);

  const initGlobeChart = () => {
    // Dispose of any existing chart
    if (globeRootRef.current) {
      globeRootRef.current.dispose();
    }

    // Create root element
    const root = am5.Root.new(globeChartDivRef.current);
    globeRootRef.current = root;

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create the map chart
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "rotateY",
        projection: am5map.geoOrthographic(),
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
      })
    );
    globeChartRef.current = chart;

    // Create series for background fill
    const backgroundSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {})
    );
    backgroundSeries.mapPolygons.template.setAll({
      fill: root.interfaceColors.get("alternativeBackground"),
      fillOpacity: 0.1,
      strokeOpacity: 0
    });
    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180)
    });

    // Create main polygon series for countries
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"]
      })
    );
    
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
      fill: am5.color(0x3388ff)
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: root.interfaceColors.get("primaryButtonHover")
    });

    polygonSeries.mapPolygons.template.states.create("active", {
      fill: root.interfaceColors.get("primaryButtonHover")
    });

    // Add some sample data points
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {})
    );

    pointSeries.bullets.push(function() {
      const circle = am5.Circle.new(root, {
        radius: 7,
        tooltipText: "{title}: {value} reports",
        cursorOverStyle: "pointer",
        tooltipY: 0,
        fill: am5.color(0xffba00),
        stroke: root.interfaceColors.get("background"),
        strokeWidth: 2
      });
      
      return am5.Bullet.new(root, {
        sprite: circle
      });
    });

    // Sample data for medical reports by country
    pointSeries.data.setAll([
      {
        geometry: { type: "Point", coordinates: [-73.935242, 40.730610] },
        title: "New York",
        value: 157
      },
      {
        geometry: { type: "Point", coordinates: [2.349014, 48.864716] },
        title: "Paris",
        value: 123
      },
      {
        geometry: { type: "Point", coordinates: [28.979530, 41.015137] },
        title: "Istanbul",
        value: 95
      },
      {
        geometry: { type: "Point", coordinates: [77.216721, 28.644800] },
        title: "New Delhi",
        value: 112
      },
      {
        geometry: { type: "Point", coordinates: [121.469170, 31.224361] },
        title: "Shanghai",
        value: 142
      },
      {
        geometry: { type: "Point", coordinates: [139.839478, 35.652832] },
        title: "Tokyo",
        value: 187
      },
      {
        geometry: { type: "Point", coordinates: [-118.243683, 34.052235] },
        title: "Los Angeles",
        value: 133
      },
      {
        geometry: { type: "Point", coordinates: [-43.172897, -22.906847] },
        title: "Rio de Janeiro",
        value: 89
      },
      {
        geometry: { type: "Point", coordinates: [37.617298, 55.755825] },
        title: "Moscow",
        value: 105
      },
      {
        geometry: { type: "Point", coordinates: [18.423300, -33.918861] },
        title: "Cape Town",
        value: 78
      }
    ]);

    // Auto-rotating animation
    let lastTime = Date.now();
    let angle = 0;

    rotationIntervalRef.current = setInterval(() => {
      const deltaTime = Date.now() - lastTime;
      lastTime = Date.now();
      angle += deltaTime / 10000 * 360;
      
      if (chart && !chart.isDisposed()) {
        chart.animate({
          key: "rotationX",
          to: angle,
          duration: 500,
          easing: am5.ease.out(am5.ease.cubic)
        });
      }
    }, 50);
  };

  return (
    <div className="container-fluid">
      <Row>
        {hospitalStats.map((stat, index) => (
          <Col key={index} sm={6} lg={3}>
            <Card className="mb-4">
              <Card.Body className="d-flex align-items-center">
                <div className={`bg-soft-${stat.color} rounded-circle p-3 me-3`}>
                  <i className={`${stat.icon} h3 text-${stat.color} mb-0`}></i>
                </div>
                <div>
                  <h6 className="mb-1">{stat.title}</h6>
                  <h4 className="counter mb-0">{stat.value}</h4>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row>
        <Col lg={8}>
          <Card>
            <Card.Header>
              <Card.Title>Reports Analyzed</Card.Title>
            </Card.Header>
            <Card.Body>
              <Chart
                options={reportsAnalyzedOptions}
                series={reportsAnalyzedOptions.series}
                type="area"
                height={350}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Header>
              <Card.Title>Patient Statistics</Card.Title>
            </Card.Header>
            <Card.Body>
              <Chart
                options={patientOptions}
                series={patientOptions.series}
                type="donut"
                height={350}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title className="mb-0">Global Medical Report Analysis</Card.Title>
            </Card.Header>
            <Card.Body>
              <div ref={globeChartDivRef} style={{ width: "100%", height: "500px" }}></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MainDashboard;
