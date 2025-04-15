<template>
    <b-row>
        <b-col lg="3">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Add User</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <form>
                        <div class="form-group">
                            <b-container class="d-flex flex-column align-items-center py-5">
                                <div class="text-center">
                                    <img class="profile-pic img-fluid rounded-circle mb-3"
                                        src="/assets/images/user/11.png" alt="profile-pic"
                                        style="width: 150px; height: 150px; object-fit: cover;">
                                    <div>
                                        <button class="btn btn-primary rounded-1"
                                            onclick="document.getElementById('file-upload').click();">Profile
                                            Upload</button>
                                        <input id="file-upload" class="d-none" type="file" accept="image/*">
                                    </div>
                                </div>
                                <div class="mt-3 text-center">
                                    <span>Only</span>{{ '' }}
                                    <a href="#" class="text-primary">.jpg</a>{{ '' }}
                                    <a href="#" class="text-primary">.png</a>{{ '' }}
                                    <a href="#" class="text-primary">.jpeg</a>{{ '' }}
                                    <span>allowed</span>
                                </div>
                            </b-container>
                        </div>
                        <div class="form-group cust-form-input">
                            <label>User Role:</label>
                            <select class="form-control my-2" id="selectuserrole">
                                <option>Select</option>
                                <option>Surgery</option>
                                <option>Gastroenterologist</option>
                                <option>Endocrinologist</option>
                                <option>Orthopaedic surgeon</option>
                                <option>Cardiologist </option>
                            </select>
                        </div>
                        <div class="form-group cust-form-input">
                            <label for="furl">Facebook Url:</label>
                            <input type="text" class="form-control my-2" id="furl" placeholder="Facebook Url">
                        </div>
                        <div class="form-group cust-form-input">
                            <label for="turl">Twitter Url:</label>
                            <input type="text" class="form-control my-2" id="turl" placeholder="Twitter Url">
                        </div>
                        <div class="form-group cust-form-input">
                            <label for="instaurl">Instagram Url:</label>
                            <input type="text" class="form-control my-2" id="instaurl" placeholder="Instagram Url">
                        </div>
                        <div class="form-group cust-form-input">
                            <label for="lurl">Linkedin Url:</label>
                            <input type="text" class="form-control my-2" id="lurl" placeholder="Linkedin Url">
                        </div>
                    </form>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="9">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>New User Information</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="new-user-info">
                        <form>
                            <b-row class="cust-form-input">
                                <b-col md="6" class="form-group">
                                    <label for="fname">First Name:</label>
                                    <input type="text" class="form-control my-2" id="fname" placeholder="First Name">
                                </b-col>
                                <b-col md="6" class="form-group">
                                    <label for="lname">Last Name:</label>
                                    <input type="text" class="form-control my-2" id="lname" placeholder="Last Name">
                                </b-col>
                                <b-col md="6" class="form-group">
                                    <label for="add1">Street Address 1:</label>
                                    <input type="text" class="form-control my-2" id="add1"
                                        placeholder="Street Address 1">
                                </b-col>
                                <b-col md="6" class="form-group">
                                    <label for="add2">Street Address 2:</label>
                                    <input type="text" class="form-control my-2" id="add2"
                                        placeholder="Street Address 2">
                                </b-col>
                                <b-col md="12" class="form-group">
                                    <label for="cname">Department Name:</label>
                                    <input type="text" class="form-control my-2" id="cname"
                                        placeholder="Department Name">
                                </b-col>
                                <div class="form-group col-sm-12">
                                    <label>Country:</label>
                                    <select class="form-control my-2" id="selectcountry">
                                        <option>Select Country</option>
                                        <option>Caneda</option>
                                        <option>Noida</option>
                                        <option>USA</option>
                                        <option>India</option>
                                        <option>Africa</option>
                                    </select>
                                </div>
                                <b-col md="6" class="form-group">
                                    <label for="mobno">Mobile Number:</label>
                                    <input type="text" class="form-control my-2" id="mobno" placeholder="Mobile Number">
                                </b-col>
                                <b-col md="6" class="form-group">
                                    <label for="altconno">Alternate Contact:</label>
                                    <input type="text" class="form-control my-2" id="altconno"
                                        placeholder="Alternate Contact">
                                </b-col>
                                <b-col md="6" class="form-group">
                                    <label for="email">Email:</label>
                                    <input type="email" class="form-control my-2" id="email" placeholder="Email">
                                </b-col>
                                <b-col md="6" class="form-group">
                                    <label for="pno">Pin Code:</label>
                                    <input type="text" class="form-control my-2" id="pno" placeholder="Pin Code">
                                </b-col>
                                <b-col md="12" class="form-group">
                                    <label for="city">Town/City:</label>
                                    <input type="text" class="form-control my-2" id="city" placeholder="Town/City">
                                </b-col>
                            </b-row>
                            <hr>
                            <h5 class="mb-3">Security</h5>
                            <b-row class="cust-form-input">
                                <b-col md="12" class="form-group">
                                    <label for="uname">User Name:</label>
                                    <input type="text" class="form-control my-2" id="uname" placeholder="User Name">
                                </b-col>
                                <b-col md="6" class="form-group">
                                    <label for="pass">Password:</label>
                                    <input type="password" class="form-control my-2" id="pass" placeholder="Password">
                                </b-col>
                                <b-col md="6" class="form-group">
                                    <label for="rpass">Repeat Password:</label>
                                    <input type="password" class="form-control my-2" id="rpass"
                                        placeholder="Repeat Password ">
                                </b-col>
                            </b-row>
                            <div class="custom-control custom-checkbox mb-4 p-0 d-flex justity-content-center gap-1">
                                <input type="checkbox" class="custom-control-input me-1" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">Enable
                                    Two-Factor-Authentication</label>
                            </div>
                            <div class="d-flex gap-2">
                                <button type="submit" class="btn btn-danger-subtle">Cancel</button>
                                <button type="submit" class="btn btn-primary-subtle">Save</button>
                            </div>
                        </form>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>