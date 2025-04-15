<template>
    <section class="sign-in-page custom-auth-height d-md-flex align-items-center">
        <b-container class="sign-in-page-bg mt-5 mb-md-5 mb-0 p-0">
            <b-row>
                <b-col md="6" class="text-center z-2">
                    <div class="sign-in-detail text-white">
                        <router-link to="/" class="sign-in-logo mb-2">
                            <img src="/assets/images/logo-white.png" class="img-fluid" alt="" />
                        </router-link>
                        <swiper :pagination="{ el: '.swiper-pagination', clickable: true }" :navigation="true"
                            :loop="true" :autoplay="{ delay: 5000 }">
                            <swiper-slide v-for="(slide, index) in slides" :key="index">
                                <img :src="generateImgPath(slide.image)" class="d-block w-100" alt="..." />
                                <h4 class="mb-1 mt-1 text-white">{{ slide.title }}</h4>
                                <p class="pb-5">{{ slide.description }}</p>
                            </swiper-slide>
                            <div class="swiper-pagination auth-custom-pagination-style" slot="pagination"></div>
                        </swiper>
                    </div>
                </b-col>
                <b-col md="6" class="position-relative z-2">
                    <div class="sign-in-from d-flex flex-column justify-content-center">
                        <img src="/assets/images/login/mail.png" width="80" alt="">
                        <h1 class="mt-3 mb-0">Success !</h1>
                        <p>A email has been send to youremail@domain.com. Please check for an email from company and
                            click on the
                            included link to reset your password.</p>
                        <div class="d-inline-block w-100">

                            <router-link to="/" class="btn btn-primary-subtle mt-3">Back to Home</router-link>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';

// Install modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const generateImgPath = (path) => {
    return window.origin + import.meta.env.BASE_URL + path;
};

const slides = [
    {
        image: '/assets/images/login/1.png',
        title: 'Manage your orders',
        description: 'It is a long established fact that a reader will be distracted by the readable content.',
    },
    {
        image: '/assets/images/login/2.png',
        title: 'Track your shipments',
        description: 'Stay updated with your deliveries in real time.',
    },
    {
        image: '/assets/images/login/3.png',
        title: 'Get support anytime',
        description: 'Our support team is here to help you 24/7.',
    },
];
</script>