<template>
   <div>
      <b-row>
         <b-col sm="12">
            <b-row>
               <!-- Iterate through cardData to render cards dynamically -->
               <b-col v-for="(card, index) in cardData" :key="index" md="6" lg="3">
                  <b-card no-body>
                     <b-card-body>
                        <div :class="`progress-bar-vertical ${card.bgClass}`" :ref="el => (progressBars[index] = el)">
                           <div :class="`custom-progress-bar ${card.progressClass}`" role="progressbar"
                              aria-valuemin="0" :aria-valuenow="card.progress" aria-valuemax="100"
                              :style="{ height: visibleProgress[index] ? card.progress + '%' : '0%', transition: 'height 2s ease' }">
                           </div>
                        </div>
                        <span class="d-block line-height-4">{{ card.date }}</span>
                        <h4 class="mb-2 mt-2">{{ card.title }}</h4>
                        <p class="mb-0 line-height">{{ card.description }}</p>
                     </b-card-body>
                  </b-card>
               </b-col>
               <!-- Custom background card -->
               <b-col md="6" lg="3">
                  <b-card no-body>
                     <b-card-body class="p-0 rounded"
                        :style="`background: url(${generateImgPath('/assets/images/page-img/38.png')}) no-repeat center center; background-size: contain; min-height: 152px;`">
                     </b-card-body>
                  </b-card>
               </b-col>
            </b-row>
         </b-col>

         <!-- User Profile Card -->
         <b-col lg="4">
            <b-card no-body class="user-profile-block">
               <b-card-body>
                  <div class="user-details-block">
                     <div class="user-profile text-center">
                        <img src="/assets/images/user/11.png" alt="profile-img" class="rounded-circle img-fluid"
                           style="width: 130px;" />
                     </div>
                     <div class="text-center mt-3 pb-3">
                        <h4><b>Bini Jets</b></h4>
                        <p>Doctor</p>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in
                           arcu turpis. Nunc
                        </p>
                        <a href="#" class="btn btn-primary-subtle">Assign</a>
                     </div>
                     <hr />
                     <ul class="doctoe-sedual d-flex align-items-center justify-content-between p-0 m-0">
                        <li class="text-center">
                           <h3><vue3-autocounter ref="counter" :start-amount="0" :end-amount="4500" separator=""
                                 :duration="3" />
                           </h3>
                           <span>Operations</span>
                        </li>
                        <li class="text-center">
                           <h3><vue3-autocounter ref="counter" :start-amount="0" :end-amount="3.9" separator=""
                                 decimalSeparator='.' :decimals='1' :duration="3" />
                           </h3>
                           <span>Medical Rating</span>
                        </li>
                     </ul>
                  </div>
               </b-card-body>
            </b-card>
         </b-col>

         <!-- Health Curve Chart -->
         <b-col lg="8">
            <b-card no-body>
               <b-card-header class="d-flex justify-content-between">
                  <div class="header-title">
                     <b-card-title class="card-title">Health Curve</b-card-title>
                  </div>
               </b-card-header>
               <b-card-body style="position: relative;">
                  <ApexCharts id="home-chart-06" type="area" :options="chartOptions4" :series="chartSeries4"
                     height="340" />
               </b-card-body>
            </b-card>
         </b-col>
      </b-row>

      <!-- Nearest Treatment and other cards -->
      <b-row>
         <b-col lg="4">
            <b-card no-body>
               <b-card-header class="d-flex justify-content-between">
                  <b-card-title>Nearest Treatment</b-card-title>
               </b-card-header>
               <div class="course-picker card-body d-flex">
                  <flat-picker v-model="inlineDate" class="d-none inline_flatpickr" :config="inlineDatepicker"
                     placeholder="select Date"></flat-picker>
               </div>
            </b-card>
         </b-col>
         <b-col lg="4">
            <b-card no-body>
               <b-card-body>
                  <h6>APPOINTMENTS</h6>
                  <h3><b>5075</b></h3>
               </b-card-body>
               <div class="wave-chart-container" style="height: 80px;">

                  <ApexChart element="wave-chart-7" :chartOption="wavechart7" :isLive="true" />
               </div>
            </b-card>
            <b-card no-body>
               <b-card-body>
                  <h6>NEW PATIENTS</h6>
                  <h3><b>1200</b></h3>
               </b-card-body>
               <div class="wave-chart-container" style="height: 80px;">
                  <ApexChart element="wave-chart-8" :chartOption="wavechart8" :isLive="true" />
               </div>
            </b-card>
         </b-col>

         <!-- Hospital Management -->
         <b-col lg="4">
            <b-card no-body>
               <b-card-header class="d-flex justify-content-between">
                  <div class="header-title">
                     <b-card-title class="card-title">Hospital Management</b-card-title>
                  </div>
               </b-card-header>
               <b-card-body class="hospital-mgt">
                  <div v-for="(management, index) in hospitalManagementData" :key="index"
                     :class="`progress ${management.marginClass === true ? '' : 'mb-4'}`" style=" height: 30px;">
                     <b-progress-bar class="primary" role="progressbar"
                        :style="{ width: management.primaryWidth + '%' }" :aria-valuenow="management.primaryWidth"
                        aria-valuemin="0" aria-valuemax="100">{{ management.label
                        }}</b-progress-bar>
                     <b-progress-bar variant="warning" role="progressbar"
                        :style="{ width: management.warningWidth + '%' }" aria-valuemin="0" aria-valuemax="100">{{
                           management.warningWidth }}%</b-progress-bar>
                  </div>
               </b-card-body>
            </b-card>
         </b-col>
      </b-row>

      <!-- Patient Progress -->
      <b-row>
         <b-col lg="3">
            <b-card no-body>
               <b-card-header class="d-flex justify-content-between  ">
                  <div class="header-title">
                     <b-card-title>Patient Progress</b-card-title>
                  </div>
               </b-card-header>
               <b-card-body>
                  <ul class="patient-progress m-0 p-0">
                     <li class="d-flex mb-3 align-items-center justify-content-between">
                        <div class="media-support-info">
                           <h6>Bud Jet</h6>
                        </div>
                        <span class="badge badge-primary">30%</span>
                     </li>
                     <li class="d-flex mb-3 align-items-center justify-content-between">
                        <div class="media-support-info">
                           <h6>Barney Cull</h6>
                        </div>
                        <span class="badge badge-success">70%</span>
                     </li>
                     <li class="d-flex mb-3 align-items-center justify-content-between">
                        <div class="media-support-info">
                           <h6>Eric Shun</h6>
                        </div>
                        <span class="badge badge-danger">15%</span>
                     </li>
                     <li class="d-flex mb-3 align-items-center justify-content-between">
                        <div class="media-support-info">
                           <h6>Rick Shaw</h6>
                        </div>
                        <span class="badge badge-warning">55%</span>
                     </li>
                     <li class="d-flex mb-3 align-items-center justify-content-between">
                        <div class="media-support-info">
                           <h6>Ben Effit</h6>
                        </div>
                        <span class="badge badge-info">45%</span>
                     </li>
                     <li class="d-flex mb-3 align-items-center justify-content-between">
                        <div class="media-support-info">
                           <h6>Rick Shaw</h6>
                        </div>
                        <span class="badge badge-warning">55%</span>
                     </li>
                     <li class="d-flex mb-3 align-items-center justify-content-between">
                        <div class="media-support-info">
                           <h6>Marge Arita</h6>
                        </div>
                        <span class="badge badge-primary">65%</span>
                     </li>
                     <li class="d-flex align-items-center justify-content-between">
                        <div class="media-support-info">
                           <h6>Barry Cudat</h6>
                        </div>
                        <span class="badge badge-danger">15%</span>
                     </li>
                  </ul>
               </b-card-body>
            </b-card>
         </b-col>

         <b-col lg="6">
            <b-card no-body>
               <b-card-header class="d-flex justify-content-between ">
                  <b-card-title>
                     <h4>Patient Overview</h4>
                  </b-card-title>
               </b-card-header>
               <div class="card-body">
                  <div id="home-chart-03" class="chart" style="height: 280px;"></div>
               </div>
            </b-card>
         </b-col>

         <b-col lg="3">
            <b-card no-body>
               <b-card-header class="d-flex justify-content-between ">
                  <div class="header-title">
                     <b-card-title>Visits From Countries </b-card-title>
                  </div>
               </b-card-header>
               <b-card-body>
                  <div class="details">
                     <span class="title text-dark">United States</span>
                     <div class="percentage float-end text-primary">95
                        <span>%</span>
                     </div>
                     <div class="progress-bar-linear d-inline-block w-100">
                        <b-progress class="bg-primary-subtle shadow-none w-100" style="height: 6px">
                           <b-progress-bar variant="primary" :value="progress1"></b-progress-bar>
                        </b-progress>
                     </div>
                  </div>
                  <div class="details mt-4">
                     <span class="title text-dark">India</span>
                     <div class="percentage float-end text-warning">75
                        <span>%</span>
                     </div>
                     <div class="progress-bar-linear d-inline-block w-100">
                        <b-progress class="bg-warning-subtle shadow-none w-100" style="height: 6px">
                           <b-progress-bar variant="warning" :value="progress2"></b-progress-bar>
                        </b-progress>
                     </div>
                  </div>
                  <div class="details mt-4">
                     <span class="title text-dark">Australia</span>
                     <div class="percentage float-end text-success">55
                        <span>%</span>
                     </div>
                     <div class="progress-bar-linear d-inline-block w-100">
                        <b-progress class="bg-success-subtle shadow-none w-100" style="height: 6px">
                           <b-progress-bar variant="success" :value="progress3"></b-progress-bar>
                        </b-progress>
                     </div>
                  </div>
                  <div class="details mt-4">
                     <span class="title text-dark">Brazil</span>
                     <div class="percentage float-end text-danger">25
                        <span>%</span>
                     </div>
                     <div class="progress-bar-linear d-inline-block w-100">
                        <b-progress class="bg-danger-subtle shadow-none w-100" style="height: 6px">
                           <b-progress-bar variant="danger" :value="progress4"></b-progress-bar>
                        </b-progress>
                     </div>
                  </div>
               </b-card-body>
            </b-card>
         </b-col>
      </b-row>
      <b-row>
         <b-col lg="8">
            <b-card no-body>
               <div class="p-4 pb-2 border-bottom d-flex justify-content-between">
                  <b-card-title>New Appointments</b-card-title>
                  <div class="dropdown">
                     <span class="ri-more-fill" id="dropdownMenuButton5" data-bs-toggle="dropdown"
                        aria-expanded="true"></span>
                     <div class="dropdown-menu dropdown-menu-end iq-dropdown" aria-labelledby="dropdownMenuButton5">
                        <a class="dropdown-item" href="#"><i class="ri-eye-fill me-2"></i>View</a>
                        <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill me-2"></i>Delete</a>
                        <a class="dropdown-item" href="#"><i class="ri-pencil-fill me-2"></i>Edit</a>
                        <a class="dropdown-item" href="#"><i class="ri-printer-fill me-2"></i>Print</a>
                        <a class="dropdown-item" href="#"><i class="ri-file-download-fill me-2"></i>Download</a>
                     </div>
                  </div>
               </div>
               <div class="card-body">
                  <div class="table-responsive mb-0">
                     <table class="table mb-0 table-borderless">
                        <thead>
                           <tr>
                              <th scope="col">Patient</th>
                              <th scope="col">Doctor</th>
                              <th scope="col">Date</th>
                              <th scope="col">Timing</th>
                              <th scope="col">Contact</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr v-for="appointment in appointments" :key="appointment.id">
                              <td>{{ appointment.patient }}</td>
                              <td>{{ appointment.doctor }}</td>
                              <td>{{ appointment.date }}</td>
                              <td>{{ appointment.timing }}</td>
                              <td>{{ appointment.contact }}</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </b-card>
         </b-col>
         <div class="col-lg-4">
            <div class="card">
               <div class="card-header">
                  <b-card-title>Doctors Lists</b-card-title>
               </div>
               <div class="card-body">
                  <ul ref="dataScrollbar" class="doctors-lists m-0 p-0 data-scrollbar"
                     style="height: 277px;outline: none;overflow-y: scroll;">
                     <li v-for="doctor in doctors" :key="doctor.id"
                        class="list-group-item d-flex justify-content-between align-items-center p-0 mb-4 border-0">
                        <div class="d-flex align-items-center">
                           <img :src="generateImgPath(doctor.image)" alt="doctor" class="rounded-circle avatar-40" />
                           <div class="ms-3">
                              <h6>{{ doctor.name }}</h6>
                              <p class="mb-0 font-size-12">{{ doctor.specialty }}</p>
                           </div>
                        </div>
                        <div class="card-header-toolbar d-flex align-items-center">
                           <div class="dropdown pe-3">
                              <span id="dropdownMenuButton41" data-bs-toggle="dropdown" aria-expanded="true"
                                 role="button">
                                 <i class="ri-more-2-line"></i>
                              </span>
                              <div class="dropdown-menu dropdown-menu-end iq-dropdown"
                                 style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(14px, 34px);"
                                 data-popper-placement="bottom-start">
                                 <a class="dropdown-item " href="#"><i class="ri-eye-line me-2"></i>View</a>
                                 <a class="dropdown-item" href="#"><i class="ri-bookmark-line me-2"></i>Appointment</a>
                              </div>
                           </div>
                        </div>
                     </li>
                  </ul>
                  <a href="javascript:void(0);" class="btn btn-primary-subtle d-block mt-3">
                     <i class="ri-add-line"></i> View All Doctors
                  </a>
               </div>
            </div>
         </div>

      </b-row>
   </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
import FlatPicker from 'vue-flatpickr-component'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import ApexChart from '@/components/chart/ApexChart.vue';
import ApexCharts from 'vue3-apexcharts';
import Scrollbar from "smooth-scrollbar";

const generateImgPath = (path) => {
   return window.origin + import.meta.env.BASE_URL + path;
};

const progress1 = ref(0);
const progress2 = ref(0);
const progress3 = ref(0);
const progress4 = ref(0);

const loadProgress = (progressRef, targetValue) => {
   let value = 0;
   const interval = setInterval(() => {
      if (value >= targetValue) {
         clearInterval(interval);
      } else {
         value += 1;
         progressRef.value = value;
      }
   }, 10); // Adjust the speed of the loading animation here
};



const inlineDate = ref('')

const inlineDatepicker = reactive({
   inline: true,
})

const cardData = reactive([
   {
      bgClass: 'bg-primary-subtle',
      progressClass: 'bg-primary',
      progress: 70,
      date: '10 Feb, 2020',
      title: 'Hypertensive Crisis',
      description: 'Ongoing treatment',
   },
   {
      bgClass: 'bg-danger-subtle',
      progressClass: 'bg-danger',
      progress: 70,
      date: '12 Jan, 2020',
      title: 'Osteoporosis',
      description: 'Incurable',
   },
   {
      bgClass: 'bg-warning-subtle',
      progressClass: 'bg-warning',
      progress: 70,
      date: '15 Feb, 2020',
      title: 'Hypertensive Crisis',
      description: 'Examination',
   },
]);

// References for each progress bar
const progressBars = ref([]);
const visibleProgress = ref([]); // Tracks which bars are visible

const hospitalManagementData = [
   { label: 'OPD', primaryWidth: 20, warningWidth: 80 },
   { label: 'Treatment', primaryWidth: 30, warningWidth: 70 },
   { label: 'Laboratory Test', primaryWidth: 60, warningWidth: 40 },
   { label: 'New Patient', primaryWidth: 40, warningWidth: 60 },
   { label: 'Doctors', primaryWidth: 35, warningWidth: 65 },
   { label: 'Discharge', primaryWidth: 28, warningWidth: 75, marginClass: true },
];

const appointments = ref([
   { id: 1, patient: 'Petey Cruiser', doctor: 'Dr.Monty Carlo', date: '20/02/2020', timing: '8:00 AM', contact: '+1-202-555-0146' },
   { id: 2, patient: 'Anna Sthesia', doctor: 'Dr.Pete Sariya', date: '25/02/2020', timing: '8:30 AM', contact: '+1-202-555-0164' },
   { id: 3, patient: 'Paul Molive', doctor: 'Dr.Brock Lee', date: '25/02/2020', timing: '9:45 AM', contact: '+1-202-555-0153' },
   { id: 4, patient: 'Anna Mull', doctor: 'Dr.Barb Ackue', date: '27/02/2020', timing: '11:30 AM', contact: '+1-202-555-0154' },
   { id: 5, patient: 'Paige Turner', doctor: 'Dr.Walter Melon', date: '28/02/2020', timing: '3:30 PM', contact: '+1-202-555-0101' },
   { id: 6, patient: 'Don Stairs', doctor: 'Dr.Arty Ficial', date: '28/02/2020', timing: '4:30 PM', contact: '+1-202-555-0176' },
   { id: 7, patient: 'Pat Agonia', doctor: 'Dr.Barb Ackue', date: '29/02/2020', timing: '5:00 PM', contact: '+1-202-555-0194' },
]);

const doctors = ref([
   { id: 1, name: 'Dr. Paul Molive', specialty: 'MBBS, MD', image: '/assets/images/user/01.jpg' },
   { id: 2, name: 'Dr. Barb Dwyer', specialty: 'MD', image: '/assets/images/user/02.jpg' },
   { id: 3, name: 'Dr. Terry Aki', specialty: 'MBBS', image: '/assets/images/user/03.jpg' },
   { id: 4, name: 'Dr. Robin Banks', specialty: 'MBBS, MD', image: '/assets/images/user/04.jpg' },
   { id: 5, name: 'Dr. Barry Wine', specialty: 'BAMS', image: '/assets/images/user/05.jpg' },
   { id: 6, name: 'Dr. Zack Lee', specialty: 'MS, MD', image: '/assets/images/user/06.jpg' },
   { id: 7, name: 'Dr. Otto Matic', specialty: 'MBBS, MD', image: '/assets/images/user/07.jpg' },
   { id: 8, name: 'Dr. Moe Fugga', specialty: 'MD', image: '/assets/images/user/08.jpg' },
   { id: 9, name: 'Dr. Bud Wiser', specialty: 'MBBS', image: '/assets/images/user/09.jpg' },
   { id: 10, name: 'Dr. Barry Cade', specialty: 'MBBS, MD', image: '/assets/images/user/10.jpg' },
]);

const chartOptions4 = ref({
   chart: {
      height: 340,
      type: 'area',
   },
   dataLabels: {
      enabled: false,
   },
   stroke: {
      curve: "smooth",
   },
   colors: ["#089bab"],
   xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
   },
   tooltip: {
      x: {
         format: "dd/MM/yy HH:mm",
      },
   },
});

const chartSeries4 = ref([{
   name: 'Series1',
   data: [31, 40, 28, 51, 42, 109, 100]
}]);


const dataScrollbar = ref(null);
let scrollbarInstance = null;

// Patient overview pie chart
onMounted(() => {
   // Themes begin
   am4core.useTheme(am4themes_animated);
   // Themes end

   const chart = am4core.create('home-chart-03', am4charts.PieChart);
   chart.hiddenState.properties.opacity = 0; // Set initial opacity

   chart.data = [
      { country: 'USA', value: 401 },
      { country: 'India', value: 300 },
      { country: 'Australia', value: 200 },
      { country: 'Brazil', value: 100 },
   ];

   chart.rtl = true;
   chart.radius = am4core.percent(70);
   chart.innerRadius = am4core.percent(40);
   chart.startAngle = 180;
   chart.endAngle = 360;

   const series = chart.series.push(new am4charts.PieSeries());
   series.dataFields.value = 'value';
   series.dataFields.category = 'country';
   series.colors.list = [
      am4core.color('#089bab'),
      am4core.color('#2ca5b2'),
      am4core.color('#faa264'),
      am4core.color('#fcb07a'),
   ];

   series.slices.template.cornerRadius = 0;
   series.slices.template.innerCornerRadius = 0;
   series.slices.template.draggable = true;
   series.slices.template.inert = true;
   series.alignLabels = false;

   series.hiddenState.properties.startAngle = 90;
   series.hiddenState.properties.endAngle = 90;

   chart.legend = new am4charts.Legend();
   chart.logo.disabled = true;

   // Cleanup on component unmount
   onBeforeUnmount(() => {
      chart.dispose();
   });


   // for vertical progressBars
   const observer = new IntersectionObserver(
      entries => {
         entries.forEach(entry => {
            const index = progressBars.value.indexOf(entry.target);
            if (entry.isIntersecting && index !== -1) {
               visibleProgress.value[index] = true; // Set to true to trigger animation
            }
         });
      },
      { threshold: 0.1 } // Trigger when at least 10% is visible
   );

   // Observe each valid progress bar element
   progressBars.value.forEach(el => {
      if (el instanceof Element) observer.observe(el);
   });

   // Cleanup on component unmount
   onUnmounted(() => {
      progressBars.value.forEach(el => {
         if (el instanceof Element) observer.unobserve(el);
      });

      if (scrollbarInstance) {
         scrollbarInstance.destroy();
      }
   });
   // end vertical progressBars

   // smooth-scrollbar
   if (dataScrollbar.value) {
      scrollbarInstance = Scrollbar.init(dataScrollbar.value, {
         continuousScrolling: false,
      });
   }

   // progressbar transition
   loadProgress(progress1, 90);
   loadProgress(progress2, 75);
   loadProgress(progress3, 55);
   loadProgress(progress4, 25);
});

const wavechart7 = reactive({
   chart: {
      height: 80,
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
   dataLabels: {
      enabled: false
   },
   stroke: {
      curve: 'smooth',
      width: 3
   },
   fill: {
      type: 'gradient',
      gradient: {
         shadeIntensity: 1,
         opacityFrom: 0.5,
         opacityTo: 0
      }
   },
   series: [
      {
         data: []
      }
   ],
   colors: ['#089bab'],
   markers: {
      size: 0
   },
   xaxis: {
      type: 'datetime',
      range: 777600000
   },
   yaxis: {
      labels: {
         minWidth: 34
      },
      max: 100
   },
   legend: {
      show: false
   }
})

const wavechart8 = reactive({
   chart: {
      height: 80,
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
   dataLabels: {
      enabled: false
   },
   stroke: {
      curve: 'smooth',
      width: 3
   },
   fill: {
      type: 'gradient',
      gradient: {
         shadeIntensity: 1,
         opacityFrom: 0.5,
         opacityTo: 0
      }
   },
   series: [
      {
         data: []
      }
   ],
   colors: ['#fc9f5b'],
   markers: {
      size: 0
   },
   xaxis: {
      type: 'datetime',
      range: 777600000
   },
   yaxis: {
      labels: {
         minWidth: 34
      },
      max: 100
   },
   legend: {
      show: false
   }
})
</script>
<style>
.my-scrollbar {
   overflow-y: auto;
   scrollbar-width: thin;
   scrollbar-color: #888 #f1f1f1;
   /* Custom thumb and track color for Firefox */
}

/* For WebKit-based browsers (Chrome, Safari) */
.my-scrollbar::-webkit-scrollbar {
   width: 8px;
   /* Width of the scrollbar */
}

.my-scrollbar::-webkit-scrollbar-track {
   background-color: #f1f1f1;
   /* Background color of the scrollbar track */
}

.my-scrollbar::-webkit-scrollbar-thumb {
   background-color: #888;
   /* Color of the scrollbar thumb */
   border-radius: 4px;
   /* Optional: Rounding the thumb edges */
}

.my-scrollbar::-webkit-scrollbar-thumb:hover {
   background-color: #555;
   /* Color on hover for the thumb */
}
</style>
