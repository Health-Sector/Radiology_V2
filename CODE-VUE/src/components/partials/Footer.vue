<template>
    <footer class="footer rounded-pill mb-4 mx-0 mx-md-4">
        <div class="footer-body  ">
            <b-row class="d-flex flex-grow-1">
                <b-col lg="6" md="12">
                    <ul class="left-panel list-inline mb-0 p-0 d-flex justify-content-center justify-content-lg-start">
                        <li class="list-inline-item fw-500">
                            <router-link class="footer-link" to="/extra-pages/privacy-policy">Privacy
                                Policy</router-link>
                        </li>
                        <li class="list-inline-item fw-500">
                            <router-link class="footer-link footer-spacing" to="/extra-pages/terms-of-service">Terms of
                                Use</router-link>   
                        </li>
                    </ul>
                </b-col>
                <b-col lg="6" md="12">
                    <h6 class="right-panel mb-0 d-flex justify-content-center justify-content-lg-end">

                        Copyright {{ date }} <a href="#" class="px-1"> {{ appName }}
                        </a>
                        All Rights Reserved.
                    </h6>
                </b-col>

            </b-row>

        </div>
    </footer>
</template>

<script setup>
const date = new Date().getFullYear();
import { defineProps } from 'vue';

const props = defineProps({
    appName: {
        type: String,
        required: true
    }
});
</script>