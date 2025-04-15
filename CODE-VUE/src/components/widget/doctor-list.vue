<template>
    <b-col sm="6" md="3">
        <b-card no-body>
            <b-card-body class="text-center">
                <div class="doc-profile">
                    <img class="rounded-circle img-fluid avatar-80"
                        :src="generateImgPath(`/assets/images/user/${doctorImg}`)" alt="profile">
                </div>
                <div class="doc-info mt-3">
                    <h4> {{ doctorName }}</h4>
                    <p class="mb-0">{{ Specialists }}</p>
                    <a href="javascript:void(0);">www.demo.com</a>
                </div>
                <div class="iq-doc-description mt-2">
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non
                        gravida. In id ipsum consequat</p>
                </div>
                <div class="doc-social-info mt-3 mb-3">
                    <ul class="m-0 p-0 list-group list-group-horizontal justify-content-center">
                        <li class="list-group-item border-0 p-0"><a href="#"><i class="ri-facebook-fill"></i></a></li>
                        <li class="list-group-item border-0 p-0"><a href="#"><i class="ri-twitter-fill"></i></a> </li>
                        <li class="list-group-item border-0 p-0"><a href="#"><i class="ri-google-fill"></i></a></li>
                    </ul>
                </div>
                <router-link to="/doctor/doctor-profile" class="btn btn-primary-subtle">View Profile</router-link>
            </b-card-body>
        </b-card>
    </b-col>
</template>
<script setup>
const props = defineProps({
    doctorImg: {
        type: String,
        default: '',
    },
    doctorName: {
        type: String,
        default: '',
    },
    Specialists: {
        type: String,
        default: '',
    },
})

const generateImgPath = (path) => {
    return window.origin + import.meta.env.BASE_URL + path;
};
</script>