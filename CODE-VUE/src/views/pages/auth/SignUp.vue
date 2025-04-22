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
                        <h1 class="mb-0">Sign Up</h1>
                        <form class="mt-4">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Your Full Name</label>
                                <input type="email" class="form-control mb-0" id="exampleInputEmail1"
                                    placeholder="Your Full Name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail2">Email address</label>
                                <input type="email" class="form-control mb-0" id="exampleInputEmail2"
                                    placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control mb-0" id="exampleInputPassword1"
                                    placeholder="Password" />
                            </div>
                            <div class="d-flex justify-content-between w-100 align-items-center">
                                <div class="custom-control d-flex custom-checkbox d-inline-block">
                                    <input type="checkbox" class="custom-control-input me-1" id="customCheck1" />
                                    {{ '' }}
                                    <label class="custom-control-label" for="customCheck1">I
                                        accept
                                        <router-link to="/extra-pages/terms-of-service">Terms and
                                            Conditions</router-link></label>
                                </div>
                                <button type="submit" class="btn btn-primary-subtle float-end">Sign
                                    Up</button>
                            </div>
                            <div
                                class="sign-info d-flex justify-content-between flex-column flex-lg-row align-items-center">
                                <span class="dark-color d-inline-block line-height-2">Already
                                    Have Account ?
                                    <router-link to="/auth/sign-in">Sign In</router-link></span>
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