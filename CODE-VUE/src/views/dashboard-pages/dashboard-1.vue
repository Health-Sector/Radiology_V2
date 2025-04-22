<template>
    <b-row>
        <b-col lg="12">
            <b-row>
                <b-col md="6" lg="3">
                    <b-card class="bg-primary-subtle">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="rounded-circle card-icon bg-primary"><i class="ri-user-fill text-white"></i>
                            </div>
                            <div class="text-end">
                                <h2 class="mb-0 text-primary"><vue3-autocounter ref="counter" :start-amount="0"
                                        :end-amount="5600" separator="" :duration="3" />
                                </h2>
                                <h5 class="text-primary">Doctors</h5>
                            </div>
                        </div>
                    </b-card>
                </b-col>
                <b-col md="6" lg="3">
                    <b-card class="bg-warning-subtle">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="rounded-circle card-icon bg-warning"><i class="ri-women-fill text-white"></i>
                            </div>
                            <div class="text-end">
                                <h2 class="mb-0 text-warning"><vue3-autocounter ref="counter" :start-amount="0"
                                        :end-amount="3450" separator="" :duration="3" />
                                </h2>
                                <h5 class="text-warning">Nurses</h5>
                            </div>
                        </div>
                    </b-card>
                </b-col>
                <b-col md="6" lg="3">
                    <b-card class="bg-danger-subtle">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="rounded-circle card-icon bg-danger"><i class="ri-group-fill text-white"></i>
                            </div>
                            <div class="text-end">
                                <h2 class="mb-0 text-danger"><vue3-autocounter ref="counter" :start-amount="0"
                                        :end-amount="3500" separator="" :duration="3" />
                                </h2>
                                <h5 class="text-danger">Patients</h5>
                            </div>
                        </div>
                    </b-card>
                </b-col>
                <b-col md="6" lg="3">
                    <b-card class="bg-info-subtle">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="rounded-circle card-icon bg-info"><i class="ri-hospital-line text-white"></i>
                            </div>
                            <div class="text-end">
                                <h2 class="mb-0 text-info"><vue3-autocounter ref="counter" :start-amount="0"
                                        :end-amount="4500" separator="" :duration="3" />
                                </h2>
                                <h5 class="text-info">Pharmacists</h5>
                            </div>
                        </div>
                    </b-card>
                </b-col>
            </b-row>
        </b-col>
        <b-col sm="12">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between  ">
                    <div class="header-title">
                        <b-card-title>Hospital Survey</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="pb-0 mt-3 pt-0">
                    <b-row class="text-center">
                        <b-col sm="3" cols="6">
                            <h4 class="margin-0">$ 305 </h4>
                            <p class="text-muted"> Today's Income</p>
                        </b-col>
                        <b-col sm="3" cols="6">
                            <h4 class="margin-0">$ 999 </h4>
                            <p class="text-muted">This Week's Income</p>
                        </b-col>
                        <b-col sm="3" cols="6">
                            <h4 class="margin-0">$ 4999 </h4>
                            <p class="text-muted">This Month's Income</p>
                        </b-col>
                        <b-col sm="3" cols="6">
                            <h4 class="margin-0">$ 90,000 </h4>
                            <p class="text-muted">This Year's Income</p>
                        </b-col>
                    </b-row>
                </b-card-body>
                <apexchart id="home-servey-chart" :series="homeServeyChart.series" type="bar" height="350"
                    :options="homeServeyChart.options" />
            </b-card>
        </b-col>
        <b-col sm="12">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between position-relative  pb-3">
                    <div class="header-title">
                        <b-card-title>Hospital Staff</b-card-title>
                    </div>
                    <div class="iqonic-navigation-custom d-flex align-items-end">
                        <div class="iqonic-navigation" id="navDemo">
                            <div class="swiper-buttons swiper-button-prev static-position" tabindex="0" role="button"
                                aria-label="Previous slide">
                                <i class="ri-arrow-left-s-line text-primary"></i>
                            </div>
                            <div class="swiper-buttons swiper-button-next static-position" tabindex="-1" role="button"
                                aria-label="Next slide">
                                <i class="ri-arrow-right-s-line"></i>
                            </div>
                        </div>
                    </div>
                </b-card-header>
                <b-card-body>
                    <swiper class="ele-widget-swiper" :modules="[Navigation]" :loop="true" :breakpoints="{
                        0: { slidesPerView: 1, },
                        480: { slidesPerView: 2, },
                        768: { slidesPerView: 3, },
                        1023: { slidesPerView: 4, },
                        1199: { slidesPerView: 5, },
                    }" :space-between="20"
                        :navigation="{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }" pagination
                        :centered-slides="false" :autoplay="false">
                        <swiper-slide v-for="(doctor, index) in doctors" :key="index">
                            <div class="docter-list-item-inner rounded text-center">
                                <div class="donter-profile">
                                    <img :src="generateImgPath(`/assets/images/user/${doctor.image}`)"
                                        class="img-fluid rounded-circle" alt="user-img" />
                                </div>
                                <div class="doctor-detail mt-3">
                                    <h5>{{ doctor.name }}</h5>
                                    <h6>{{ doctor.role }}</h6>
                                </div>
                                <hr>
                                <div class="doctor-description">
                                    <p class="mb-0 text-center ps-2 pe-2">{{ doctor.hospital }}</p>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col md="12" lg="8">
            <b-row>
                <b-col sm="12">
                    <b-card no-body>
                        <div class=" border-bottom p-4 d-flex justify-content-between  pb-2">
                            <div class="header-title">
                                <b-card-title>Operations</b-card-title>
                            </div>
                            <div class="card-header-toolbar d-flex align-items-center ">
                                <div class="dropdown">
                                    <span class="ri-more-fill" id="dropdownMenuButton5" data-bs-toggle="dropdown">
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-end iq-dropdown toggle"
                                        aria-labelledby="dropdownMenuButton5">
                                        <a class="dropdown-item" href="#"><i class="ri-eye-fill me-2"></i>View</a>
                                        <a class="dropdown-item" href="#"><i
                                                class="ri-delete-bin-6-fill me-2"></i>Delete</a>
                                        <a class="dropdown-item" href="#"><i class="ri-pencil-fill me-2"></i>Edit</a>
                                        <a class="dropdown-item" href="#"><i class="ri-printer-fill me-2"></i>Print</a>
                                        <a class="dropdown-item" href="#"><i
                                                class="ri-file-download-fill me-2"></i>Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <b-card-body class="pt-0">
                            <div class="table-responsive mb-0">
                                <table class="table mb-0 table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="text-center">Patient</th>
                                            <th scope="col" class="text-center">Patient Name</th>
                                            <th scope="col" class="text-center">Doctors Team</th>
                                            <th scope="col" class="text-center">Date Of Operation</th>
                                            <th scope="col" class="text-center">Report</th>
                                            <th scope="col" class="text-center">Diseases</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="patient in patients" :key="patient.id">
                                            <td class="text-center">
                                                <img class="rounded-circle img-fluid avatar-40"
                                                    :src="generateImgPath(patient.image)" alt="profile" />
                                            </td>
                                            <td class="text-center">{{ patient.name }}</td>
                                            <td>
                                                <div class="media-group text-center">
                                                    <a v-for="doctor in patient.doctors" :key="doctor.id" class="media"
                                                        href="#">
                                                        <img class="img-fluid avatar-40 rounded-circle"
                                                            :src="generateImgPath(doctor.image)" alt />{{ " " }}
                                                    </a>
                                                </div>
                                            </td>
                                            <td class="text-center">{{ patient.operationDate }}</td>
                                            <td class="text-center">
                                                <i class="ri-file-pdf-line font-size-16 text-danger"></i>
                                            </td>
                                            <td class="text-center">{{ patient.disease }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col md="12" lg="6">
                    <b-row>
                        <b-col md="6" lg="12">
                            <b-card no-body>
                                <b-card-body>
                                    <div class="info-box d-flex align-items-center p-3">
                                        <div class="info-image me-3">
                                            <img src="/assets/images/page-img/30.png" class="img-fluid" alt="image-box">
                                        </div>
                                        <div class="info-text">
                                            <h3>120</h3>
                                            <span>Total Appointments</span>
                                        </div>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col md="6" lg="12">
                            <b-card no-body>
                                <b-card-body>
                                    <div class="info-box d-flex align-items-center p-3">
                                        <div class="info-image me-3">
                                            <img src="/assets/images/page-img/31.png" class="img-fluid" alt="image-box">
                                        </div>
                                        <div class="info-text">
                                            <h3>5000</h3>
                                            <span>Completed Appointments</span>
                                        </div>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col md="6" lg="12">
                            <b-card no-body>
                                <b-card-body>
                                    <div class="info-box d-flex align-items-center p-3">
                                        <div class="info-image me-3">
                                            <img src="/assets/images/page-img/32.png" class="img-fluid" alt="image-box">
                                        </div>
                                        <div class="info-text">
                                            <h3>1500</h3>
                                            <span>Cancelled Appointments</span>
                                        </div>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col md="6" lg="12">
                            <b-card no-body>
                                <b-card-body>
                                    <div class="info-box d-flex align-items-center p-3">
                                        <div class="info-image me-3">
                                            <img src="/assets/images/page-img/33.png" class="img-fluid" alt="image-box">
                                        </div>
                                        <div class="info-text">
                                            <h3>500</h3>
                                            <span>Followup Appointments</span>
                                        </div>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col md="12" lg="6">
                    <b-card no-body>
                        <div class="border-bottom p-4 d-flex justify-content-between iq-recent-activity">
                            <div class="header-title">
                                <b-card-title>Recent Activity</b-card-title>
                            </div>
                            <div class="card-header-toolbar d-flex align-items-center ">
                                <div class="dropdown">
                                    <span class="text-primary" id="dropdownMenuButton5" data-bs-toggle="dropdown">
                                        View All
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-end iq-dropdown toggle"
                                        aria-labelledby="dropdownMenuButton5">
                                        <a class="dropdown-item" href="#"><i class="ri-eye-fill me-2"></i>View</a>
                                        <a class="dropdown-item" href="#"><i
                                                class="ri-delete-bin-6-fill me-2"></i>Delete</a>
                                        <a class="dropdown-item" href="#"><i class="ri-pencil-fill me-2"></i>Edit</a>
                                        <a class="dropdown-item" href="#"><i class="ri-printer-fill me-2"></i>Print</a>
                                        <a class="dropdown-item" href="#"><i
                                                class="ri-file-download-fill me-2"></i>Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <b-card-body>
                            <ul class="timeline">
                                <li v-for="(item, index) in activities" :key="index">
                                    <div :class="`timeline-dots-fill ${item.dotClass}`"></div>
                                    <h6 class="float-start mb-2">
                                        <i class="ri-user-fill"></i> {{ item.time }} min ago
                                    </h6>
                                    <small class="float-end mt-1">{{ item.status }}</small>
                                    <div class="d-inline-block w-100">
                                        <p>{{ item.description }}</p>
                                    </div>
                                </li>
                            </ul>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </b-col>
        <b-col md="12" lg="4">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Total Accident Report</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <b-row>
                        <b-col sm="6">
                            <h3>$40K</h3>
                        </b-col>
                    </b-row>
                    <ApexChart element="home-wave-chart-7" :chartOption="chart7" />
                    <b-row class="text-center mt-3">
                        <b-col sm="6">
                            <h6 class="text-truncate d-block">Last Month</h6>
                            <p class="m-0">358</p>
                        </b-col>
                        <b-col sm="6">
                            <h6 class="text-truncate d-block">Current Month</h6>
                            <p class="m-0">194</p>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Total Death Report</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <b-row>
                        <b-col sm="6">
                            <h3>$20K</h3>
                        </b-col>
                    </b-row>
                    <ApexChart element="home-wave-chart-8" :chartOption="chart8" />
                    <b-row class="text-center mt-3">
                        <b-col sm="6">
                            <h6 class="text-truncate d-block">Last Month</h6>
                            <p class="m-0">220</p>
                        </b-col>
                        <b-col sm="6">
                            <h6 class="text-truncate d-block">Current Month</h6>
                            <p class="m-0">120</p>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Overall Progress</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body class="pt-0">
                    <apexchart :series="radarchart.series" type="radialBar" height="245"
                        :options="radarchart.options" />
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import ApexChart from '@/components/chart/ApexChart.vue';

const generateImgPath = (path) => {
    return window.origin + import.meta.env.BASE_URL + path;
};

const doctors = [
    { name: 'Dr. Paul Molive', role: 'Doctor', hospital: 'California Hospital Medical Center', image: '05.jpg' },
    { name: 'Dr. Paul Molive', role: 'Nurse', hospital: 'California Hospital Medical Center', image: '06.jpg' },
    { name: 'Dr. Paul Molive', role: 'Surgeon', hospital: 'California Hospital Medical Center', image: '07.jpg' },
    { name: 'Dr. Paul Molive', role: 'Doctor', hospital: 'California Hospital Medical Center', image: '08.jpg' },
    { name: 'Dr. Paul Molive', role: 'Surgeon', hospital: 'California Hospital Medical Center', image: '09.jpg' },
    { name: 'Dr. Paul Molive', role: 'OT Assistant', hospital: 'California Hospital Medical Center', image: '10.jpg' },
];

const patients = ref([
    {
        id: 1,
        name: 'Petey Cruiser',
        image: '/assets/images/user/01.jpg',
        operationDate: '12-02-2020',
        disease: 'Fracture',
        doctors: [
            { id: 1, image: '/assets/images/user/05.jpg' },
            { id: 2, image: '/assets/images/user/06.jpg' },
            { id: 3, image: '/assets/images/user/07.jpg' },
        ],
    },
    {
        id: 2,
        name: 'Anna Sthesia',
        image: '/assets/images/user/02.jpg',
        operationDate: '14-02-2020',
        disease: 'Cataract surgery',
        doctors: [
            { id: 1, image: '/assets/images/user/05.jpg' },
            { id: 2, image: '/assets/images/user/06.jpg' },
            { id: 3, image: '/assets/images/user/07.jpg' },
        ],
    },
    {
        id: 3,
        name: 'Paul Molive',
        image: '/assets/images/user/03.jpg',
        operationDate: '14-02-2020',
        disease: 'Cancer',
        doctors: [
            { id: 1, image: '/assets/images/user/05.jpg' },
            { id: 2, image: '/assets/images/user/06.jpg' },
            { id: 3, image: '/assets/images/user/07.jpg' },
        ],
    },
    {
        id: 4,
        name: 'Anna Mull',
        image: '/assets/images/user/04.jpg',
        operationDate: '16-02-2020',
        disease: 'Hysterectomy',
        doctors: [
            { id: 1, image: '/assets/images/user/05.jpg' },
            { id: 2, image: '/assets/images/user/06.jpg' },
            { id: 3, image: '/assets/images/user/07.jpg' },
        ],
    },
    {
        id: 5,
        name: 'Ruby Saul',
        image: '/assets/images/user/05.jpg',
        operationDate: '18-02-2020',
        disease: 'Cancer',
        doctors: [
            { id: 1, image: '/assets/images/user/05.jpg' },
            { id: 2, image: '/assets/images/user/06.jpg' },
            { id: 3, image: '/assets/images/user/07.jpg' },
        ],
    },
]);

const activities = [
    { time: 5, status: 'Active', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque.', dotClass: '' },
    { time: 6, status: 'Away', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque.', dotClass: 'bg-success' },
    { time: 10, status: 'Active', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque.', dotClass: 'bg-info' },
    { time: 15, status: 'Offline', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque.', dotClass: 'bg-warning' },
    { time: 18, status: 'Away', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque.', dotClass: 'bg-danger' }
];
const homeServeyChart = reactive({
    series: [
        {
            name: 'Cash Flow',
            data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
                5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
                48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
            ]
        },
    ],
    options: {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                colors: {
                    ranges: [{
                        from: -100,
                        to: -46,
                        color: '#e64141'
                    }, {
                        from: -45,
                        to: 0,
                        color: '#089bab'
                    }, {
                        from: 0,
                        to: 20,
                        color: '#FC9F5B'
                    }]
                },
                columnWidth: '80%',
            }
        },
        dataLabels: {
            enabled: false,
        },
        yaxis: {
            title: {
                text: 'Growth',
            },
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "%";
                }
            }
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
                '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
                '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
                '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
                '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
                '2013-07-01', '2013-08-01', '2013-09-01'
            ],
            labels: {
                rotate: -90
            }
        }

    }
})

const radarchart = reactive({
    series: [44, 55, 67, 83],
    options: {
        labels: ["Apples", "Oranges", "Bananas", "Berries"],
        colors: ["#089bab", "#FC9F5B", "#75DDDD", "#ffb57e"],
        chart: {
            height: 290,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: "22px",
                    },
                    value: {
                        fontSize: "16px",
                    },
                    total: {
                        show: !0,
                        label: "Total",
                        formatter: function (e) {
                            return 249;
                        },
                    },
                },
            },
        },
    }
})

const chart7 = reactive({
    chart: {
        height: 150,
        type: 'area',
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 1000
            }
        },
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        },
        group: 'sparklines'
    },
    colors: ['#099fb0'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 3
    },
    series: [
        {
            data: [80, 90, 60, 90, 44, 50, 98, 80, 90]
        }
    ],
    markers: {
        size: 4
    },
    yaxis: {
        max: 100
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
        }
    },
    legend: {
        show: false
    }
})

const chart8 = reactive({
    chart: {
        height: 150,
        type: 'area',
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 1000
            }
        },
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        },
        group: 'sparklines'
    },
    colors: ['#fc9f5b'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 3
    },
    series: [
        {
            data: [50, 60, 45, 90, 44, 50, 98, 75, 50]
        }
    ],
    markers: {
        size: 4
    },
    yaxis: {
        max: 100
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
        }
    },
    legend: {
        show: false
    }
})
</script>