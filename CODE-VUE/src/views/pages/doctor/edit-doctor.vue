<template>
    <b-row>
        <b-col lg="12">
            <b-card no-body>
                <b-card-body class="p-0">
                    <div class="edit-list">
                        <ul class="edit-profile nav nav-pills list-inline mb-0 flex-md-row flex-column" role="tablist">
                            <b-col tag="li" md="3" class="p-0">
                                <a class="nav-link active py-4 text-center" data-bs-toggle="pill"
                                    href="#personal-information" aria-selected="true" role="tab">
                                    Personal Information
                                </a>
                            </b-col>
                            <b-col tag="li" md="3" class="p-0">
                                <a class="nav-link  py-4 text-center" data-bs-toggle="pill" href="#chang-pwd"
                                    aria-selected="false" role="tab" tabindex="-1">
                                    Change Password
                                </a>
                            </b-col>
                            <b-col tag="li" md="3" class="p-0">
                                <a class="nav-link  py-4 text-center" data-bs-toggle="pill" href="#emailandsms"
                                    aria-selected="false" role="tab" tabindex="-1">
                                    Email and SMS
                                </a>
                            </b-col>
                            <b-col tag="li" md="3" class="p-0">
                                <a class="nav-link  py-4 text-center" data-bs-toggle="pill" href="#manage-contact"
                                    aria-selected="false" role="tab" tabindex="-1">
                                    Manage Contact
                                </a>
                            </b-col>
                        </ul>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="12">
            <div class="edit-list-data">
                <div class="tab-content">
                    <div class="tab-pane fade active show" id="personal-information" role="tabpanel">
                        <b-card no-body>
                            <b-card-header class="d-flex justify-content-between">
                                <div class="header-title">
                                    <b-card-title>Personal Information</b-card-title>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <form>
                                    <div class="form-group row align-items-center">
                                        <b-col md="12">
                                            <div class="profile-img-edit">
                                                <img class="profile-pic" src="/assets/images/user/11.png"
                                                    alt="profile-pic">
                                                <div class="p-image">
                                                    <i class="ri-pencil-line upload-button"></i>
                                                    <input class="file-upload d-none" type="file" accept="image/*">
                                                </div>
                                            </div>
                                        </b-col>
                                    </div>
                                    <b-row class="cust-form-input">
                                        <b-col sm="6" class="form-group">
                                            <label for="fname">First Name:</label>
                                            <input type="text" class="form-control my-2" id="fname" value="Bini">
                                        </b-col>
                                        <b-col sm="6" class="form-group">
                                            <label for="lname">Last Name:</label>
                                            <input type="text" class="form-control my-2" id="lname" value="Jets">
                                        </b-col>
                                        <b-col sm="6" class="form-group">
                                            <label for="uname">User Name:</label>
                                            <input type="text" class="form-control my-2" id="uname" value="Bini@01">
                                        </b-col>
                                        <b-col sm="6" class="form-group">
                                            <label for="cname">City:</label>
                                            <input type="text" class="form-control my-2" id="cname" value="Atlanta">
                                        </b-col>
                                        <b-col sm="6" class="form-group">
                                            <label class="d-block">Gender:</label>
                                            <div class="custom-control custom-radio d-inline-flex me-3 p-0">
                                                <input type="radio" id="customRadio6" name="customRadio1"
                                                    class="custom-control-input me-2" checked="">
                                                <label class="custom-control-label" for="customRadio6"> Male </label>
                                            </div>{{ '' }}
                                            <div class="custom-control custom-radio d-inline-flex me-3 p-0">
                                                <input type="radio" id="customRadio7" name="customRadio1"
                                                    class="custom-control-input me-2">
                                                <label class="custom-control-label" for="customRadio7"> Female </label>
                                            </div>
                                        </b-col>
                                        <b-col sm="6" class="form-group">
                                            <label for="dob">Date Of Birth:</label>
                                            <input class="form-control my-2" id="dob" value="1984-01-24">
                                        </b-col>
                                        <b-col sm="6" class="form-group">
                                            <label>Marital Status:</label>
                                            <select class="form-control my-2" id="exampleFormControlSelect1">
                                                <option selected>Single</option>
                                                <option>Married</option>
                                                <option>Widowed</option>
                                                <option>Divorced</option>
                                                <option>Separated </option>
                                            </select>
                                        </b-col>
                                        <b-col sm="6" class="form-group">
                                            <label>Age:</label>
                                            <select class="form-control my-2" id="exampleFormControlSelect2">
                                                <option>12-18</option>
                                                <option>19-32</option>
                                                <option selected>33-45</option>
                                                <option>46-62</option>
                                                <option>63 &gt; </option>
                                            </select>
                                        </b-col>
                                        <b-col sm="6" class="form-group">
                                            <label>Country:</label>
                                            <select class="form-control my-2" id="exampleFormControlSelect3">
                                                <option>Caneda</option>
                                                <option>Noida</option>
                                                <option selected>USA</option>
                                                <option>India</option>
                                                <option>Africa</option>
                                            </select>
                                        </b-col>
                                        <b-col sm="6" class="form-group">
                                            <label>State:</label>
                                            <select class="form-control my-2" id="exampleFormControlSelect4">
                                                <option>California</option>
                                                <option>Florida</option>
                                                <option selected>Georgia</option>
                                                <option>Connecticut</option>
                                                <option>Louisiana</option>
                                            </select>
                                        </b-col>
                                        <div class="form-group col-sm-12">
                                            <label>Address:</label>
                                            <div class="form-floating overflow-hidden">
                                                <textarea class="form-control" placeholder="Leave a comment here"
                                                    id="floatingTextarea2" style="height: 100px"></textarea>
                                                <label for="floatingTextarea2">37 Cardinal Lane
                                                    Petersburg, VA 23803
                                                    United States of America
                                                    Zip Code: 85001</label>
                                            </div>
                                        </div>
                                    </b-row>
                                    <button type="reset" class="btn btn-danger-subtle mt-3">Cancel</button>{{ '' }}
                                    <button type="submit" class="btn btn-primary-subtle me-2 mt-3">Submit</button>
                                </form>
                            </b-card-body>
                        </b-card>
                    </div>
                    <div class="tab-pane fade" id="chang-pwd" role="tabpanel">
                        <b-card no-body>
                            <b-card-header class="d-flex justify-content-between">
                                <div class="header-title">
                                    <b-card-title>Change Password</b-card-title>
                                </div>
                            </b-card-header>
                            <b-card-body class="cust-form-input">
                                <form>
                                    <div class="form-group">
                                        <label for="cpass">Current Password:</label>
                                        <a href="javascript:void();" class="float-end">Forgot Password</a>
                                        <input type="Password" class="form-control my-2" id="cpass" value="">
                                    </div>
                                    <div class="form-group">
                                        <label for="npass">New Password:</label>
                                        <input type="Password" class="form-control my-2" id="npass" value="">
                                    </div>
                                    <div class="form-group">
                                        <label for="vpass">Verify Password:</label>
                                        <input type="Password" class="form-control my-2" id="vpass" value="">
                                    </div>
                                    <button type="reset" class="btn btn-danger-subtle">Cancel</button>{{ '' }}
                                    <button type="submit" class="btn btn-primary-subtle me-2">Submit</button>
                                </form>
                            </b-card-body>
                        </b-card>
                    </div>
                    <div class="tab-pane fade" id="emailandsms" role="tabpanel">
                        <b-card no-body>
                            <b-card-header class="d-flex justify-content-between">
                                <div class="header-title">
                                    <b-card-title>Email and SMS</b-card-title>
                                </div>
                            </b-card-header>
                            <b-card-body class="cust-form-input">
                                <form>
                                    <div class="form-group">
                                        <b-row class="align-items-center">
                                            <b-col md="3">
                                                <label for="emailnotification">Email Notification:</label>
                                            </b-col>
                                            <b-col md="9">
                                                <div class="form-check form-switch">
                                                    <input type="checkbox" class="form-check-input"
                                                        id="flexSwitchCheckDefault" checked>
                                                    <label class="form-check-label" for="emailnotification"></label>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </div>
                                    <div class="form-group">
                                        <b-row class="align-items-center">
                                            <b-col md="3">
                                                <label for="smsnotification">SMS Notification:</label>
                                            </b-col>
                                            <b-col md="9">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox"
                                                        id="flexSwitchCheckChecked" checked>
                                                    <label class="form-check-label"
                                                        for="flexSwitchCheckChecked"></label>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </div>
                                    <div class="form-group">
                                        <b-row class="align-items-center">
                                            <b-col md="3">
                                                <label for="npass">When To Email</label>
                                            </b-col>
                                            <b-col md="9">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="email01">{{ " " }}
                                                    <label class="custom-control-label" for="email01">You have new
                                                        notifications.</label>
                                                </div>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="email02">{{ " " }}
                                                    <label class="custom-control-label" for="email02">You're sent a
                                                        direct message</label>
                                                </div>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="email03"
                                                        checked="">{{ " " }}
                                                    <label class="custom-control-label" for="email03">Someone adds you
                                                        as a connection</label>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </div>
                                    <div class="form-group">
                                        <b-row class="align-items-center">
                                            <b-col md="3">
                                                <label for="npass">When To Escalate Emails</label>
                                            </b-col>
                                            <b-col md="9">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="email04">{{" "}}
                                                    <label class="custom-control-label" for="email04"> Upon new
                                                        order.</label>
                                                </div>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="email05">{{" "}}
                                                    <label class="custom-control-label" for="email05"> New membership
                                                        approval</label>
                                                </div>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="email06"
                                                        checked="">{{" "}}
                                                    <label class="custom-control-label" for="email06"> Member
                                                        registration</label>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </div>
                                    <button type="reset" class="btn btn-danger-subtle">Cancel</button>{{ '' }}
                                    <button type="submit" class="btn btn-primary-subtle me-2">Submit</button>
                                </form>
                            </b-card-body>
                        </b-card>
                    </div>
                    <div class="tab-pane fade" id="manage-contact" role="tabpanel">
                        <b-card no-body>
                            <b-card-header class="d-flex justify-content-between">
                                <div class="header-title">
                                    <b-card-title>Manage Contact</b-card-title>
                                </div>
                            </b-card-header>
                            <b-card-body class="cust-form-input">
                                <form>
                                    <div class="form-group">
                                        <label for="cno">Contact Number:</label>
                                        <input type="text" class="form-control my-2" id="cno" value="001 2536 123 458">
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email:</label>
                                        <input type="text" class="form-control my-2" id="email"
                                            value="Binijone@demo.com">
                                    </div>
                                    <div class="form-group">
                                        <label for="url">Url:</label>
                                        <input type="text" class="form-control my-2" id="url"
                                            value="https://getbootstrap.com">
                                    </div>
                                    <button type="reset" class="btn btn-danger-subtle">Cancel</button>{{ '' }}
                                    <button type="submit" class="btn btn-primary-subtle me-2">Submit</button>
                                </form>
                            </b-card-body>
                        </b-card>
                    </div>
                </div>
            </div>
        </b-col>
    </b-row>
</template>