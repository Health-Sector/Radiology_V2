<template>
    <b-container class="p-0">
        <div class="d-flex vh-100 justify-content-center">
            <div class=" text-center align-self-center">
                <div class="error position-relative">
                    <h1 class="text-primary" style="font-size: 185px; font-weight: bold;">404</h1>
                    <h2 class="mb-0">Oops! This Page is Not Found.</h2>
                    <p class="fs-5">The requested page dose not exist.</p>
                    <router-link class="btn btn-primary-subtle mt-3" to="/">
                        <div class="d-flex align-items-center"><i class="ri-home-4-line me-2"></i>
                            <p class="mb-0">Back to Home</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </b-container>
</template>