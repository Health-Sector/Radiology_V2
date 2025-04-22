<template>
    <b-row>
        <b-col cols="12" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Basic Line Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="d-flex align-items-center justify-content-center pt-0">
                    <canvas ref="lineChartCanvas"></canvas>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col cols="12" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Bar Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="d-flex align-items-center justify-content-center pt-0">
                    <canvas ref="barChartCanvas"></canvas>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col cols="12" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Area Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="d-flex align-items-center justify-content-center pt-0">
                    <canvas ref="areaChartCanvas"></canvas>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col cols="12" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Donut Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="d-flex align-items-center justify-content-center pt-0">
                    <canvas ref="doughnutChartCanvas"></canvas>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col cols="12" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Bubble Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="d-flex align-items-center justify-content-center pt-0">
                    <canvas ref="bubbleChartCanvas"></canvas>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col cols="12" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Scatter Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="d-flex align-items-center justify-content-center pt-0">
                    <canvas ref="scatterChartCanvas"></canvas>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col cols="12" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Pie Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="d-flex align-items-center justify-content-center pt-0">
                    <canvas ref="pieChartCanvas"></canvas>
                </b-card-body>
            </b-card>
        </b-col>


        <b-col cols="12" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Radar Chart</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="d-flex align-items-center justify-content-center pt-0">
                    <canvas ref="radarChartCanvas"></canvas>
                </b-card-body>
            </b-card>
        </b-col>

    </b-row>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import {
    Chart,
    LineController,
    BarController,
    BarElement,
    DoughnutController,
    BubbleController,
    ScatterController,
    RadarController,
    RadialLinearScale,
    PieController,
    ArcElement,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Filler,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the required components for the line chart
Chart.register(LineController, BarController, BarElement, DoughnutController, BubbleController, ScatterController, PieController, RadarController, RadialLinearScale, ArcElement, LineElement, PointElement, CategoryScale, LinearScale, Filler, Title, Tooltip, Legend);

const lineChartCanvas = ref(null);
const barChartCanvas = ref(null);
const areaChartCanvas = ref(null);
const doughnutChartCanvas = ref(null);
const bubbleChartCanvas = ref(null);
const scatterChartCanvas = ref(null);
const pieChartCanvas = ref(null);
const radarChartCanvas = ref(null);

onMounted(() => {
    // linechart
    if (lineChartCanvas.value) {
        new Chart(lineChartCanvas.value, {
            type: 'line',
            data: {
                labels: ['August', 'September', 'October', 'November', 'December', 'January', 'February'],
                datasets: [{
                    label: 'Line Chart',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgba(8, 155, 171, 1)',
                    tension: 0.1
                }]
            }
        });
    }

    // barchart
    if (barChartCanvas.value) {
        new Chart(barChartCanvas.value, {
            type: 'bar',
            data: {
                labels: ['August', 'September', 'October', 'November', 'December', 'January', 'February'],
                datasets: [{
                    label: 'Bar Chart',
                    data: [65, 59, 80, 91, 56, 55, 40],
                    fill: false,
                    backgroundColor: 'rgba(8, 155, 171, 1)',
                    borderColor: 'rgba(8, 155, 171, 1)',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        suggestedMin: 45,
                        ticks: {
                            stepSize: 10 // Step size for the y-axis
                        }
                    }
                }
            }
        });
    }

    // areachart
    if (areaChartCanvas.value) {
        new Chart(areaChartCanvas.value, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [
                    {
                        label: 'Area Chart',
                        data: [10, 20, 15, 30, 25],
                        borderColor: 'rgba(8, 155, 171, 1)',
                        backgroundColor: 'rgba(8, 155, 171, 0.2)', // Area fill color
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true // Start y-axis from zero
                    }
                }
            }
        });
    }

    // doughnutchart
    if (doughnutChartCanvas.value) {
        doughnutChartCanvas.value.height = 300;
        doughnutChartCanvas.value.height = 348;
        new Chart(doughnutChartCanvas.value, {
            type: 'doughnut',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [
                    {
                        label: 'Donut Chart',
                        data: [10, 20, 15, 30, 25],
                        backgroundColor: [
                            'rgba(8, 155, 171, 1)',
                            'rgba(252, 159, 91, 1)',
                            'rgba(242, 99, 97, 1)',
                            'rgba(87, 222, 83, 1)',
                            'rgba(97, 226, 252, 1)',
                        ],
                        hoverOffset: 4,
                    }
                ]
            },
            options: {
                maintainAspectRatio: false, // Disable maintaining aspect ratio for custom sizing
            }
        });
    }

    // bubblechart
    if (bubbleChartCanvas.value) {
        new Chart(bubbleChartCanvas.value, {
            type: 'bubble',
            data: {
                datasets: [
                    {
                        label: 'Product One',
                        data: [
                            { x: 20, y: 29, r: 10 },
                            { x: 21, y: 25, r: 10 },
                            { x: 22, y: 24, r: 10 },
                            { x: 24, y: 28, r: 10 },
                            { x: 25, y: 21, r: 10 },
                            { x: 26, y: 26, r: 10 },
                            { x: 27, y: 25, r: 10 },
                            { x: 28, y: 22, r: 10 },
                            { x: 29, y: 23, r: 10 },
                            { x: 30, y: 20, r: 10 },
                        ],
                        backgroundColor: 'rgba(242, 99, 97, 1)'
                    },
                    {
                        label: 'Product Two',
                        data: [
                            { x: 20, y: 22, r: 10 },
                            { x: 22, y: 26, r: 10 },
                            { x: 23, y: 24, r: 10 },
                            { x: 24, y: 22, r: 10 },
                            { x: 25, y: 23, r: 10 },
                            { x: 26, y: 24, r: 10 },
                            { x: 27, y: 28, r: 10 },
                            { x: 28, y: 20, r: 10 },
                            { x: 29, y: 27, r: 10 },
                            { x: 30, y: 29, r: 10 },
                        ],
                        backgroundColor: 'rgba(8, 155, 171, 1)'
                    },
                    {
                        label: 'Product Three',
                        data: [
                            { x: 20, y: 26, r: 10 },
                            { x: 22, y: 28, r: 10 },
                            { x: 23, y: 22, r: 10 },
                            { x: 24, y: 25, r: 10 },
                            { x: 25, y: 25, r: 10 },
                            { x: 26, y: 20, r: 10 },
                            { x: 27, y: 30, r: 10 },
                            { x: 28, y: 28, r: 10 },
                            { x: 29, y: 25, r: 10 },
                            { x: 30, y: 22, r: 10 },
                        ],
                        backgroundColor: 'rgba(97, 226, 252, 1)'
                    }
                ]
            }
        });
    }

    // scatterchart
    if (scatterChartCanvas.value) {
        new Chart(scatterChartCanvas.value, {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Product 1',
                        data: [
                            { x: 10, y: 0.0 },
                            { x: 12, y: 0.1 },
                            { x: 13, y: 0.2 },
                            { x: 14, y: 0.2 },
                            { x: 15, y: 0.5 },
                            { x: 16, y: 0.4 },
                            { x: 17, y: 0.5 },
                            { x: 18, y: 0.3 },
                            { x: 19, y: 0.1 },
                            { x: 20, y: 0.5 },
                            { x: 21, y: 0.4 },
                            { x: 22, y: 0.2 }
                        ],
                        backgroundColor: 'rgba(242, 99, 97, 1)'
                    },
                    {
                        label: 'Product 2',
                        data: [
                            { x: 10, y: 0.5 },
                            { x: 12, y: 0.4 },
                            { x: 13, y: 0.3 },
                            { x: 14, y: 0.2 },
                            { x: 15, y: 0.1 },
                            { x: 16, y: 0.2 },
                            { x: 17, y: 0.1 },
                            { x: 18, y: 0.2 },
                            { x: 19, y: 0.3 },
                            { x: 20, y: 0.4 },
                            { x: 21, y: 0.5 },
                            { x: 22, y: 0.0 }
                        ],
                        backgroundColor: 'rgba(8, 155, 171, 1)'
                    },
                    {
                        label: 'Product 3',
                        data: [
                            { x: 10, y: 0.25 },
                            { x: 12, y: 0.3 },
                            { x: 13, y: 0.3 },
                            { x: 14, y: 0.4 },
                            { x: 15, y: 0.3 },
                            { x: 16, y: 0.1 },
                            { x: 17, y: 0.5 },
                            { x: 18, y: 0.2 },
                            { x: 19, y: 0.3 },
                            { x: 20, y: 0.4 },
                            { x: 21, y: 0.5 },
                            { x: 22, y: 0.0 }
                        ],
                        backgroundColor: 'rgba(97, 226, 252, 1)'
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // piechart
    if (pieChartCanvas.value) {
        pieChartCanvas.value.width = 300;
        pieChartCanvas.value.height = 348;
        new Chart(pieChartCanvas.value, {
            type: 'pie',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [
                    {
                        label: 'Pie Chart',
                        data: [10, 20, 15, 30, 25],
                        backgroundColor: [
                            'rgba(8, 155, 171, 1)',
                            'rgba(252, 159, 91, 1)',
                            'rgba(242, 99, 97, 1)',
                            'rgba(87, 222, 83, 1)',
                            'rgba(97, 226, 252, 1)',
                        ],
                        hoverOffset: 4,
                    }
                ]
            },
            options: {
                maintainAspectRatio: false, // Disable maintaining aspect ratio for custom sizing
            }
        });
    }

    // radarchart
    if (radarChartCanvas.value) {
        radarChartCanvas.value.width = 300;
        radarChartCanvas.value.height = 348;

        new Chart(radarChartCanvas.value, {
            type: 'radar',
            data: {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [
                    {
                        label: 'Day 1',
                        data: [65, 59, 90, 81, 56, 55, 40],
                        fill: true,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        pointBackgroundColor: 'rgb(255, 99, 132)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 99, 132)'
                    },
                    {
                        label: 'Day 2',
                        data: [28, 48, 40, 19, 96, 27, 100],
                        fill: true,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        pointBackgroundColor: 'rgb(54, 162, 235)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(54, 162, 235)'
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                elements: {
                    line: {
                        borderWidth: 3
                    }
                }
            }
        });
    }
});
</script>