<template>
    <!-- work in progress -->
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
                                <h4 class="mb-1 mt-3 text-white">{{ slide.title }}</h4>
                                <p class="pb-5">{{ slide.description }}</p>
                            </swiper-slide>
                            <div class="swiper-pagination auth-custom-pagination-style" slot="pagination"></div>
                        </swiper>
                    </div>
                </b-col>
                <b-col md="6" class="position-relative z-2">
                    <div class="sign-in-from d-flex flex-column justify-content-center">
                        <h1 class="mb-0">Sign In</h1>
                        <form class="mt-4">
                            <p>Enter your email address and password to access admin panel.</p>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email Address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    placeholder="Enter email" />
                            </div>
                            <div class="d-flex justify-content-between form-group mb-0">
                                <label for="exampleInputPassword1">Password</label>
                                <router-link to="/auth/recover-password" class="float-end">Forgot
                                    Password?</router-link>
                            </div>
                            <input type="password" class="form-control" id="exampleInputPassword1"
                                placeholder="Password" />
                            <div class="d-flex w-100 justify-content-between align-items-center w-100 mt-3">
                                <div class="custom-control custom-checkbox d-flex d-inline-block form-group mb-0">
                                    <input type="checkbox" class="custom-control-input me-1" id="customCheck1" />{{ ''
                                    }}
                                    <label class="custom-control-label" for="customCheck1">Remember Me</label>
                                </div>
                                <button type="submit" class="btn btn-primary-subtle float-end">Sign
                                    In</button>
                            </div>
                            <div
                                class="sign-info d-flex justify-content-between flex-column flex-lg-row align-items-center">
                                <span class="dark-color d-inline-block line-height-2">Don't
                                    have an account?
                                    <router-link to="/auth/sign-up">Sign Up</router-link></span>
                                <ul class="auth-social-media">
                                    <li><a href="#"><i class="ri-facebook-box-line"></i></a></li>
                                    <li><a href="#"><i class="ri-twitter-line"></i></a></li>
                                    <li><a href="#"><i class="ri-instagram-line"></i></a></li>
                                </ul>
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