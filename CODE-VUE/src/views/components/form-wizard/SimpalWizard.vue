<template>
    <b-row>
        <b-col sm="12" lg="12">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Simple Wizard</h4>
                    </div>
                </b-card-header>
                <b-card-body>
                    <form id="form-wizard1" class="mt-3 text-center">
                        <ul id="top-tab-list" class="p-0 row list-inline">
                            <b-col id="account" tag="li" lg="3" md="6" class="mb-2 text-start"
                                :class="{ 'active': isActive(0), 'active done': isDone(0) }">
                                <a href="javascript:void(0);">
                                    <div class="iq-icon me-3">
                                        <svg class="icon-20 svg-icon" width="20" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4"
                                                d="M8.23918 8.70907V7.36726C8.24934 5.37044 9.92597 3.73939 11.9989 3.73939C13.5841 3.73939 15.0067 4.72339 15.5249 6.19541C15.6976 6.65262 16.2057 6.89017 16.663 6.73213C16.8865 6.66156 17.0694 6.50253 17.171 6.29381C17.2727 6.08508 17.293 5.84654 17.2117 5.62787C16.4394 3.46208 14.3462 2 11.9786 2C8.95048 2 6.48126 4.41626 6.46094 7.38714V8.91084L8.23918 8.70907Z"
                                                fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M7.7688 8.71118H16.2312C18.5886 8.71118 20.5 10.5808 20.5 12.8867V17.8246C20.5 20.1305 18.5886 22.0001 16.2312 22.0001H7.7688C5.41136 22.0001 3.5 20.1305 3.5 17.8246V12.8867C3.5 10.5808 5.41136 8.71118 7.7688 8.71118ZM11.9949 17.3286C12.4928 17.3286 12.8891 16.941 12.8891 16.454V14.2474C12.8891 13.7703 12.4928 13.3827 11.9949 13.3827C11.5072 13.3827 11.1109 13.7703 11.1109 14.2474V16.454C11.1109 16.941 11.5072 17.3286 11.9949 17.3286Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>{{ '' }}
                                    <span class="dark-wizard">Account</span>
                                </a>
                            </b-col>
                            <b-col id="personal" tag="li" lg="3" md="6" class="mb-2 text-start"
                                :class="{ 'active': isActive(1), 'active done': isDone(1) }">
                                <a href="javascript:void(0);">
                                    <div class="iq-icon me-3">
                                        <svg class="icon-20" width="20" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z"
                                                fill="currentColor"></path>
                                            <path opacity="0.4"
                                                d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>{{ '' }}
                                    <span class="dark-wizard">Personal</span>
                                </a>
                            </b-col>
                            <b-col id="payment" tag="li" lg="3" md="6" class="mb-2 text-start"
                                :class="{ 'active': isActive(2), 'active done': isDone(2) }">
                                <a href="javascript:void(0);">
                                    <div class="iq-icon me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon-20" width="20"
                                            viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M16.71 10.0721C16.71 10.5716 17.11 10.9711 17.61 10.9711C18.11 10.9711 18.52 10.5716 18.52 10.0721C18.52 9.57269 18.11 9.16315 17.61 9.16315C17.11 9.16315 16.71 9.57269 16.71 10.0721ZM14.77 16.1054C14.06 16.8146 13.08 17.2542 12 17.2542C10.95 17.2542 9.97 16.8446 9.22 16.1054C8.48 15.3563 8.07 14.3774 8.07 13.3285C8.06 12.2897 8.47 11.3108 9.21 10.5616C9.96 9.81243 10.95 9.40288 12 9.40288C13.05 9.40288 14.04 9.81243 14.78 10.5516C15.52 11.3008 15.93 12.2897 15.93 13.3285C15.92 14.4173 15.48 15.3962 14.77 16.1054ZM12 10.9012C11.35 10.9012 10.74 11.1509 10.27 11.6204C9.81 12.0799 9.56 12.6892 9.57 13.3185V13.3285C9.57 13.9778 9.82 14.5871 10.28 15.0466C10.74 15.5061 11.35 15.7558 12 15.7558C13.34 15.7558 14.42 14.667 14.43 13.3285C14.43 12.6792 14.18 12.0699 13.72 11.6104C13.26 11.1509 12.65 10.9012 12 10.9012Z"
                                                fill="currentColor"></path>
                                            <path opacity="0.4"
                                                d="M17.44 6.2364L17.34 6.01665C17.07 5.44728 16.76 4.78801 16.57 4.40844C16.11 3.50943 15.32 3.00999 14.35 3H9.64C8.67 3.00999 7.89 3.50943 7.43 4.40844C7.23 4.80799 6.89 5.52719 6.61 6.11654L6.55 6.2364C6.52 6.31632 6.44 6.35627 6.36 6.35627C3.95 6.35627 2 8.3141 2 10.7114V16.6448C2 19.0422 3.95 21 6.36 21H17.64C20.04 21 22 19.0422 22 16.6448V10.7114C22 8.3141 20.04 6.35627 17.64 6.35627C17.55 6.35627 17.48 6.30633 17.44 6.2364Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>{{ '' }}
                                    <span class="dark-wizard">Image</span>
                                </a>
                            </b-col>
                            <b-col id="confirm" tag="li" lg="3" md="6" class="mb-2 text-start"
                                :class="{ 'active': isActive(3), 'active done': isDone(3) }">
                                <a href="javascript:void(0);">
                                    <div class="iq-icon me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>{{ '' }}
                                    <span class="dark-wizard">Finish</span>
                                </a>
                            </b-col>
                        </ul>

                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade" :class="{ 'active show': isActive(0) }" role="tabpanel">
                                <div class="form-card text-start">
                                    <b-row>
                                        <b-col cols="7">
                                            <h3 class="mb-4">Account Information:</h3>
                                        </b-col>
                                        <b-col cols="5">
                                            <h2 class="steps text-end">Step 1 - 4</h2>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <div class="form-group  cust-form-elements">
                                                <label class="form-label">Email: *</label>
                                                <input type="email" class="form-control" name="email"
                                                    placeholder="Email Id" />
                                            </div>
                                        </b-col>
                                        <b-col md="6">
                                            <div class="form-group  cust-form-elements">
                                                <label class="form-label">Username: *</label>
                                                <input type="text" class="form-control" name="uname"
                                                    placeholder="UserName" />
                                            </div>
                                        </b-col>
                                        <b-col md="6">
                                            <div class="form-group cust-form-elements">
                                                <label class="form-label">Password: *</label>
                                                <input type="password" class="form-control" name="pwd"
                                                    placeholder="Password" />
                                            </div>
                                        </b-col>
                                        <b-col md="6">
                                            <div class="form-group cust-form-elements">
                                                <label class="form-label">Confirm Password: *</label>
                                                <input type="password" class="form-control" name="cpwd"
                                                    placeholder="Confirm Password" />
                                            </div>
                                        </b-col>
                                    </b-row>
                                    <button type="button" class="btn btn-primary-subtle next action-button float-end"
                                        @click="nextStep()">Next</button>
                                </div>
                            </div>
                            <div class="tab-pane fade" :class="{ 'active show': isActive(1) }" role="tabpanel">
                                <div class="form-card text-start">
                                    <b-row>
                                        <b-col cols="7">
                                            <h3 class="mb-4">Personal Information:</h3>
                                        </b-col>
                                        <b-col cols="5">
                                            <h2 class="steps text-end">Step 2 - 4</h2>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <div class="form-group cust-form-elements">
                                                <label class="form-label">First Name: *</label>
                                                <input type="text" class="form-control" name="fname"
                                                    placeholder="First Name" />
                                            </div>
                                        </b-col>
                                        <b-col md="6">
                                            <div class="form-group cust-form-elements">
                                                <label class="form-label">Last Name: *</label>
                                                <input type="text" class="form-control" name="lname"
                                                    placeholder="Last Name" />
                                            </div>
                                        </b-col>
                                        <b-col md="6">
                                            <div class="form-group cust-form-elements">
                                                <label class="form-label">Contact No.: *</label>
                                                <input type="text" class="form-control" name="phno"
                                                    placeholder="Contact No." />
                                            </div>
                                        </b-col>
                                        <b-col md="6">
                                            <div class="form-group cust-form-elements">
                                                <label class="form-label">Alternate Contact No.: *</label>
                                                <input type="text" class="form-control" name="phno_2"
                                                    placeholder="Alternate Contact No." />
                                            </div>
                                        </b-col>
                                    </b-row>
                                    <button type="button" class="btn btn-primary-subtle next action-button float-end"
                                        @click="nextStep()">Next</button>
                                    <button type="button"
                                        class="btn btn-dark previous action-button-previous float-end me-1"
                                        @click="previousStep()">Previous</button>
                                </div>
                            </div>
                            <div class="tab-pane fade" :class="{ 'active show': isActive(2) }" role="tabpanel">
                                <div class="form-card text-start">
                                    <b-row>
                                        <b-col cols="7">
                                            <h3 class="mb-4">Image Upload:</h3>
                                        </b-col>
                                        <b-col cols="5">
                                            <h2 class="steps text-end">Step 3 - 4</h2>
                                        </b-col>
                                    </b-row>
                                    <div class="form-group cust-form-elements">
                                        <label class="form-label">Upload Your Photo:</label>
                                        <input type="file" class="form-control" name="pic" accept="image/*">
                                    </div>
                                    <div class="form-group cust-form-elements">
                                        <label class="form-label">Upload Signature Photo:</label>
                                        <input type="file" class="form-control" name="pic-2" accept="image/*">
                                    </div>
                                    <button type="button" class="btn btn-primary-subtle next action-button float-end"
                                        @click="nextStep()">Submit</button>
                                    <button type="button"
                                        class="btn btn-dark previous action-button-previous float-end me-1"
                                        @click="previousStep()">Previous</button>
                                </div>
                            </div>
                            <div class="tab-pane fade" :class="{ 'active show': isActive(3) }" role="tabpanel">
                                <div class="form-card">
                                    <b-row>
                                        <b-col cols="7">
                                            <h3 class="mb-4 text-start">Finish:</h3>
                                        </b-col>
                                        <b-col cols="5">
                                            <h2 class="steps text-end">Step 4 - 4</h2>
                                        </b-col>
                                    </b-row>
                                    <br><br>
                                    <h2 class="text-center text-success"><strong>SUCCESS !</strong></h2>
                                    <br>
                                    <b-row class="justify-content-center">
                                        <b-col cols="3"> <img src="/assets/images/page-img/img-success.png"
                                                class="img-fluid" alt="fit-image" loading="lazy"> </b-col>
                                    </b-row>
                                    <br><br>
                                    <b-row class="justify-content-center">
                                        <b-col cols="7" class="text-center">
                                            <h5 class="text-center purple-text">You Have Successfully Signed Up</h5>
                                        </b-col>
                                    </b-row>
                                </div>
                            </div>
                        </div>
                    </form>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>

<script setup>
import { ref } from 'vue';

const steps = ['Account Information', 'Personal Information', 'Image Upload', 'Finish'];
const currentStep = ref(0);

// Function to check if the step is active
const isActive = (index) => currentStep.value === index;

// Function to check if the step is done
const isDone = (index) => currentStep.value > index;

// Function to go to the next step
const nextStep = () => {
    if (currentStep.value < steps.length - 1) {
        currentStep.value += 1; // Move to the next step
    }
};

// Function to go to the previous step
const previousStep = () => {
    if (currentStep.value > 0) {
        currentStep.value -= 1; // Move to the previous step
    }
};
</script>
