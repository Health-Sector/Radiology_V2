<template>
    <b-row>
        <b-col sm="12" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Default Radio Buttons</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac
                        venenatis mollis,
                        diam nibh finibus leo</p>

                    <div class="radio d-inline-block me-2 form-group">
                        <input type="radio" name="bsradio" id="radio1" class="form-check-input" checked="">{{ '' }}
                        <label for="radio1">Active</label>
                    </div>{{ '' }}
                    <div class="radio d-inline-block me-2 form-group">
                        <input type="radio" name="bsradio" class="form-check-input" id="radio2">{{ '' }}
                        <label for="radio2">Inactive</label>
                    </div>{{ '' }}
                    <div class="radio d-inline-block me-2 form-group">
                        <input type="radio" name="bsradio1" class="form-check-input" id="radio3" disabled checked="">{{
                            '' }}
                        <label for="radio3">Active - Disabled</label>
                    </div>{{ '' }}
                    <div class="radio d-inline-block me-2 form-group">
                        <input type="radio" name="bsradio1" class="form-check-input" id="radio4" disabled>{{ '' }}
                        <label for="radio3">Inactive - Disabled</label>
                    </div>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Custom Colored Radio Buttons</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac
                        venenatis mollis,
                        diam nibh finibus leo</p>
                    <div class="d-flex gap-2 flex-wrap">
                        <div class="custom-control custom-radio custom-radio-color custom-control-inline form-group">
                            <input type="radio" id="customRadio01" name="customRadio-11"
                                class="form-check-input bg-primary me-1">{{ '' }}
                            <label class="form-check-label" for="customRadio01"> Primary </label>
                        </div>{{ '' }}
                        <div class="custom-control custom-radio custom-radio-color custom-control-inline form-group">
                            <input type="radio" id="customRadio02" name="customRadio-11"
                                class="form-check-input bg-success me-1">{{ '' }}
                            <label class="form-check-label" for="customRadio02"> Success </label>
                        </div>{{ '' }}
                        <div class="custom-control custom-radio custom-radio-color custom-control-inline form-group">
                            <input type="radio" id="customRadio03" name="customRadio-11"
                                class="form-check-input bg-danger me-1">{{ '' }}
                            <label class="form-check-label" for="customRadio03"> Danger </label>
                        </div>{{ '' }}
                        <div class="custom-control custom-radio custom-radio-color custom-control-inline form-group">
                            <input type="radio" id="customRadio04" name="customRadio-11"
                                class="form-check-input bg-warning me-1">{{ '' }}
                            <label class="form-check-label" for="customRadio04"> Warning </label>
                        </div>{{ '' }}
                        <div class="custom-control custom-radio custom-radio-color custom-control-inline form-group">
                            <input type="radio" id="customRadio05" name="customRadio-11"
                                class="form-check-input bg-dark me-1">{{ '' }}
                            <label class="form-check-label" for="customRadio05"> Dark </label>
                        </div>{{ '' }}
                        <div class="custom-control custom-radio custom-radio-color custom-control-inline form-group">
                            <input type="radio" id="customRadio06" name="customRadio-11"
                                class="form-check-input bg-info me-1">{{ '' }}
                            <label class="form-check-label" for="customRadio06"> Info </label>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col sm="12" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Custom Radio Buttons</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac
                        venenatis mollis,
                        diam nibh finibus leo</p>
                    <div class="d-flex gap-2 flex-wrap">
                        <div class="custom-control custom-radio custom-control-inline form-group">
                            <input type="radio" id="customRadio6" name="customRadio-1" class="form-check-input">{{ '' }}
                            <label class="form-check-label" for="customRadio6"> One </label>
                        </div>{{ '' }}
                        <div class="custom-control custom-radio custom-control-inline form-group">
                            <input type="radio" id="customRadio7" name="customRadio-1" class="form-check-input">{{ '' }}
                            <label class="form-check-label" for="customRadio7"> Two </label>
                        </div>{{ '' }}
                        <div class="custom-control custom-radio custom-control-inline form-group">
                            <input type="radio" id="customRadio8" name="customRadio-1" class="form-check-input"
                                checked="">{{ '' }}
                            <label class="form-check-label" for="customRadio8"> Three </label>
                        </div>{{ '' }}
                        <div class="custom-control custom-radio custom-control-inline form-group">
                            <input type="radio" id="customRadio-8" name="customRadio-2" class="form-check-input"
                                checked="">{{ '' }}
                            <label class="form-check-label" for="customRadio-8"> Four Checked </label>
                        </div>{{ '' }}
                        <div class="custom-control custom-radio custom-control-inline form-group">
                            <input type="radio" id="customRadio9" name="customRadio-3" class="form-check-input"
                                disabled>{{ '' }}
                            <label class="form-check-label" for="customRadio9"> Five disabled</label>
                        </div>{{ '' }}
                        <div class="custom-control custom-radio custom-control-inline form-group">
                            <input type="radio" id="customRadio10" name="customRadio-4" class="form-check-input"
                                disabled checked="">{{ '' }}
                            <label class="form-check-label" for="customRadio10"> Six Selected and disabled</label>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Colored Radio Buttons</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac
                        venenatis mollis,
                        diam nibh finibus leo</p>
                    <div class="d-flex gap-2 flex-wrap">
                        <div class="form-check form-check-inline form-group">
                            <input type="radio" id="customRadio-1" name="customRadio-10"
                                class="form-check-input text-primary me-2">
                            <label class="form-check-label" for="customRadio-1"> Primary </label>
                        </div>
                        <div class="form-check form-check-inline form-group">
                            <input type="radio" id="customRadio-2" name="customRadio-10"
                                class="form-check-input text-success me-2">
                            <label class="form-check-label" for="customRadio-2"> Success </label>
                        </div>
                        <div class="form-check form-check-inline form-group">
                            <input type="radio" id="customRadio-3" name="customRadio-10"
                                class="form-check-input text-danger me-2">
                            <label class="form-check-label" for="customRadio-3"> Danger </label>
                        </div>
                        <div class="form-check form-check-inline form-group">
                            <input type="radio" id="customRadio-4" name="customRadio-10"
                                class="form-check-input text-warning me-2">
                            <label class="form-check-label" for="customRadio-4"> Warning </label>
                        </div>
                        <div class="form-check form-check-inline form-group">
                            <input type="radio" id="customRadio-5" name="customRadio-10"
                                class="form-check-input text-dark me-2">
                            <label class="form-check-label" for="customRadio-5"> Dark </label>
                        </div>
                        <div class="form-check form-check-inline form-group">
                            <input type="radio" id="customRadio-6" name="customRadio-10"
                                class="form-check-input text-info me-2">
                            <label class="form-check-label" for="customRadio-6"> Info </label>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>