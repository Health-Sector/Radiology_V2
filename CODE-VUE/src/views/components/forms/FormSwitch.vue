<template>
    <b-row>
        <b-col cols="12">
            <b-card no-body>
                <b-card-header class="">
                    <div class="card-title">
                        <h4 class="mb-0">State</h4>
                    </div>
                </b-card-header>
                <b-card-body class="pt-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi vulputate, ex ac venenatis mollis,
                        diam nibh
                        finibus leo</p>
                    <div class="d-flex flex-wrap gap-4">
                        <div class="form-check form-group form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                            <label class="form-check-label" for="flexSwitchCheckDefault">false /
                                Inactive</label>
                        </div>
                        <div class="form-check form-switch form-group">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                                checked>
                            <label class="form-check-label" for="flexSwitchCheckChecked">true / active</label>
                        </div>
                        <div class="form-check form-switch form-group">
                            <input class="form-check-input bg-info" type="checkbox" role="switch"
                                id="flexSwitchCheckCheckedDisabled" checked disabled>
                            <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">disable /
                                active</label>
                        </div>
                        <div class="form-check form-switch form-group">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled"
                                disabled>
                            <label class="form-check-label" for="flexSwitchCheckDisabled">disable /
                                Inactive</label>
                        </div>
                    </div>
                </b-card-body>
            </b-card>

            <b-card no-body>
                <b-card-header class="">
                    <div class="card-title">
                        <h4 class="mb-0">Text</h4>
                    </div>
                </b-card-header>
                <b-card-body class="pt-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi vulputate, ex ac venenatis mollis,
                        diam nibh
                        finibus leo</p>
                    <div class="d-flex flex-wrap gap-4 custom-toggels">
                        <div class="d-flex flex-column align-items-center gap-1">
                            <p class="m-0 ">Primary</p>
                            <div>
                                <input type="checkbox" id="switch" class="checkboxs " checked />
                                <label for="switch" class="toggles text-white bg-primary border-primary">
                                    <p class="texts ps-1">
                                        On &nbsp;&nbsp;Off
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div class="d-flex flex-column align-items-center gap-1">
                            <p class="m-0">Secondary</p>
                            <div>
                                <input type="checkbox" id="tr_fal_switch" class="checkboxs " checked />
                                <label for="tr_fal_switch" class="toggles text-white bg-success border-success">
                                    <p class="texts ps-1">
                                        Tr&nbsp;&nbsp;&nbsp;&nbsp;Fal
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div class="d-flex flex-column align-items-center gap-1">
                            <p class="m-0">Danger</p>
                            <div>
                                <input type="checkbox" id="y_n_switch" class="checkboxs" checked />
                                <label for="y_n_switch" class="toggles text-white bg-danger border-danger">
                                    <p class="texts ps-1">
                                        Yes&nbsp;&nbsp;No
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>
                </b-card-body>
            </b-card>

            <b-card no-body>
                <b-card-header class="">
                    <div class="card-title">
                        <h4 class="mb-0">Color</h4>
                    </div>
                </b-card-header>
                <b-card-body class="pt-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi vulputate, ex ac venenatis mollis,
                        diam
                        nibh
                        finibus leo</p>
                    <div class="d-flex flex-wrap gap-4 custom-toggels">

                        <div class="form-check form-switch  form-group">
                            <input class="form-check-input text-primary" type="checkbox" role="switch"
                                id="flexSwitchCheckChecked" checked>
                            <label class="form-check-label" for="flexSwitchCheckChecked">Primary</label>
                        </div>
                        <div class="form-check form-switch form-group">
                            <input class="form-check-input text-success" type="checkbox" role="switch"
                                id="flexSwitchCheckChecked" checked>
                            <label class="form-check-label" for="flexSwitchCheckChecked">Success</label>
                        </div>
                        <div class="form-check form-switch form-group">
                            <input class="form-check-input text-danger" type="checkbox" role="switch"
                                id="flexSwitchCheckChecked" checked>
                            <label class="form-check-label" for="flexSwitchCheckChecked">Danger</label>
                        </div>
                        <div class="form-check form-switch form-group">
                            <input class="form-check-input text-warning" type="checkbox" role="switch"
                                id="flexSwitchCheckChecked" checked>
                            <label class="form-check-label" for="flexSwitchCheckChecked">Warning</label>
                        </div>
                        <div class="form-check form-switch form-group">
                            <input class="form-check-input text-gray" type="checkbox" role="switch"
                                id="flexSwitchCheckChecked" checked>
                            <label class="form-check-label" for="flexSwitchCheckChecked">Dark</label>
                        </div>
                        <div class="form-check form-switch form-group">
                            <input class="form-check-input text-info" type="checkbox" role="switch"
                                id="flexSwitchCheckChecked" checked>
                            <label class="form-check-label" for="flexSwitchCheckChecked">Info</label>
                        </div>

                    </div>
                </b-card-body>
            </b-card>

            <b-card no-body>
                <b-card-header class="">
                    <div class="card-title">
                        <h4 class="mb-0">Icon</h4>
                    </div>
                </b-card-header>
                <b-card-body class="pt-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi vulputate, ex ac venenatis mollis,
                        diam
                        nibh
                        finibus leo</p>
                    <div class="d-flex flex-wrap gap-4 custom-toggels">
                        <div class="d-flex flex-column align-items-center gap-1">
                            <p class="m-0">Primary</p>
                            <div>
                                <input type="checkbox" id="switchs" class="checkboxs " checked />
                                <label for="switchs" class="toggles text-white bg-primary border-primary">
                                    <p class="texts ps-1">
                                        <i class="fa fa-check custom-switch-size"></i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-check custom-switch-size"></i>
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div class="d-flex flex-column align-items-center gap-1">
                            <p class="m-0">Success</p>
                            <div>
                                <input type="checkbox" id="succ-switch" class="checkboxs " checked />
                                <label for="succ-switch" class="toggles text-white bg-success border-success">
                                    <p class="texts ps-1">
                                        <i class="fa fa-check custom-switch-size"></i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-check custom-switch-size"></i>
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div class="d-flex flex-column align-items-center gap-1">
                            <p class="m-0">Danger</p>
                            <div>
                                <input type="checkbox" id="dan-switch" class="checkboxs " checked />
                                <label for="dan-switch" class="toggles text-white bg-danger border-danger">
                                    <p class="texts ps-1">
                                        <i class="fa fa-times custom-switch-size"></i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-times custom-switch-size"></i>
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div class="d-flex flex-column align-items-center gap-1">
                            <p class="m-0">Warning</p>
                            <div>
                                <input type="checkbox" id="war-switch" class="checkboxs " checked />
                                <label for="war-switch" class="toggles text-white bg-warning border-warning">
                                    <p class="texts ps-1">
                                        <i class="fa fa-exclamation-triangle custom-switch-size"></i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;<i
                                            class="fa fa-exclamation-triangle custom-switch-size"></i>
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div class="d-flex flex-column align-items-center gap-1">
                            <p class="m-0">Dark</p>
                            <div>
                                <input type="checkbox" id="dark-switch" class="checkboxs " checked />
                                <label for="dark-switch" class="toggles text-white bg-dark border-dark">
                                    <p class="texts ps-2">
                                        <i class="fa fa-thumb-tack custom-switch-size"></i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
                                            class="fa fa-thumb-tack custom-switch-size"></i>
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div class="d-flex flex-column align-items-center gap-1">
                            <p class="m-0">info</p>
                            <div>
                                <input type="checkbox" id="info-switch" class="checkboxs " checked />
                                <label for="info-switch" class="toggles text-white bg-info border-info">
                                    <p class="texts ps-2">
                                        <i class="fa fa-info custom-switch-size"></i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-info custom-switch-size"></i>
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>