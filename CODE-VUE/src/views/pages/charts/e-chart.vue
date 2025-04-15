<template>
    <b-row>
        <b-col lg="6" cols="12">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Basic Line Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="pt-0">
                    <vue-echarts :option="linechart" class="custom-chart" style="height: 400px" />
                </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="6" cols="12">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Bar Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="pt-0">
                    <vue-echarts :option="barchart" class="custom-chart" style="height: 400px" />
                </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="6" cols="12">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Pie Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="pt-0">
                    <vue-echarts :option="piechart" class="custom-chart" style="height: 400px" />
                </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="6" cols="12">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Bubble Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="pt-0">
                    <vue-echarts :option="bubblechartOption" class="custom-chart" style="height: 400px" />
                </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="6" cols="12">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Area Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="pt-0">
                    <vue-echarts :option="areachart" class="custom-chart" style="height: 400px" />
                </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="6" cols="12">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Doughnut Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="pt-0">
                    <vue-echarts :option="doughnutchart" class="custom-chart" style="height: 400px" />
                </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="6" cols="12">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Radar Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="pt-0">
                    <vue-echarts :option="radarchart" class="custom-chart" style="height: 400px" />
                </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="6" cols="12">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Scatter Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="pt-0">
                    <vue-echarts :option="scatterchart" class="custom-chart" style="height: 400px" />
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart, BarChart, PieChart, ScatterChart, RadarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent, LegendComponent } from 'echarts/components';
import VueEcharts from 'vue-echarts';

// Register the necessary echarts components
use([CanvasRenderer, LineChart, BarChart, PieChart, ScatterChart, RadarChart, GridComponent, TooltipComponent, TitleComponent, LegendComponent]);

const linechart = ref(null);
const barchart = ref(null);
const piechart = ref(null);
const bubblechartOption = ref(null);
const areachart = ref(null);
const doughnutchart = ref(null);
const radarchart = ref(null);
const scatterchart = ref(null);

const getLegendPosition = () => {
    return window.innerWidth <= 768 ? { top: '0%', left: 'center' } : { top: '5%', left: 'center' };
};

const initializeChart = () => {
    const isDarkTheme = document.documentElement.getAttribute('data-bs-theme') === 'dark';
    const backgroundColor = isDarkTheme ? 'transparent' : '';

    // Pie Chart
    piechart.value = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: 'January' },
                    { value: 735, name: 'February' },
                    { value: 580, name: 'March' },
                    { value: 484, name: 'April' },
                    { value: 300, name: 'May' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ],
        backgroundColor: backgroundColor
    };

    // Doughnut Chart
    doughnutchart.value = {
        tooltip: {
            trigger: 'item'
        },
        legend: getLegendPosition(),
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'January' },
                    { value: 735, name: 'February' },
                    { value: 580, name: 'March' },
                    { value: 484, name: 'April' },
                    { value: 300, name: 'May' }
                ]
            }
        ],
        backgroundColor: isDarkTheme ? 'dark' : ''
    };

    // Radar Chart
    radarchart.value = {
        tooltip: {},
        radar: {
            indicator: [
                { name: 'Sales', max: 6500 },
                { name: 'Administration', max: 16000 },
                { name: 'Information Technology', max: 30000 },
                { name: 'Customer Support', max: 38000 },
                { name: 'Development', max: 52000 },
                { name: 'Marketing', max: 25000 }
            ]
        },
        series: [{
            name: 'Budget vs spending',
            type: 'radar',
            data: [
                {
                    value: [4300, 10000, 28000, 35000, 50000, 19000],
                    name: 'Allocated Budget'
                },
                {
                    value: [5000, 14000, 28000, 31000, 42000, 21000],
                    name: 'Actual Spending'
                }
            ]
        }]
    };

    // Scatter Chart
    scatterchart.value = {
        xAxis: {},
        yAxis: {},
        series: [{
            symbolSize: 20,
            data: [
                [10.0, 8.04],
                [8.0, 6.95],
                [13.0, 7.58],
                [9.0, 8.81],
                [11.0, 8.33],
                [14.0, 9.96],
                [6.0, 7.24],
                [4.0, 4.26],
                [12.0, 10.84],
                [7.0, 4.82],
                [5.0, 5.68]
            ],
            type: 'scatter'
        }]
    };
};

const echartBubbleData = [
    [
        [5, 30, 27662440, 'Product 1'],
        [10, 50, 27662441, 'Product 1'],
        [20, 60, 27662442, 'Product 1'],
        [30, 50, 27662443, 'Product 1'],
        [40, 77.4, 27662444, 'Product 1'],
    ],
    [
        [10, 60, 276624470, 'Product 2'],
        [20, 45, 276624471, 'Product 2'],
        [30, 60, 276624472, 'Product 2'],
        [40, 40, 276624473, 'Product 2'],
        [50, 50, 276624474, 'Product 2'],
    ],
    [
        [5, 40, 276624450, 'Product 3'],
        [20, 70, 276624451, 'Product 3'],
        [30, 40, 276624452, 'Product 3'],
        [40, 55, 276624453, 'Product 3'],
        [50, 65, 276624454, 'Product 3'],
    ]
];

onMounted(() => {
    // Define the chart options
    linechart.value = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            itemStyle: {
                color: 'rgba(8, 155, 171, 1)'
            }
        }]
    };

    barchart.value = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            itemStyle: {
                color: 'rgba(8, 155, 171, 1)',
            }
        }]
    };

    bubblechartOption.value = {
        // legend: {
        //     // left: '25%',
        //     // bottom: '3%',
        //     // data: ['Product 1', 'Product 2', 'Product 3'] 
        // },
        grid: {
            left: '8%',
            top: '10%'
        },
        xAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            scale: true
        },
        series: echartBubbleData.map((bubbleData, idx) => ({
            name: 'Product ' + (idx + 1),
            data: bubbleData,
            type: 'scatter',
            symbolSize: (data) => Math.sqrt(data[2]) / 5e2, // Adjust bubble size based on data
            emphasis: {
                focus: 'series'
            }
        }))
    };
    // Handle window resize to adjust chart size
    window.addEventListener('resize', () => {
        if (bubblechartOption.value) {
            bubblechartOption.value = { ...bubblechartOption.value }; // Trigger reactivity
        }
    });

    areachart.value = {
        color: "#089bab",
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [320, 332, 301, 334, 390, 330, 320],
            type: 'line',
            areaStyle: {} // Enable area styling
        }]
    };

    // Handle window resize to adjust chart size
    window.addEventListener('resize', () => {
        if (areachart.value) {
            areachart.value = { ...areachart.value }; // Trigger reactivity
        }
    });

    initializeChart();

    // Resize the chart when the window is resized
    window.addEventListener('resize', () => {
        if (piechart.value) {
            piechart.value = { ...piechart.value }; // Trigger reactivity
        }
    });

    window.addEventListener('resize', () => {
        doughnutChartOptions.value.legend = getLegendPosition(); // Update legend position on resize
    });

    // Observe theme changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'data-bs-theme') {
                initializeChart();
            }
        });
    });

    observer.observe(document.documentElement, { attributes: true });
});
</script>
