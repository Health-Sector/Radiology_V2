<template>
    <b-row>
        <b-col sm="12" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between align-items-center">
                    <div class="header-title">
                        <b-card-title>Basic Form</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis,
                        diam nibh finibus leo</p>
                    <form class="cust-form-elements">
                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" class="form-control my-2" id="email1">
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control my-2" id="pwd">
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="remebercheck2">
                                <label class="form-check-label" for="remebercheck2">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-danger-subtle mt-2">Cancel</button>{{ '' }}
                        <button type="submit" class="btn btn-primary-subtle me-1 mt-2">Submit</button>
                    </form>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Form Grid</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis,
                        diam nibh finibus leo</p>
                    <form class="cust-form-elements">
                        <b-row>
                            <b-col>
                                <input type="text" class="form-control my-2" placeholder="First name">
                            </b-col>
                            <b-col>
                                <input type="text" class="form-control my-2" placeholder="Last name">
                            </b-col>
                        </b-row>
                    </form>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Input</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis,
                        diam nibh finibus leo</p>
                    <form class="cust-form-elements">
                        <div class="form-group ">
                            <label for="exampleInputText1">Input Text </label>
                            <input type="text" class="form-control my-2" id="exampleInputText1" value="Mark Jets"
                                placeholder="Enter Name">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail3">Email Input</label>
                            <input type="email" class="form-control my-2" id="exampleInputEmail3"
                                value="markJets@gmail.com" placeholder="Enter Email">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputurl">Url Input</label>
                            <input type="url" class="form-control my-2" id="exampleInputurl"
                                value="https://getbootstrap.com" placeholder="Enter Url">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputphone">Telephone Input</label>
                            <input type="tel" class="form-control my-2" id="exampleInputphone" value="1-(555)-555-5555">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputNumber1">Number Input</label>
                            <input type="number" class="form-control my-2" id="exampleInputNumber1" value="2356">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword3">Password Input</label>
                            <input type="password" class="form-control my-2" id="exampleInputPassword3"
                                value="markJets123" placeholder="Enter Password">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputdate">Date Input</label>
                            <input type="date" class="form-control my-2" id="exampleInputdate" value="2019-12-18">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputmonth">Month Input</label>
                            <input type="month" class="form-control my-2" id="exampleInputmonth" value="2019-12">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputweek">Week Input</label>
                            <input type="week" class="form-control my-2" id="exampleInputweek" value="2019-W46">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputtime">Time Input</label>
                            <input type="time" class="form-control my-2" id="exampleInputtime" value="13:45">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputdatetime">Date and Time Input</label>
                            <input type="datetime-local" class="form-control my-2" id="exampleInputdatetime"
                                value="2019-12-19T13:45:00">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea class="form-control my-2" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <button type="submit" class="btn btn-danger-subtle mt-2">Cancel</button>{{ '' }}
                        <button type="submit" class="btn btn-primary-subtle me-1 mt-2">Submit</button>
                    </form>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Input Size</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis,
                        diam nibh finibus leo</p>
                    <form class="cust-form-elements">
                        <div class="form-group ">
                            <label for="colFormLabelSm">Small</label>
                            <input type="email" class="form-control form-control-sm my-2" id="colFormLabelSm"
                                placeholder="form-control-sm">
                        </div>
                        <div class="form-group">
                            <label for="colFormLabel">Default</label>
                            <input type="email" class="form-control my-2" id="colFormLabel"
                                placeholder="form-control my-2">
                        </div>
                        <div class="form-group mb-0">
                            <label for="colFormLabelLg" class="pb-0">Large</label>
                            <input type="email" class="form-control form-control-lg my-2" id="colFormLabelLg"
                                placeholder="form-control-lg">
                        </div>
                    </form>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col sm="12" lg="6">
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Horizontal Form</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis,
                        diam nibh finibus leo</p>
                    <form class="form-horizontal cust-form-elements" action="/action_page.php">
                        <b-row class="form-group">
                            <label class="control-label col-sm-2 align-self-center mb-0" for="email">Email:</label>
                            <b-col sm="10">
                                <input type="email" class="form-control my-2" id="email"
                                    placeholder="Enter Your  email">
                            </b-col>
                        </b-row>
                        <b-row class="form-group">
                            <label class="control-label col-sm-2 align-self-center mb-0" for="pwd1">Password:</label>
                            <b-col sm="10">
                                <input type="password" class="form-control my-2" id="pwd1"
                                    placeholder="Enter Your password">
                            </b-col>
                        </b-row>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="remebercheck2">
                                <label class="form-check-label" for="remebercheck2">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-danger-subtle mt-2">Cancel</button>{{ '' }}
                            <button type="submit" class="btn btn-primary-subtle me-1 mt-2">Submit</button>
                        </div>
                    </form>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Form row</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis,
                        diam nibh finibus leo</p>
                    <form class="cust-form-elements">
                        <b-row>
                            <b-col class="mb-4">
                                <input type="text" class="form-control my-2" placeholder="First name">
                            </b-col>
                            <b-col>
                                <input type="text" class="form-control my-2" placeholder="Last name">
                            </b-col>
                        </b-row>
                    </form>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Input</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="form-group cust-form-elements">
                        <label class="form-label" for="exampleInputReadonly">Readonly</label>
                        <input type="text" class="form-control" id="exampleInputReadonly" readonly value="Mark Jhon">
                    </div>
                    <div class="form-group cust-form-elements">
                        <label class="form-label" for="exampleInputcolor">Input Color </label>
                        <input type="color" class="form-control" id="exampleInputcolor" value="#0dd6b8"
                            style="height:35px">
                    </div>
                    <div class="form-group cust-form-elements">
                        <label class="form-label" for="exampleFormControlSelect1">Select Input</label>
                        <select class="form-select" id="exampleFormControlSelect1">
                            <option selected disabled>Select Your Age</option>
                            <option>0-18</option>
                            <option>18-26</option>
                            <option>26-46</option>
                            <option>46-60</option>
                            <option>Above 60</option>
                        </select>
                    </div>
                    <div class="form-group cust-form-elements">
                        <label class="form-label" for="choices-single-default">Select Input New</label>
                        <select class="form-select" data-trigger="" name="choices-single-default"
                            id="choices-single-default">
                            <option value="">This is a placeholder</option>
                            <option value="Choice 1">Choice 1</option>
                            <option value="Choice 2">Choice 2</option>
                            <option value="Choice 3">Choice 3</option>
                        </select>
                    </div>
                    <div class="form-group cust-form-elements">
                        <label class="form-label" for="choices-multiple-default">Default</label>
                        <select class="form-select" data-trigger="" name="choices-multiple-default"
                            id="choices-multiple-default" multiple>
                            <option value="Choice 1" selected>Choice 1</option>
                            <option value="Choice 2">Choice 2</option>
                            <option value="Choice 3">Choice 3</option>
                            <option value="Choice 4" disabled>Choice 4</option>
                        </select>
                    </div>
                    <div class="form-group cust-form-elements">
                        <label class="form-label" for="exampleFormControlSelect2">Example Multiple Select</label>
                        <select multiple class="form-select" id="exampleFormControlSelect2">
                            <option>select-1</option>
                            <option>select-2</option>
                            <option>select-3</option>
                            <option>select-4</option>
                            <option>select-5</option>
                            <option>select-6</option>
                            <option>select-7</option>
                            <option>select-8</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="customRange1">Range Input</label>
                        <input type="range" class="form-range" id="customRange1">
                    </div>
                    <div class="form-group">
                        <div class="form-check d-block">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11">
                            <label class="form-check-label" for="flexCheckDefault11">
                                Default checkbox
                            </label>
                        </div>
                        <div class="form-check d-block">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked11" checked>
                            <label class="form-check-label" for="flexCheckChecked11">
                                Checked checkbox
                            </label>
                        </div>
                        <div class="form-check d-block">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
                            <label class="form-check-label" for="flexCheckDisabled">
                                Disabled checkbox
                            </label>
                        </div>
                        <div class="form-check d-block">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled"
                                checked disabled>
                            <label class="form-check-label" for="flexCheckCheckedDisabled">
                                Disabled checked checkbox
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check d-block">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                                Default radio
                            </label>
                        </div>
                        <div class="form-check d-block">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                checked>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Default checked radio
                            </label>
                        </div>
                        <div class="form-check d-block">
                            <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled"
                                disabled>
                            <label class="form-check-label" for="flexRadioDisabled">
                                Disabled radio
                            </label>
                        </div>
                        <div class="form-check d-block">
                            <input class="form-check-input" type="radio" name="flexRadioDisabled"
                                id="flexRadioCheckedDisabled" checked disabled>
                            <label class="form-check-label" for="flexRadioCheckedDisabled">
                                Disabled checked radio
                            </label>
                        </div>
                        <div class="form-check form-radio">
                            <input type="radio" id="customRadio5" name="customRadio5" class="form-check-input" disabled
                                checked>
                            <label class="form-check-label" for="customRadio5"> Selected and disabled radio</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input type="radio" id="customRadio6" name="customRadio1" class="form-check-input">
                            <label class="form-check-label" for="customRadio6"> Default radio</label>
                        </div>
                        <div class="form-group">
                            <div class="form-check d-block">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
                                <label class="form-check-label" for="flexCheckDefault2">
                                    Default checkbox
                                </label>
                            </div>
                            <div class="form-check d-block">
                                <input class="form-check-input" type="checkbox" value="" id="checkedcheck" checked>
                                <label class="form-check-label" for="checkedcheck">
                                    Checked checkbox
                                </label>
                            </div>
                            <div class="form-check d-block">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled1"
                                    disabled>
                                <label class="form-check-label" for="flexCheckDisabled1">
                                    Disabled checkbox
                                </label>
                            </div>
                            <div class="form-check d-block">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled11"
                                    checked disabled>
                                <label class="form-check-label" for="flexCheckCheckedDisabled11">
                                    Disabled checked checkbox
                                </label>
                            </div>
                        </div>
                        <div class="form-check">
                            <input type="radio" id="customRadio8" name="customRadio6" class="form-check-input" checked>
                            <label class="form-check-label" for="customRadio8"> Selected radio</label>
                        </div>
                        <div class="form-check">
                            <input type="radio" id="customRadio9" name="customRadio7" class="form-check-input" disabled>
                            <label class="form-check-label" for="customRadio9"> disabled radio</label>
                        </div>
                        <div class="form-check">
                            <input type="radio" id="customRadio10" name="customRadio8" class="form-check-input" disabled
                                checked>
                            <label class="form-check-label" for="customRadio10"> Selected and disabled
                                radio</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                            <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox
                                input</label>
                        </div>
                        <div class="form-group">
                            <label for="customFile1" class="form-label custom-file-input">Choose File</label>
                            <input class="form-control" type="file" id="customFile1">
                        </div>
                    </div>
                    <div class="form-group cust-form-elements">
                        <label for="customFile" class="form-label custom-file-input">Example File Input</label>
                        <input class="form-control" type="file" id="customFile">
                    </div>
                    <div class="form-group cust-form-elements">
                        <label for="customFile2" class="form-label custom-file-input">Choose File</label>
                        <input class="form-control" type="file" id="customFile2">
                    </div>
                    <button type="submit" class="btn btn-danger-subtle">Cancel</button>{{ '' }}
                    <button type="submit" class="btn btn-primary-subtle">Submit</button>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header class="d-flex justify-content-between">
                    <div class="header-title">
                        <b-card-title>Select Size</b-card-title>
                    </div>
                </b-card-header>
                <b-card-body>
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac
                        venenatis mollis,
                        diam nibh finibus leo</p>
                    <div class="form-group cust-form-elements">
                        <label>Small</label>
                        <select class="form-control form-control-sm my-2">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="form-group cust-form-elements">
                        <label>Default</label>
                        <select class="form-control my-2">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="form-group cust-form-elements">
                        <label>Large</label>
                        <select class="form-control form-control-lg mt-2">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>