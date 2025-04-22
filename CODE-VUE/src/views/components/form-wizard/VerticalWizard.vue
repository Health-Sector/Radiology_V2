<template>
    <b-row>
        <b-col sm="12">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Vertical Wizard</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <b-row>
                        <b-col md="3">
                            <ul id="top-tabbar-vertical" class="p-0">
                                <li class="active step1 list-group-item" id="personal"
                                    :class="{ 'active': isActive(0), 'done': isDone(0) }">
                                    <a href="javascript:void(0);">
                                        <i class="ri-lock-unlock-line text-primary"></i><span>Personal</span>
                                    </a>
                                </li>
                                <li id="contact" class="step2 list-group-item"
                                    :class="{ 'active': isActive(1), 'active done': isDone(1) }">
                                    <a href="javascript:void(0);">
                                        <i class="ri-user-fill text-danger">
                                        </i><span>Contact</span>
                                    </a>
                                </li>
                                <li id="official" class="step3 list-group-item"
                                    :class="{ 'active': isActive(2), 'active done': isDone(2) }">
                                    <a href="javascript:void(0);">
                                        <i class="ri-camera-fill text-success"></i>{{ " " }}
                                        <span>Official</span>
                                    </a>
                                </li>
                                <li id="payment" class="step4 list-group-item"
                                    :class="{ 'active': isActive(3), 'done': isDone(3) }">
                                    <a href="javascript:void(0);">
                                        <i class="ri-check-fill text-warning"></i><span>Payment</span>
                                    </a>
                                </li>
                            </ul>
                        </b-col>
                        <b-col md="9">
                            <form id="form-wizard3" class="text-start">
                                <div class="tab-content" id="myTabContent">
                                    <!-- fieldsets -->
                                    <div class="tab-pane fade" :class="{ 'active show': isActive(0) }" role="tabpanel">
                                        <div class="form-card text-left mt-0 mt-md-2">
                                            <b-row>
                                                <b-col cols="12">
                                                    <h3 class="mb-4">User Information:</h3>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="fname">First Name: *</label>
                                                        <input type="text" class="form-control" id="fname" name="fname"
                                                            placeholder="First Name" required="required" />
                                                    </div>
                                                </b-col>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="lname">Last Name: *</label>
                                                        <input type="text" class="form-control" id="lname" name="lname"
                                                            placeholder="Last Name" />
                                                    </div>
                                                </b-col>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label">Gender: *</label>
                                                        <div class="form-check p-0">
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio"
                                                                    name="customRadio" id="customRadio1">
                                                                <label class="form-check-label" for="customRadio1">
                                                                    Male</label>
                                                            </div>{{ '' }}
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio"
                                                                    name="customRadio" id="customRadio2">
                                                                <label class="form-check-label" for="customRadio2">
                                                                    Female</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </b-col>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="dob">Date Of Birth: *</label>
                                                        <input type="date" class="form-control rtl-date" id="dob"
                                                            name="dob">
                                                    </div>
                                                </b-col>
                                            </b-row>
                                            <button type="button"
                                                class="btn btn-primary-subtle next action-button float-end"
                                                @click="changeTab(1)"
                                                :disabled="currentTab === tabs.length - 1">Next</button>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" :class="{ 'active show': isActive(1) }" role="tabpanel">
                                        <div class="form-card text-left mt-0 mt-md-2">
                                            <b-row>
                                                <b-col cols="12">
                                                    <h3 class="mb-4">Contact Information:</h3>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="email">Email Id: *</label>
                                                        <input type="email" class="form-control" id="email" name="email"
                                                            placeholder="Email Id" />
                                                    </div>
                                                </b-col>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="ccno">Contact Number:
                                                            *</label>
                                                        <input type="text" class="form-control" id="ccno" name="ccno"
                                                            placeholder="Contact Number" />
                                                    </div>
                                                </b-col>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="city">City: *</label>
                                                        <input type="text" class="form-control" id="city" name="city"
                                                            placeholder="City." />
                                                    </div>
                                                </b-col>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="state">State: *</label>
                                                        <input type="text" class="form-control" id="state" name="state"
                                                            placeholder="State." />
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                        <button type="button" name="next"
                                            class="btn btn-primary-subtle next action-button float-end"
                                            @click="changeTab(1)">Next</button>
                                        <button type="button" name="previous"
                                            class="btn btn-dark previous action-button-previous float-end me-3"
                                            @click="changeTab(-1)">Previous</button>
                                    </div>
                                    <div class="tab-pane fade" :class="{ 'active show': isActive(2) }" role="tabpanel">
                                        <div class="form-card text-left mt-0 mt-md-2">
                                            <b-row>
                                                <b-col cols="12">
                                                    <h3 class="mb-4">Official Information:</h3>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="empid">Employee Id: *</label>
                                                        <input type="email" class="form-control" id="empid" name="empid"
                                                            placeholder="Employee Id." />
                                                    </div>
                                                </b-col>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="desg">Designation: *</label>
                                                        <input type="text" class="form-control" id="desg" name="desg"
                                                            placeholder="Designation." />
                                                    </div>
                                                </b-col>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="accname">Department Name:
                                                            *</label>
                                                        <input type="text" class="form-control" id="accname"
                                                            name="accname" placeholder="Department Name." />
                                                    </div>
                                                </b-col>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="workhour">Working Hour:
                                                            *</label>
                                                        <input type="text" class="form-control" id="workhour"
                                                            name="workhour" placeholder="Working Hour." />
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                        <button type="button"
                                            class="btn btn-primary-subtle next action-button float-end"
                                            @click="changeTab(1)"
                                            :disabled="currentTab === tabs.length - 1">Next</button>
                                        <button type="button"
                                            class="btn btn-dark previous action-button-previous float-end me-3"
                                            @click="changeTab(-1)" :disabled="currentTab === 0">Previous</button>
                                    </div>
                                    <div class="tab-pane fade" :class="{ 'active show': isActive(3) }" role="tabpanel">
                                        <div class="form-card text-left mt-0 mt-md-2">
                                            <b-row>
                                                <b-col cols="12">
                                                    <h3 class="mb-4 text-left">Payment:</h3>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="panno">Pan No: *</label>
                                                        <input type="text" class="form-control" id="panno" name="panno"
                                                            placeholder="Pan No." />
                                                    </div>
                                                </b-col>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="accno">Account No: *</label>
                                                        <input type="text" class="form-control" id="accno" name="accno"
                                                            placeholder="Account No." />
                                                    </div>
                                                </b-col>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="holname">Account Holder Name:
                                                            *</label>
                                                        <input type="text" class="form-control" id="holname"
                                                            name="accname" placeholder="Account Holder Name." />
                                                    </div>
                                                </b-col>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="ifsc">IFSC Code: *</label>
                                                        <input type="text" class="form-control" id="ifsc" name="ifsc"
                                                            placeholder="IFSC Code." />
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                        <a class="btn btn-primary-subtle action-button float-end" href="#">Submit</a>
                                        <button type="button" name="previous"
                                            class="btn btn-dark previous action-button-previous float-end me-3"
                                            @click="changeTab(-1)" :disabled="currentTab === 0">Previous</button>
                                    </div>
                                </div>
                            </form>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
<script>
export default {
    data() {
        return {
            currentTab: 0,
            tabs: [
                { id: 'personal' },
                { id: 'contect' },
                { id: 'official' },
                { id: 'payment' }
            ]
        };
    },
    methods: {
        changeTab(direction) {
            if (this.currentTab + direction >= 0 && this.currentTab + direction < this.tabs.length) {
                this.currentTab += direction;
            }
        },
        isActive(index) {
            return this.currentTab === index;
        },
        isDone(index) {
            return this.currentTab > index || this.currentTab === 3;
        }
    }
};
</script>