<template>
    <section class="sign-in-page custom-auth-height d-md-flex align-items-center">
        <b-container class="sign-in-page-bg mt-5 mb-md-5 mb-0 p-0">
            <b-row>
                <b-col md="6" class="text-center z-2">
                    <div class="sign-in-detail text-white">
                        <router-link to="/" class="sign-in-logo mb-2">
                            <img src="/assets/images/logo-white.png" class="img-fluid" alt="" />
                        </router-link>
                        <!-- Swiper with pagination and navigation -->
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
                        <img src="/assets/images/user/1.jpg" alt="user-image" width="25%" class="rounded-circle">
                        <h4 class="mt-3 mb-0">Hi ! Michael Smith</h4>
                        <p class="">Enter your password to access the admin.</p>
                        <form class="mt-0">
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="mb-2">Password</label>
                                <input type="Password" class="form-control mb-0 border" id="exampleInputEmail1"
                                    placeholder="Password">
                            </div>
                            <div class="d-inline-block w-100">
                                <button type="submit" class="btn btn-primary-subtle float-end mt-3">Log In</button>
                            </div>
                        </form>
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
