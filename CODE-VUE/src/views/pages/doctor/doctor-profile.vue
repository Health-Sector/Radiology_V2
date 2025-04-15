<template>
    <b-row>
        <b-col lg="4">
            <b-card no-body>
                <b-card-body class="ps-0 pe-0 pt-0">
                    <div class="docter-details-block">
                        <div class="doc-profile-bg bg-primary rounded-top-2" style="height:150px;">
                        </div>
                        <div class="docter-profile text-center">
                            <img src="/assets/images/user/11.png" alt="profile-img" class="avatar-130 img-fluid">
                        </div>
                        <div class="text-center mt-3 ps-3 pe-3">
                            <h4><b>Bini Jets</b></h4>
                            <p>Doctor</p>
                            <p class="mb-0">Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Delectus
                                repudiandae eveniet harum.</p>
                        </div>
                        <hr>
                        <ul class="doctoe-sedual d-flex align-items-center justify-content-between p-0 m-0">
                            <li class="text-center">
                                <h3 class="counter"><vue3-autocounter ref="counter" :start-amount="0" :end-amount="4500"
                                        separator="" :duration="3" />
                                </h3>
                                <span>Operations</span>
                            </li>
                            <li class="text-center">
                                <h3 class="counter"><vue3-autocounter ref="counter" :start-amount="0" :end-amount="100"
                                        separator="" :duration="3" />
                                </h3>
                                <span>Hospital</span>
                            </li>
                            <li class="text-center">
                                <h3 class="counter"><vue3-autocounter ref="counter" :start-amount="0"
                                        :end-amount="10000" separator="" :duration="3" />
                                </h3>
                                <span>Patients</span>
                            </li>
                        </ul>
                    </div>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Personal Information</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="about-info m-0 p-0">
                        <b-row>
                            <b-col cols="4">First Name:</b-col>
                            <b-col cols="8">Bini</b-col>
                            <b-col cols="4">Last Name:</b-col>
                            <b-col cols="8">Jets</b-col>
                            <b-col cols="4">Age:</b-col>
                            <b-col cols="8">27</b-col>
                            <b-col cols="4">Position:</b-col>
                            <b-col cols="8">Senior Docter</b-col>
                            <b-col cols="4">Email:</b-col>
                            <b-col cols="8"><a href="mailto:biniJets24@demo.com">
                                    biniJets24@demo.com </a></b-col>
                            <b-col cols="4">Phone:</b-col>
                            <b-col cols="8"><a href="tel:001-2351-25612">001
                                    2351 256 12</a></b-col>
                            <b-col cols="4">Location:</b-col>
                            <b-col cols="8">USA</b-col>
                        </b-row>
                    </div>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <div class="card-header d-flex align-items-center justify-content-between">
                    <div class="header-title">
                        <b-card-title>Photos</b-card-title>
                    </div>
                </div>
                <b-card-body>
                    <div class="d-grid gap-card grid-cols-3">
                        <a v-for="(image, index) in images" :key="index" class="text-center"
                            @click="togglerGallery(index + 1)">
                            <img :src="generateImgPath(image)" class="img-fluid w-100" alt="profile-image"
                                loading="lazy" />
                        </a>
                    </div>
                    <FsLightbox :toggler="toggler" :sources="[generateImgPath('/assets/images/page-img/g1.jpg'),
                    generateImgPath('/assets/images/page-img/g2.jpg'),
                    generateImgPath('/assets/images/page-img/g3.jpg'),
                    generateImgPath('/assets/images/page-img/g4.jpg'),
                    generateImgPath('/assets/images/page-img/g5.jpg'),
                    generateImgPath('/assets/images/page-img/g6.jpg'),
                    generateImgPath('/assets/images/page-img/g7.jpg'),
                    generateImgPath('/assets/images/page-img/g8.jpg'),
                    generateImgPath('/assets/images/page-img/g9.jpg')
                    ]" :slide="slide" />
                </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="8">
            <b-row>
                <b-col md="6">
                    <b-card no-body>
                        <b-card-header class="d-flex justify-content-between">
                            <div class="header-title">
                                <b-card-title>Speciality</b-card-title>
                            </div>
                        </b-card-header>
                        <b-card-body>
                            <ul class="speciality-list m-0 p-0">
                                <li class="d-flex mb-4 align-items-center">
                                    <div class="user-img img-fluid"><a href="#" class="bg-primary-subtle"><i
                                                class="ri-award-fill"></i></a></div>
                                    <div class="media-support-info ms-3">
                                        <h6>Professional</h6>
                                        <p class="mb-0">Certified Skin
                                            Treatment</p>
                                    </div>
                                </li>
                                <li class="d-flex mb-4 align-items-center">
                                    <div class="user-img img-fluid"><a href="#" class="bg-warning-subtle"><i
                                                class="ri-award-fill"></i></a></div>
                                    <div class="media-support-info ms-3">
                                        <h6>Certified</h6>
                                        <p class="mb-0">Cold Laser Operation</p>
                                    </div>
                                </li>
                                <li class="d-flex mb-4 align-items-center">
                                    <div class="user-img img-fluid"><a href="#" class="bg-info-subtle"><i
                                                class="ri-award-fill"></i></a></div>
                                    <div class="media-support-info ms-3">
                                        <h6>Medication Laser</h6>
                                        <p class="mb-0">Hair Lose Product</p>
                                    </div>
                                </li>
                            </ul>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col md="6">
                    <b-card no-body>
                        <b-card-header class="d-flex justify-content-between">
                            <div class="header-title">
                                <b-card-title>Notifications</b-card-title>
                            </div>
                        </b-card-header>
                        <b-card-body>
                            <ul class="timeline">
                                <li>
                                    <div class="timeline-dots border-success"></div>
                                    <h6 class>Dr. Joy Send you Photo</h6>
                                    <small class="mt-1">23 November 2019</small>
                                </li>
                                <li>
                                    <div class="timeline-dots border-danger"></div>
                                    <h6 class>Reminder : Opertion Time!</h6>
                                    <small class="mt-1">20 November 2019</small>
                                </li>
                                <li>
                                    <div class="timeline-dots border-primary"></div>
                                    <h6 class="mb-1">Patient Call</h6>
                                    <small class="mt-1">19 November 2019</small>
                                </li>
                            </ul>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col md="6">
                    <b-card no-body>
                        <b-card-header class="d-flex justify-content-between">
                            <div class="header-title">
                                <b-card-title>Schedule</b-card-title>
                            </div>
                        </b-card-header>
                        <b-card-body>
                            <ul class="list-inline m-0 p-0">
                                <li v-for="(appointment, index) in appointments" :key="index">
                                    <h6 class="float-start mb-1">
                                        {{ appointment.name }} ({{ appointment.reason }})
                                    </h6>
                                    <small class="float-end mt-1">{{ appointment.date }}</small>
                                    <div class="d-inline-block w-100">
                                        <p :class="`badge text-bg-${appointment.badgeClass}`">
                                            {{ appointment.time }}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col md="6">
                    <b-card no-body>
                        <b-card-header class="d-flex justify-content-between">
                            <div class="header-title">
                                <b-card-title>Patients Notes</b-card-title>
                            </div>
                        </b-card-header>
                        <b-card-body>
                            <ul class="list-inline m-0 p-0">
                                <li v-for="(report, index) in reports" :key="index"
                                    class="d-flex align-items-center justify-content-between"
                                    :class="{ 'mb-3': index !== reports.length - 1 }">
                                    <div>
                                        <h6>{{ report.title }}</h6>
                                        <p class="mb-0">{{ report.test }}</p>
                                    </div>
                                    <div>
                                        <a href="#" :class="`btn btn-${report.btnClass}-subtle`">
                                            {{ report.action }}
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col md="12">
                    <b-card no-body>
                        <b-card-header class="d-flex justify-content-between">
                            <div class="header-title">
                                <b-card-title>Education</b-card-title>
                            </div>
                        </b-card-header>
                        <b-card-body>
                            <div class="table-responsive mb-0">
                                <table class="table mb-0 table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Year</th>
                                            <th scope="col">Degree</th>
                                            <th scope="col">Institute</th>
                                            <th scope="col">Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2010</td>
                                            <td>MBBS, M.D</td>
                                            <td>University of Wyoming</td>
                                            <td><span class="badge text-bg-success">Distinction</span></td>
                                        </tr>
                                        <tr>
                                            <td>2014</td>
                                            <td>M.D. of Medicine</td>
                                            <td>Netherland Medical College</td>
                                            <td><span class="badge text-bg-success">Distinction</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col md="12">
                    <b-card no-body>
                        <b-card-header class="d-flex justify-content-between">
                            <div class="header-title">
                                <b-card-title>Experience</b-card-title>
                            </div>
                        </b-card-header>
                        <b-card-body>
                            <div class="table-responsive mb-0">
                                <table class="table mb-0 table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Year</th>
                                            <th scope="col">Department</th>
                                            <th scope="col">Position</th>
                                            <th scope="col">Hospital</th>
                                            <th scope="col">Feedback</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2014 - 2018</td>
                                            <td>MBBS, M.D</td>
                                            <td>Senior Docter</td>
                                            <td>Midtown Medical Clinic</td>
                                            <td><span class="badge text-bg-primary">Good</span></td>
                                        </tr>
                                        <tr>
                                            <td>2018 - 2020</td>
                                            <td>M.D. of Medicine</td>
                                            <td>Associate Prof.</td>
                                            <td>Netherland Medical College</td>
                                            <td><span class="badge text-bg-success">excellence</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>
<script setup>
import { ref } from 'vue';
import FsLightbox from 'fslightbox-vue/v3'

const generateImgPath = (path) => {
    return window.origin + import.meta.env.BASE_URL + path;
};

const toggler = ref(false)
let slide = 1

const togglerGallery = (index) => {
    slide = index
    toggler.value = !toggler.value
}

const images = [
    '/assets/images/page-img/g1.jpg',
    '/assets/images/page-img/g2.jpg',
    '/assets/images/page-img/g3.jpg',
    '/assets/images/page-img/g4.jpg',
    '/assets/images/page-img/g5.jpg',
    '/assets/images/page-img/g6.jpg',
    '/assets/images/page-img/g7.jpg',
    '/assets/images/page-img/g8.jpg',
    '/assets/images/page-img/g9.jpg',
];

const appointments = [
    { name: 'Ruby Saul', reason: 'Blood Check', date: 'Today', time: '09:00 AM', badgeClass: 'primary' },
    { name: 'Anna Mull', reason: 'Fever', date: 'Today', time: '09:15 AM', badgeClass: 'danger' },
    { name: 'Petey Cruiser', reason: 'X-ray', date: 'Today', time: '10:00 AM', badgeClass: 'warning' },
    { name: 'Anna Sthesia', reason: 'Full body Check up', date: 'Today', time: '01:00 PM', badgeClass: 'info' },
    { name: 'Paul Molive', reason: 'Operation', date: 'Tomorrow', time: '09:00 AM', badgeClass: 'success' },
];

const reports = [
    { title: 'Treatment was good!', test: 'Eye Test', action: 'Open', btnClass: 'primary' },
    { title: 'My Health is better Now', test: 'Fever Test', action: 'Open', btnClass: 'primary' },
    { title: 'No Effected', test: 'Thyroid Test', action: 'Close', btnClass: 'danger' },
    { title: 'Operation Successfull', test: 'Orthopaedic', action: 'Open', btnClass: 'primary' },
    { title: 'Medical Care is just a click away', test: 'Join Pain', action: 'Close', btnClass: 'danger' },
    { title: 'Treatment is good', test: 'Skin Treatment', action: 'Open', btnClass: 'primary' },
];
</script>