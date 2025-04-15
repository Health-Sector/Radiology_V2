<template>
    <b-row>
        <b-col lg="3">
            <b-card no-body>
                <b-card-body>
                    <div class="">
                        <div class="iq-email-list">
                            <button class="btn btn-primary-subtle btn-lg btn-block mb-3 font-size-16 p-3 w-100"><i
                                    class="ri-send-plane-line me-2"></i>New Message</button>
                            <div class="iq-email-ui nav flex-column nav-pills" role="tablist">
                                <li class="nav-link active" role="tab" data-bs-toggle="pill" href="#mail-inbox"
                                    aria-selected="true"><a href="#"><i class="ri-mail-line"></i>Inbox<span
                                            class="badge bg-primary ms-2">4</span></a></li>
                                <li class="nav-link" role="tab" data-bs-toggle="pill" href="#mail-starred"
                                    aria-selected="false" tabindex="-1"><a href="#"><i
                                            class="ri-star-line"></i>Starred</a></li>
                                <li class="nav-link" role="tab" data-bs-toggle="pill" href="#mail-snoozed"
                                    aria-selected="false" tabindex="-1"><a href="#"><i
                                            class="ri-time-line"></i>Snoozed</a></li>
                                <li class="nav-link" role="tab" data-bs-toggle="pill" href="#mail-draft"
                                    aria-selected="false" tabindex="-1"><a href="#"><i
                                            class="ri-file-list-2-line"></i>Draft</a></li>
                                <li class="nav-link" role="tab" data-bs-toggle="pill" href="#mail-sent"
                                    aria-selected="false" tabindex="-1"><a href="#"><i
                                            class="ri-mail-send-line"></i>Sent Mail</a></li>
                                <li class="nav-link" role="tab" data-bs-toggle="pill" href="#mail-trash"
                                    aria-selected="false" tabindex="-1"><a href="#"><i
                                            class="ri-delete-bin-line"></i>Trash</a></li>
                                <li class="nav-link" role="tab" data-bs-toggle="pill" href="#mail-important"
                                    aria-selected="false" tabindex="-1"><a href="#"><i
                                            class="ri-bookmark-line"></i>Important</a></li>
                                <li class="nav-link" role="tab" data-bs-toggle="pill" href="#mail-spam"
                                    aria-selected="false" tabindex="-1"><a href="#"><i class="ri-spam-line"></i>Spam</a>
                                </li>
                            </div>
                            <h6 class="mt-4 mb-3">Labels</h6>
                            <ul class="iq-email-ui iq-email-label list-unstyled">
                                <li><a href="#"><i class="ri-focus-fill text-primary"></i>Personal</a></li>
                                <li><a href="#"><i class="ri-focus-fill text-danger"></i>Company</a></li>
                                <li><a href="#"><i class="ri-focus-fill text-success"></i>Important</a></li>
                                <li><a href="#"><i class="ri-focus-fill text-info"></i>Private</a></li>
                                <li><a href="#"><i class="ri-focus-fill text-warning"></i>Private</a></li>
                                <li><a href="#"><i class="ri-add-circle-line"></i>Add New Labels</a></li>
                            </ul>
                            <div class="iq-progress-bar-linear d-inline-block w-100">
                                <h6 class="mt-4 mb-3">Storage</h6>
                                <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                                    aria-valuemin="90" aria-valuemax="100"
                                    style="transition: width 2s ease 0s; width: 90%; height: 6px;">
                                    <div class="progress-bar bg-danger" style="width: 90%"></div>
                                </div>
                                <span class="mt-1 d-inline-block w-100">7.02 GB (46%) of 15 GB used</span>
                            </div>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="9" class="mail-box-detail">
            <b-card no-body>
                <b-card-body class="p-0">
                    <div class="">
                        <div class="iq-email-to-list p-3">
                            <div class="iq-email-to-list-detail d-flex justify-content-between gap-3">
                                <ul
                                    class="list-inline d-flex align-items-center justify-content-between m-0 p-0 flex-shrink-0">
                                    <li class="me-1">
                                        <a href="#" id="navbarDropdown" data-bs-toggle="dropdown">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1">{{
                                                "" }}
                                                <label class="custom-control-label" for="customCheck1"><i
                                                        class="ri-arrow-down-s-line"></i></label>
                                            </div>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li class="me-1" v-b-tooltip.hover.top="'Reload'"><a href="#"><i
                                                class="ri-restart-line"></i></a></li>
                                    <li class="me-1" v-b-tooltip.hover.top="'Archive'"><a href="#"><i
                                                class="ri-mail-open-line"></i></a></li>
                                    <li class="me-1" v-b-tooltip.hover.top="'Spam'"><a href="#"><i
                                                class="ri-information-line"></i></a></li>
                                    <li class="me-1" v-b-tooltip.hover.top="'Delete'"><a href="#"><i
                                                class="ri-delete-bin-line"></i></a></li>
                                    <li class="me-1" v-b-tooltip.hover.top="'Inbox'"><a href="#"><i
                                                class="ri-mail-unread-line"></i></a></li>
                                    <li class="me-1" v-b-tooltip.hover.top="'Zoom'"><a href="#"><i
                                                class="ri-drag-move-2-line"></i></a></li>
                                </ul>
                                <div class="iq-email-search d-flex flex-shrink-0">
                                    <form class="me-3 position-relative">
                                        <div class="form-group mb-0">
                                            <input type="email" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" placeholder="Search">
                                            <a class="search-link" href="#"><i class="ri-search-line"></i></a>
                                        </div>
                                    </form>
                                    <ul class="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                        <li class="me-3">
                                            <a class="font-size-14 d-flex gap-1" href="#" id="navbarDropdown"
                                                data-bs-toggle="dropdown">
                                                <span>1</span><span>-</span><span>50</span><span>of</span><span>505</span>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="#">20 per page</a>
                                                <a class="dropdown-item" href="#">50 per page</a>
                                                <a class="dropdown-item" href="#">100 per page</a>
                                            </div>
                                        </li>
                                        <li class="me-2" v-b-tooltip.hover.top="'Previous'"><a href="#"><i
                                                    class="ri-arrow-left-s-line transform-arrow"></i></a></li>
                                        <li class="me-2" v-b-tooltip.hover.top="'Next'"><a href="#"><i
                                                    class="ri-arrow-right-s-line transform-arrow"></i></a></li>
                                        <li class="me-0" v-b-tooltip.hover.top="'Setting'"><a href="#"><i
                                                    class="ri-list-settings-line"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="iq-email-listbox">
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="mail-inbox" role="tabpanel">
                                    <ul class="iq-email-sender-list iq-height">
                                        <li class="iq-unread">
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="mailk">
                                                            <label class="form-check-label" for="mailk"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle text-warning"></span>
                                                    <a href="#" class="iq-email-title">Jopour Xiong (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Mackenzie Bnio
                                                        (@MackenzieBnio)
                                                        has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@MackenzieBnio - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">08:00 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="mailk1">
                                                            <label class="form-check-label" for="mailk1"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Deray Billings (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Megan Allen (@meganallen)
                                                        has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">08:15 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="mailk2">
                                                            <label class="form-check-label" for="mailk2"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Lauren Drury (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Dixa Horton (@dixahorton)
                                                        has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="mailk3">
                                                            <label class="form-check-label" for="mailk3"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Fabian Ros (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Jecno Mac (@jecnomac) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="mailk4">
                                                            <label class="form-check-label" for="mailk4"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Dixa Horton (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Let Hunre (@lethunre) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li class="iq-unread">
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk017">
                                                            <label class="form-check-label" for="mailk017"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle text-warning"></span>
                                                    <a href="#" class="iq-email-title">Megan Allen (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="mailk6">
                                                            <label class="form-check-label" for="mailk6"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Jopour Xiong (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Mackenzie Bnio
                                                        (@mackenzieBnio)
                                                        has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="mailk7">
                                                            <label class="form-check-label" for="mailk7"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Deray Billings (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Jecno Mac (@jecnomac) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li class="iq-unread">
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="mailk8">
                                                            <label class="form-check-label" for="mailk8"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle text-warning"></span>
                                                    <a href="#" class="iq-email-title">Lauren Drury (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Let Hunre (@lethunre) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="mailk9">
                                                            <label class="form-check-label" for="mailk9"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Fabian Ros (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk011">
                                                            <label class="form-check-label" for="mailk011"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Dixa Horton (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Mackenzie Bnio
                                                        (@mackenzieBnio)
                                                        has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk11">
                                                            <label class="form-check-label" for="mailk11"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Megan Allen (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Jecno Mac (@jecnomac) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk12">
                                                            <label class="form-check-label" for="mailk12"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Jopour Xiong (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Mackenzie Bnio
                                                        (@mackenzieBnio)
                                                        has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk13">
                                                            <label class="form-check-label" for="mailk13"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Deray Billings (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Eb Begg(@ebbegg) has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk14">
                                                            <label class="form-check-label" for="mailk14"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Lauren Drury (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Jecno Mac (@jecnomac) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk15">
                                                            <label class="form-check-label" for="mailk15"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Fabian Ros (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Let Hunre(@lethunre) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk16">
                                                            <label class="form-check-label" for="mailk16"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Dixa Horton (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk17">
                                                            <label class="form-check-label" for="mailk17"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Megan Allen (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Jecno Mac (@jecnomac) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="mail-starred" role="tabpanel">
                                    <ul class="iq-email-sender-list">
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk02">
                                                            <label class="form-check-label" for="mailk02"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Lauren Drury (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Dixa Horton (@dixahorton)
                                                        has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk03">
                                                            <label class="form-check-label" for="mailk03"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Fabian Ros (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Jecno Mac (@jecnomac) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner"
                                                @click="openEmailDetails">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk04">
                                                            <label class="form-check-label" for="mailk04"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Dixa Horton (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Let Hunre (@lethunre) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <EmailDetails :show="isEmailDetailsVisible" @hide="closeEmailDetails" />
                                        </li>
                                        <li class="iq-unread">
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="mailk5">
                                                            <label class="form-check-label" for="mailk5"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle text-warning"></span>
                                                    <a href="#" class="iq-email-title">Megan Allen (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk018">
                                                            <label class="form-check-label" for="mailk018"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Jopour Xiong (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Mackenzie Bnio
                                                        (@mackenzieBnio)
                                                        has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="mail-snoozed" role="tabpanel">
                                    <ul class="iq-email-sender-list">
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk004">
                                                            <label class="form-check-label" for="mailk004"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Dixa Horton (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Let Hunre (@lethunre) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="iq-unread">
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk012">
                                                            <label class="form-check-label" for="mailk012"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle text-warning"></span>
                                                    <a href="#" class="iq-email-title">Megan Allen (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk024">
                                                            <label class="form-check-label" for="mailk024"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Jopour Xiong (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Mackenzie Bnio
                                                        (@mackenzieBnio)
                                                        has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="mail-draft" role="tabpanel">
                                    <ul class="iq-email-sender-list">
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk09">
                                                            <label class="form-check-label" for="mailk09"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Fabian Ros (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk013">
                                                            <label class="form-check-label" for="mailk013"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Dixa Horton (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Mackenzie Bnio
                                                        (@mackenzieBnio)
                                                        has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk014">
                                                            <label class="form-check-label" for="mailk014"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Megan Allen (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Jecno Mac (@jecnomac) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk019">
                                                            <label class="form-check-label" for="mailk019"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Jopour Xiong (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Mackenzie Bnio
                                                        (@mackenzieBnio)
                                                        has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk025">
                                                            <label class="form-check-label" for="mailk025"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Deray Billings (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Eb Begg(@ebbegg) has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="mail-sent" role="tabpanel">
                                    <ul class="iq-email-sender-list">
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk015">
                                                            <label class="form-check-label" for="mailk015"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Megan Allen (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Jecno Mac (@jecnomac) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk020">
                                                            <label class="form-check-label" for="mailk020"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Jopour Xiong (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Mackenzie Bnio
                                                        (@mackenzieBnio)
                                                        has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk026">
                                                            <label class="form-check-label" for="mailk026"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Deray Billings (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Eb Begg(@ebbegg) has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk027">
                                                            <label class="form-check-label" for="mailk027"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Lauren Drury (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Jecno Mac (@jecnomac) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk032">
                                                            <label class="form-check-label" for="mailk032"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Fabian Ros (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Let Hunre(@lethunre) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk037">
                                                            <label class="form-check-label" for="mailk037"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Dixa Horton (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="mail-trash" role="tabpanel">
                                    <ul class="iq-email-sender-list">
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk028">
                                                            <label class="form-check-label" for="mailk028"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Lauren Drury (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Jecno Mac (@jecnomac) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk033">
                                                            <label class="form-check-label" for="mailk033"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Fabian Ros (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Let Hunre(@lethunre) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk038">
                                                            <label class="form-check-label" for="mailk038"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Dixa Horton (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="mail-important" role="tabpanel">
                                    <ul class="iq-email-sender-list">
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk029">
                                                            <label class="form-check-label" for="mailk029"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Jopour Xiong (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Mackenzie Bnio
                                                        (@mackenzieBnio)
                                                        has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk034">
                                                            <label class="form-check-label" for="mailk034"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Deray Billings (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Jecno Mac (@jecnomac) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="iq-unread">
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk035">
                                                            <label class="form-check-label" for="mailk035"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle text-warning"></span>
                                                    <a href="#" class="iq-email-title">Lauren Drury (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Let Hunre (@lethunre) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk009">
                                                            <label class="form-check-label" for="mailk009"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Fabian Ros (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk010">
                                                            <label class="form-check-label" for="mailk010"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Dixa Horton (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Mackenzie Bnio
                                                        (@mackenzieBnio)
                                                        has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk016">
                                                            <label class="form-check-label" for="mailk016"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Megan Allen (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Jecno Mac (@jecnomac) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="mail-spam" role="tabpanel">
                                    <ul class="iq-email-sender-list">
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk021">
                                                            <label class="form-check-label" for="mailk021"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Jopour Xiong (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Mackenzie Bnio
                                                        (@mackenzieBnio)
                                                        has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk023">
                                                            <label class="form-check-label" for="mailk023"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Deray Billings (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Eb Begg(@ebbegg) has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk030">
                                                            <label class="form-check-label" for="mailk030"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Lauren Drury (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Jecno Mac (@jecnomac) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk031">
                                                            <label class="form-check-label" for="mailk031"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Fabian Ros (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Let Hunre(@lethunre) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk036">
                                                            <label class="form-check-label" for="mailk036"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Dixa Horton (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-self-center iq-unread-inner">
                                                <div class="iq-email-sender-info">
                                                    <div class="iq-checkbox-mail">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="mailk040">
                                                            <label class="form-check-label" for="mailk040"></label>
                                                        </div>
                                                    </div>
                                                    <span class="ri-star-line iq-star-toggle"></span>
                                                    <a href="#" class="iq-email-title">Megan Allen (Me)</a>
                                                </div>
                                                <div class="iq-email-content">
                                                    <a href="#" class="iq-email-subject">Jecno Mac (@jecnomac) has
                                                        sent
                                                        you a direct message on Twitter! &nbsp;–&nbsp;
                                                        <span>@LucasKriebel - Very cool :) Nicklas, You have a new
                                                            direct message.</span>
                                                    </a>
                                                    <div class="iq-email-date">11:49 am</div>
                                                </div>
                                                <ul class="iq-social-media">
                                                    <li><a href="#"><i class="ri-delete-bin-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-mail-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-file-list-2-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-time-line"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
<script setup>
import { ref } from 'vue'
import EmailDetails from '@/components/widget/email-details.vue';

const isEmailDetailsVisible = ref(false)

const openEmailDetails = () => {
    isEmailDetailsVisible.value = true
}

const closeEmailDetails = () => {
    isEmailDetailsVisible.value = false
}
</script>