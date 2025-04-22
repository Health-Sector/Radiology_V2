<template>
    <b-row>
        <b-col cols="12">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Validate Wizard</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <form class="form needs-validation" id="registration" novalidate @submit.prevent="handleSubmit">
                        <nav>
                            <div class="nav nav-pills nav-fill stepwizard-row mt-2" role="tablist">
                                <a v-for="index in tabCount" :key="index" :id="tabId[index - 1].replace(/\s+/g, '-')"
                                    class="nav-link btn rounded-4"
                                    :class="{ active: tabCurrentIndex === index, actives: index < tabCurrentIndex }">
                                    <i :class="iconClasses[index - 1]"></i><span>{{ tabTitles[index - 1] }}</span>
                                </a>
                            </div>
                        </nav>
                        <div class="tab-content pt-4 pb-2" id="nav-tabContent">
                            <b-row :key="'tab-pane'"
                                :class="['tab-pane fade', { 'show active': tabCurrentIndex === 1 }]" id="user-detail">
                                <b-col sm="12">
                                    <b-col md="12" class="p-0">
                                        <h3 class="mb-4">User Information:</h3>
                                        <b-row>
                                            <b-col md="6" class="form-group">
                                                <label class="form-label">First Name</label>
                                                <input maxlength="100" type="text" required="required"
                                                    class="form-control" placeholder="Enter First Name" />
                                            </b-col>
                                            <b-col md="6" class="form-group">
                                                <label class="form-label">Last Name</label>
                                                <input maxlength="100" type="text" required="required"
                                                    class="form-control" placeholder="Enter Last Name" />
                                            </b-col>
                                            <b-col md="6" class="form-group">
                                                <label for="uname" class="form-label">User Name: *</label>
                                                <input type="text" class="form-control" id="uname" required="required"
                                                    name="uname" placeholder="Enter User Name">
                                            </b-col>
                                            <b-col md="6" class="form-group">
                                                <label for="emailid" class="form-label">Email Id: *</label>
                                                <input type="email" id="emailid" class="form-control"
                                                    required="required" name="emailid" placeholder="Email ID">
                                            </b-col>
                                            <b-col md="6" class="form-group">
                                                <label for="pwd" class="form-label">Password: *</label>
                                                <input type="password" class="form-control" required="required" id="pwd"
                                                    name="pwd" placeholder="Password">
                                            </b-col>
                                            <b-col md="6" class="form-group">
                                                <label for="cpwd" class="form-label">Confirm Password: *</label>
                                                <input type="password" class="form-control" id="cpwd"
                                                    required="required" name="cpwd" placeholder="Confirm Password">
                                            </b-col>
                                            <b-col md="6" class="form-group">
                                                <label for="cno" class="form-label">Contact Number: *</label>
                                                <input type="text" class="form-control" required="required" id="cno"
                                                    name="cno" placeholder="Contact Number">
                                            </b-col>
                                            <b-col md="6" class="form-group">
                                                <label for="acno" class="form-label">Alternate Contact Number: *</label>
                                                <input type="text" class="form-control" required="required" id="acno"
                                                    name="acno" placeholder="Alternate Contact Number">
                                            </b-col>
                                            <b-col md="12" class="mb-3 form-group">
                                                <label for="address" class="form-label">Address: *</label>
                                                <textarea name="address" class="form-control" id="address" rows="5"
                                                    required="required"></textarea>
                                            </b-col>
                                        </b-row>

                                    </b-col>
                                </b-col>
                            </b-row>
                            <b-row id="document-detail"
                                :class="['tab-pane fade', { 'show active': tabCurrentIndex === 2 }]">
                                <b-col sm="12">
                                    <b-col md="12" class="p-0">
                                        <h3 class="mb-4">Document Details:</h3>
                                        <b-row>
                                            <b-col md="6" class="form-group">
                                                <label for="cname" class="form-label">Company Name: *</label>
                                                <input type="text" class="form-control" required="required" id="cname"
                                                    name="cname" placeholder="Company Name">
                                            </b-col>
                                            <b-col md="6" class="form-group">
                                                <label for="ccno" class="form-label">Contact Number: *</label>
                                                <input type="text" class="form-control" required="required" id="ccno"
                                                    name="ccno" placeholder="Contact Number">
                                            </b-col>
                                            <b-col md="6" class="form-group">
                                                <label for="url" class="form-label">Company Url: *</label>
                                                <input type="text" class="form-control" required="required" id="url"
                                                    name="url" placeholder="Company Url.">
                                            </b-col>
                                            <b-col md="6" class="form-group">
                                                <label for="cemail" class="form-label">Company Mail Id: *</label>
                                                <input type="email" class="form-control" required="required" id="cemail"
                                                    name="cemail" placeholder="Company Mail Id.">
                                            </b-col>
                                            <b-col md="12" class="form-group">
                                                <label for="cadd" class="form-label">Company Address: *</label>
                                                <textarea name="cadd" required="required" id="cadd" class="form-control"
                                                    rows="5"></textarea>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-col>
                            </b-row>
                            <b-row id="bank-detail"
                                :class="['tab-pane fade', { 'show active': tabCurrentIndex === 3 }]">
                                <b-col sm="12">
                                    <b-col md="12" class="p-0">
                                        <h3 class="mb-4">Bank Detail:</h3>
                                        <b-row>
                                            <b-col md="6" class="form-group">
                                                <label for="panno" class="form-label">Pan No: *</label>
                                                <input type="text" class="form-control" required="required" id="panno"
                                                    name="panno" placeholder="Pan No.">
                                            </b-col>
                                            <b-col md="6" class="form-group">
                                                <label for="accno" class="form-label">Account No: *</label>
                                                <input type="text" class="form-control" required="required" id="accno"
                                                    name="accno" placeholder="Account No.">
                                            </b-col>
                                            <b-col md="6" class="form-group">
                                                <label for="accname" class="form-label">Account Holder Name: *</label>
                                                <input type="text" class="form-control" required="required" id="accname"
                                                    name="accname" placeholder="Account Holder Name.">
                                            </b-col>
                                            <b-col md="6" class="form-group">
                                                <label for="ifsc" class="form-label">IFSC Code: *</label>
                                                <input type="text" class="form-control" required="required" id="ifsc"
                                                    name="ifsc" placeholder="IFSC Code.">
                                            </b-col>
                                            <b-col md="6" class="form-group">
                                                <label for="bankname" class="form-label">Bank Name: *</label>
                                                <input type="text" class="form-control" required="required"
                                                    id="bankname" name="bankname" placeholder="Bank Name.">
                                            </b-col>
                                            <b-col md="6" class="form-group">
                                                <label for="branch" class="form-label">Bank Branch Name: *</label>
                                                <input type="text" class="form-control" required="required" id="branch"
                                                    name="branch" placeholder="Bank Branch Name.">
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-col>
                            </b-row>
                            <b-row id="confirm-data"
                                :class="['tab-pane fade', { 'show active': tabCurrentIndex === 4 }]">
                                <b-col sm="12">
                                    <b-col md="12" class="p-0">
                                        <h3 class="mb-4 text-left">Finish:</h3>
                                        <b-row class="justify-content-center">
                                            <b-col cols="3"> <img src="/assets/images/page-img/img-success.png"
                                                    class="img-fluid" alt="img-success" loading="lazy">
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-col>
                            </b-row>
                        </div>
                        <b-row class="justify-content-between">
                            <b-col cols="auto">
                                <button type="button" v-show="tabCurrentIndex !== 1" class="btn btn-secondary-subtle"
                                    @click="previous">Previous</button>
                            </b-col>
                            <b-col cols="auto">
                                <button type="button" class="btn btn-primary-subtle"
                                    v-show="tabCurrentIndex !== tabCount" @click="next">Next</button>
                                <button type="submit" class="btn btn-primary-subtle"
                                    v-if="tabCurrentIndex === tabCount">Finish</button>
                            </b-col>
                        </b-row>
                    </form>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>

<script setup>
import { ref } from 'vue';

const tabCurrentIndex = ref(1);
const tabCount = 4;

const tabTitles = ['User Detail', 'Document Detail', 'Bank Detail', 'Confirm'];
const tabId = ['user-tab', 'document-tab', 'bank-tab', 'confirm-tab']
const iconClasses = ['ri-lock-unlock-line text-white', 'ri-user-fill text-danger bg-danger-subtle', 'ri-camera-fill text-success bg-success-subtle', 'ri-check-fill text-warning bg-warning-subtle'];
const next = () => {
    if (validateCurrentTab()) {
        tabCurrentIndex.value = Math.min(tabCount, tabCurrentIndex.value + 1);
    }
};

const previous = () => {
    tabCurrentIndex.value = Math.max(1, tabCurrentIndex.value - 1);
};

const validateCurrentTab = () => {
    const form = document.querySelector(`#nav-tabContent .tab-pane:nth-child(${tabCurrentIndex._value})`);
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        const isValid = Array.from(inputs).every(input => input.checkValidity() && input.value !== "");

        if (isValid) {
            form.parentElement.parentElement.classList.remove('was-validated');
        } else {
            form.parentElement.parentElement.classList.add('was-validated');
        }

        return isValid;
    }
    return false;
};

const handleSubmit = () => {
    if (validateCurrentTab()) {
        // Handle form submission logic here
        console.log('Form submitted:', formData.value);
    }
};
</script>
