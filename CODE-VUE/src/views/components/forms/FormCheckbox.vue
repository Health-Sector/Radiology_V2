<template>
    <b-row>
        <b-col sm="12" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Basic Checkbox</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac
                        venenatis mollis,
                        diam nibh finibus leo</p>
                    <div class="checkbox d-inline-block me-2 form-group">
                        <input type="checkbox" class="checkbox-input" id="checkbox1">{{ '' }}
                        <label for="checkbox1">Primary / Inactive</label>
                    </div>{{ '' }}
                    <div class="checkbox d-inline-block me-2 form-group">
                        <input type="checkbox" class="checkbox-input" id="checkbox2" checked="">{{ '' }}
                        <label for="checkbox2">Primary / Active</label>
                    </div>{{ '' }}
                    <div class="checkbox d-inline-block me-2 form-group">
                        <input type="checkbox" class="checkbox-input" id="checkbox3" disabled="">{{ '' }}
                        <label for="checkbox3">Disable / Inactive</label>
                    </div>{{ '' }}
                    <div class="checkbox d-inline-block me-2 form-group">
                        <input type="checkbox" class="checkbox-input" id="checkbox4" checked="" disabled="">{{ '' }}
                        <label for="checkbox4">Active / Disable</label>
                    </div>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Custom Color</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac
                        venenatis mollis,
                        diam nibh finibus leo</p>
                    <div class="d-flex gap-3 flex-wrap">
                        <div
                            class="custom-control custom-checkbox custom-checkbox-color custom-control-inline p-0 form-group">
                            <input type="checkbox" class="form-check-input bg-primary border-0" id="customCheck-11">{{
                                '' }}
                            <label class="form-check-label" for="customCheck-11">Primary </label>
                        </div>{{ '' }}
                        <div
                            class="custom-control custom-checkbox custom-checkbox-color custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input bg-success border-0" id="customCheck-22">{{
                                '' }}
                            <label class="form-check-label" for="customCheck-22">Success</label>
                        </div>{{ '' }}
                        <div
                            class="custom-control custom-checkbox custom-checkbox-color custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input bg-danger border-0" id="customCheck-33">{{ ''
                            }}
                            <label class="form-check-label" for="customCheck-33">Danger</label>
                        </div>{{ '' }}
                        <div
                            class="custom-control custom-checkbox custom-checkbox-color custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input bg-warning border-0" id="customCheck-44">{{
                                '' }}
                            <label class="form-check-label" for="customCheck-44">Warning</label>
                        </div>{{ '' }}
                        <div
                            class="custom-control custom-checkbox custom-checkbox-color custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input bg-dark border-0" id="customCheck-55">{{ ''
                            }}
                            <label class="form-check-label" for="customCheck-55">Dark</label>
                        </div>{{ '' }}
                        <div
                            class="custom-control custom-checkbox custom-checkbox-color custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input bg-info border-0" id="customCheck-66">{{ ''
                            }}
                            <label class="form-check-label" for="customCheck-66"> Info</label>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Boolean Checkbox</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac
                        venenatis mollis,
                        diam nibh finibus leo</p>
                    <div class="d-flex gap-4">
                        <div class="custom-control custom-checkbox custom-control-inline p-0 form-group">
                            <input type="checkbox" class="form-check-input me-1" id="customCheck-t" checked="">{{ '' }}
                            <label class="form-check-label" for="customCheck-t">True</label>
                        </div>{{ '' }}
                        <div class="custom-control custom-checkbox custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input me-1" id="customCheck-f">{{ '' }}
                            <label class="form-check-label" for="customCheck-f">False</label>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col sm="12" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Custom Checkbox</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac
                        venenatis mollis,
                        diam nibh finibus leo</p>
                    <div class="d-flex gap-3 flex-wrap">
                        <div class="custom-control custom-checkbox custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input" id="customCheck5">{{ '' }}
                            <label class="form-check-label" for="customCheck5">Primary / Inactive</label>
                        </div>{{ '' }}
                        <div class="custom-control custom-checkbox custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input" id="customCheck6" checked="">{{ '' }}
                            <label class="form-check-label" for="customCheck6">Primary - active</label>
                        </div>{{ '' }}
                        <div class="custom-control custom-checkbox custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input" id="customCheck7" disabled="">{{ '' }}
                            <label class="form-check-label" for="customCheck7">Primary - inactive - disabled</label>
                        </div>{{ '' }}
                        <div class="custom-control custom-checkbox custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input" id="customCheck8" checked="" disabled="">{{
                            '' }}
                            <label class="form-check-label" for="customCheck8">Primary - active - disabled</label>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Color</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac
                        venenatis mollis,
                        diam nibh finibus leo</p>
                    <div class="d-flex gap-3 flex-wrap ">
                        <div
                            class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline p-0 form-group">
                            <input type="checkbox" class="form-check-input bg-primary me-1 border-0" id="customCheck-1"
                                checked="">{{ '' }}
                            <label class="form-check-label" for="customCheck-1"> Primary</label>
                        </div>{{ '' }}
                        <div
                            class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input bg-success me-1 border-0" id="customCheck-2"
                                checked="">{{ '' }}
                            <label class="form-check-label" for="customCheck-2">Success</label>
                        </div>{{ '' }}
                        <div
                            class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input bg-danger me-1 border-0" id="customCheck-3"
                                checked="">{{ '' }}
                            <label class="form-check-label" for="customCheck-3">Danger</label>
                        </div>{{ '' }}
                        <div
                            class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input bg-warning me-1 border-0" id="customCheck-4"
                                checked="">{{ '' }}
                            <label class="form-check-label" for="customCheck-4">Warning</label>
                        </div>{{ '' }}
                        <div
                            class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input bg-dark me-1 border-0" id="customCheck-5"
                                checked="">{{ '' }}
                            <label class="form-check-label" for="customCheck-5">Dark</label>
                        </div>{{ '' }}
                        <div
                            class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input bg-info me-1 border-0" id="customCheck-6"
                                checked="">{{ '' }}
                            <label class="form-check-label" for="customCheck-6">Info</label>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Change Icon</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac
                        venenatis mollis,
                        diam nibh finibus leo</p>
                    <div class="d-flex gap-3 flex-wrap custom-checkboxs ">
                        <div class="custom-control custom-checkbox checkbox-icon custom-control-inline form-group ">
                            <input type="checkbox" class="form-check-input" id="customCheck-10" checked="">{{ '' }}
                            <label class="form-check-label" for="customCheck-10"><i
                                    class="fa fa-music"></i>Music</label>
                        </div>{{ '' }}
                        <div class="custom-control custom-checkbox checkbox-icon custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input" id="customCheck-20" checked="">{{ '' }}
                            <label class="form-check-label" for="customCheck-20"><i
                                    class="fa fa-commenting-o"></i>SMS</label>
                        </div>{{ '' }}
                        <div class="custom-control custom-checkbox checkbox-icon custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input" id="customCheck-30" checked="">{{ '' }}
                            <label class="form-check-label" for="customCheck-30"><i
                                    class="fa fa-times"></i>Cancel</label>
                        </div>{{ '' }}
                        <div class="custom-control custom-checkbox checkbox-icon custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input" id="customCheck-40" checked="">{{ '' }}
                            <label class="form-check-label" for="customCheck-40"><i class="fa fa-file"></i>File</label>
                        </div>{{ '' }}
                        <div class="custom-control custom-checkbox checkbox-icon custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input" id="customCheck-50" checked="">{{ '' }}
                            <label class="form-check-label" for="customCheck-50"><i class="fa fa-bold"></i>Bold</label>
                        </div>{{ '' }}
                        <div class="custom-control custom-checkbox checkbox-icon custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input" id="customCheck-60" checked="">{{ '' }}
                            <label class="form-check-label" for="customCheck-60"><i
                                    class="fa fa-map-marker"></i>Location</label>
                        </div>{{ '' }}
                        <div class="custom-control custom-checkbox checkbox-icon custom-control-inline form-group">
                            <input type="checkbox" class="form-check-input" id="customCheck-70" checked="">{{ '' }}
                            <label class="form-check-label" for="customCheck-70"><i
                                    class="fa fa-camera"></i>Camera</label>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>

<script setup>
import { reactive } from 'vue';

// Define reactive state for checkboxes
const checkboxes = reactive({
    music: true,
    sms: true,
    cancel: true,
    file: true,
    bold: true,
    location: true,
    camera: true
});
</script>