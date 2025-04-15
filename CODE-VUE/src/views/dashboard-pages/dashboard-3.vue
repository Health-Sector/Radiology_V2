<template>
    <b-row>
        <b-col lg="4">
            <b-card no-body class="user-profile-block  ">
                <b-card-body class="mt-2">
                    <div class="user-details-block">
                        <div class="user-profile text-center">
                            <img src="/assets/images/user/11.png" alt="profile-img" class="avatar-130 img-fluid">
                        </div>
                        <div class="text-center mt-3">
                            <h4><b>Bess Willis</b></h4>
                            <p>27 years, California</p>
                        </div>
                        <ul class="doctoe-sedual d-flex align-items-center justify-content-between p-0 mt-4 mb-0">
                            <li class="text-center">
                                <h6 class="text-primary">Weight</h6>
                                <h3>60<span>kg</span></h3>
                            </li>
                            <li class="text-center">
                                <h6 class="text-primary">Height</h6>
                                <h3>170<span>cm</span></h3>
                            </li>
                            <li class="text-center">
                                <h6 class="text-primary">Goal</h6>
                                <h3>55<span>kg</span></h3>
                            </li>
                        </ul>
                    </div>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-body>
                    <div class="patient-steps">
                        <div class="d-flex align-items-center justify-content-between">
                            <b-col md="6">
                                <div class="data-block">
                                    <p class="mb-0">Walked</p>
                                    <h5>4532 steps</h5>
                                </div>
                                <div class="data-block mt-3">
                                    <p class="mb-0">My Goal</p>
                                    <h5>6500 steps</h5>
                                </div>
                            </b-col>
                            <b-col md="6">
                                <div class="progress-round patient-progress mx-auto" data-value="80">
                                    <span class="progress-left">
                                        <span class="progress-bar border-secondary"
                                            style="transform: rotate(108deg);"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar border-secondary"
                                            style="transform: rotate(180deg);"></span>
                                    </span>
                                    <div
                                        class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center text-center">
                                        <div class="h4 mb-0">4532<br> <span class="font-size-14">left</span></div>
                                    </div>
                                </div>
                            </b-col>
                        </div>
                        <ul
                            class="patient-role list-inline d-flex align-items-center justify-content-between p-0 mt-4 mb-0 border-bottom pb-5">
                            <li class="text-start">
                                <h6 class="text-primary">Carbs</h6>
                                <div class="progress-bar-linear  w-100">
                                    <b-progress class="bg-primary-subtle shadow-none w-100" style="height: 6px">
                                        <b-progress-bar :value="85" variant="primary"
                                            :style="{ width: carbsWidth, transition: 'width 2s ease 0s' }"></b-progress-bar>
                                    </b-progress>
                                </div>
                            </li>
                            <li class="text-start">
                                <h6 class="text-primary">Protein</h6>
                                <b-progress class="bg-info-subtle shadow-none w-100" style="height: 6px">
                                    <b-progress-bar :value="65" variant="info"
                                        :style="{ width: proteinWidth, transition: 'width 2s ease 0s' }"></b-progress-bar>
                                </b-progress>
                            </li>
                            <li class="text-start">
                                <h6 class="text-primary">Fat</h6>
                                <b-progress class="bg-info-subtle shadow-none w-100" style="height: 6px">
                                    <b-progress-bar :value="70" variant="info"
                                        :style="{ width: fatWidth, transition: 'width 2s ease 0s' }"></b-progress-bar>
                                </b-progress>
                            </li>
                        </ul>
                    </div>
                    <hr>
                    <div class="patient-steps2">
                        <div class="d-flex align-items-center justify-content-between">
                            <b-col md="6">
                                <div class="data-block">
                                    <p class="mb-0">Burned</p>
                                    <h5>325 kcal</h5>
                                </div>
                                <div class="data-block mt-3">
                                    <p class="mb-0">My Goal</p>
                                    <h5>800 kcal</h5>
                                </div>
                            </b-col>
                            <b-col md="6">
                                <div class="progress-round patient-progress mx-auto" data-value="60">
                                    <span class="progress-left">
                                        <span class="progress-bar border-secondary"
                                            style="transform: rotate(36deg);"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar border-secondary"
                                            style="transform: rotate(180deg);"></span>
                                    </span>
                                    <div
                                        class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center text-center">
                                        <div class="h4 mb-0 text-warning">325<br>
                                            <span class="font-size-14">left</span>
                                        </div>
                                    </div>
                                </div>
                            </b-col>
                        </div>
                        <ul
                            class="patient-role list-inline d-flex align-items-center justify-content-between p-0 mt-4 mb-0">
                            <li class="text-start">
                                <h6 class="text-primary">Carbs</h6>
                                <div class="progress-bar-linear  w-100">
                                    <b-progress class="bg-primary-subtle shadow-none w-100" style="height: 6px">
                                        <b-progress-bar :value="85" variant="primary"
                                            :style="{ width: carbsWidth, transition: 'width 2s ease 0s' }"></b-progress-bar>
                                    </b-progress>
                                </div>
                            </li>
                            <li class="text-start">
                                <h6 class="text-primary">Protein</h6>
                                <b-progress class="bg-info-subtle shadow-none w-100" style="height: 6px">
                                    <b-progress-bar :value="65" variant="info"
                                        :style="{ width: proteinWidth, transition: 'width 2s ease 0s' }"></b-progress-bar>
                                </b-progress>
                            </li>
                            <li class="text-start">
                                <h6 class="text-primary">Fat</h6>
                                <b-progress class="bg-info-subtle shadow-none w-100" style="height: 6px">
                                    <b-progress-bar :value="70" variant="info"
                                        :style="{ width: fatWidth, transition: 'width 2s ease 0s' }"></b-progress-bar>
                                </b-progress>
                            </li>
                        </ul>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="8">
            <b-card no-body>
                <b-card-body class="pb-0">
                    <b-row>
                        <b-col sm="12">
                            <b-card no-body>
                                <b-card-body class="bg-primary rounded-4 pt-2 pb-2 pe-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="mb-0 text-white custom-marigin-right">Advice!
                                            Connect your
                                            Apple Watch for better results.</p>
                                        <div class="rounded-4 card-icon bg-white">
                                            <img src="/assets/images/page-img/37.png" class="img-fluid" alt="icon">
                                        </div>
                                    </div>
                                </b-card-body>
                            </b-card>
                            <b-card no-body>
                                <div class="header-title">
                                    <b-card-title class="text-primary">Popular
                                        Training</b-card-title>
                                </div>
                                <b-card-body class="ps-0 pe-0 pb-0">
                                    <b-row>
                                        <b-col v-for="(training, index) in trainings" :key="index" md="4">
                                            <div class="training-block d-flex align-items-center mb-md-0 mb-4">
                                                <div class="rounded-circle card-icon bg-primary-subtle">
                                                    <img :src="generateImgPath(training.imgSrc)"
                                                        class="img-fluid filter-img-dark" :alt="training.altText" />
                                                </div>
                                                <div class="ms-3">
                                                    <h5>{{ training.title }}</h5>
                                                    <p class="mb-0">{{ training.calories }} kcal / h</p>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col lg="8">
                            <b-card no-body>
                                <b-card-header class="d-flex justify-content-between p-0">
                                    <div class="header-title">
                                        <b-card-title class="text-primary mb-3">Activity
                                            Statistic</b-card-title>
                                    </div>
                                </b-card-header>
                                <b-card-body class="p-0 text-center">
                                    <apexchart id="patient-chart-1" :series="patientchart1.series" type="bar"
                                        height="280" :options="patientchart1.options" />
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col lg="4">
                            <b-card no-body class="mb-0">
                                <div class="border-bottom d-flex justify-content-between align-items-center ">
                                    <div class="header-title mb-3">
                                        <b-card-title class="text-primary">My
                                            Training</b-card-title>
                                    </div>
                                    <div class="card-header-toolbar d-flex align-items-center mb-3">
                                        <div class="dropdown">
                                            <span class="ri-add-line bg-primary-subtle  btn" style="font-size: 
                                                22px;" id="dropdownMenuButton4" data-bs-toggle="dropdown">
                                            </span>
                                            <div class="dropdown-menu dropdown-menu-right"
                                                aria-labelledby="dropdownMenuButton4">
                                                <a class="dropdown-item d-flex" href="#"><i
                                                        class="ri-eye-fill me-2"></i>View</a>
                                                <a class="dropdown-item d-flex" href="#"><i
                                                        class="ri-delete-bin-6-fill me-2"></i>Delete</a>
                                                <a class="dropdown-item d-flex" href="#"><i
                                                        class="ri-pencil-fill me-2"></i>Edit</a>
                                                <a class="dropdown-item d-flex" href="#"><i
                                                        class="ri-printer-fill me-2"></i>Print</a>
                                                <a class="dropdown-item d-flex" href="#"><i
                                                        class="ri-file-download-fill me-2"></i>Download</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <b-card-body class="p-0 custom-overflow-hidden-none">
                                    <table class="table mb-0 table-borderless table-box-shadow">
                                        <thead>
                                            <tr>
                                                <th scope="col">Training</th>
                                                <th scope="col">TRX Cardio</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Burned</td>
                                                <td>350 kcal</td>
                                            </tr>
                                            <tr>
                                                <td>Spend</td>
                                                <td>1hr 45m</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table mb-0 table-borderless mt-4 table-box-shadow">
                                        <thead>
                                            <tr>
                                                <th scope="col">Training</th>
                                                <th scope="col">Stretching</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Burned</td>
                                                <td>180 kcal</td>
                                            </tr>
                                            <tr>
                                                <td>Spend</td>
                                                <td>30m</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col md="6">
                            <b-card no-body>
                                <b-card-header class="d-flex justify-content-between p-0 min-height-auto mb-2 pb-3">
                                    <div class="header-title">
                                        <b-card-title class="text-primary">Heart
                                            Rate</b-card-title>
                                    </div>
                                </b-card-header>
                                <b-card-body class="p-0">
                                    <div class="d-flex align-items-center">
                                        <div class="me-3">
                                            <h4 class>75 bpm</h4>
                                            <p class="mb-0 text-primary">Health
                                                Zone</p>
                                        </div>
                                        <div class="rounded-circle card-icon bg-primary-subtle"><i
                                                class="ri-windy-fill "></i></div>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col md="6">
                            <b-card no-body>
                                <b-card-header class="d-flex justify-content-between p-0 min-height-auto mb-2 pb-3">
                                    <div class="header-title">
                                        <b-card-title class="text-primary">Water
                                            Balance</b-card-title>
                                    </div>
                                </b-card-header>
                                <b-card-body class="p-0">
                                    <div class="d-flex align-items-center">
                                        <div class="me-3 text-start">
                                            <p class="mb-0 text-primary">Drunk</p>
                                            <h4 class>1250 ml/ 2000 ml</h4>
                                        </div>
                                        <div class="rounded-circle card-icon bg-primary-subtle"><i
                                                class="ri-add-fill"></i></div>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
<script setup>
import { reactive, ref, onMounted } from 'vue'

const generateImgPath = (path) => {
    return window.origin + import.meta.env.BASE_URL + path;
};

const carbsWidth = ref('0%');
const proteinWidth = ref('0%');
const fatWidth = ref('0%');// Initial width set to 0%
onMounted(() => {
    setTimeout(() => {
        carbsWidth.value = '85%';  // Carbs target width
        proteinWidth.value = '65%'; // Protein target width
        fatWidth.value = '70%';     // Fat target width
    }, 0);
});

const trainings = [
    { imgSrc: "/assets/images/page-img/34.png", altText: "Power Training", title: "Power Training", calories: 395 },
    { imgSrc: "/assets/images/page-img/35.png", altText: "Yoga Training", title: "Yoga Training", calories: 395 },
    { imgSrc: "/assets/images/page-img/36.png", altText: "Stretching", title: "Stretching", calories: 395 }
];

const patientchart1 = reactive({
    series: [{
        name: 'Servings',
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31]
    }],
    options: {
        annotations: {
            points: [{
                x: 'Bananas',
                seriesIndex: 0,
                label: {
                    borderColor: '#775DD0',
                    offsetY: 0,
                    style: {
                        color: '#fff',
                        background: '#775DD0',
                    },
                    text: 'Bananas are good',
                }
            }]
        },
        chart: {
            height: 280,
            type: 'bar',
            rtl: true
        },
        colors: ['#089bab'],
        plotOptions: {
            bar: {
                columnWidth: '50%',
                borderRadius: 14, // Rounded corners
                borderRadiusApplication: 'end' // Apply rounding to the top of bars
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2
        },
        grid: {
            row: {
                colors: ['#fff', '#f2f2f2']
            }
        },
        xaxis: {
            labels: {
                rotate: -45
            },
            categories: ['A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J'
            ],
            tickPlacement: 'on'
        },
        yaxis: {
            title: {
                text: 'Servings',
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100]
            },
        }
    }
})
</script>