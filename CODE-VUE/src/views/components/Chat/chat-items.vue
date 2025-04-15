<template>
    <div v-for="(item, index) in userData" :key="item" class="tab-pane fade"
        :class="item.chatbox === 'chatbox1' && 'active show'" :id="item.chatbox" role="tabpanel">
        <div class="chat-head">
            <header class="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3">
                <div class="d-flex align-items-center">
                    <div class="sidebar-toggle bg-primary-subtle" @click="toggleSidebar()">
                        <i class="ri-menu-3-line"></i>
                    </div>
                    <div class="avatar chat-user-profile m-0 me-3" @click="togglePopup(index)">
                        <img :src="generateImgPath(`/assets/images/user/${item.userimg}`)" alt="avatar"
                            class="avatar-50 rounded" />
                        <span class="avatar-status"><i class="ri-checkbox-blank-circle-fill text-success"></i></span>
                    </div>
                    <h5 class="mb-0">{{ item.title }}</h5>
                </div>
                <div v-if="activePopup === index" class="chat-user-detail-popup scroller show">
                    <div class="user-profile text-center">
                        <button type="submit" class="close-popup p-3" @click="togglePopup(null)"><i
                                class="ri-close-fill"></i></button>
                        <div class="user mb-4">
                            <a class="avatar m-0">
                                <img :src="generateImgPath(`/assets/images/user/${item.userimg}`)" alt="avatar" />
                            </a>
                            <div class="user-name mt-4">
                                <h4>Mark Jordan</h4>
                            </div>
                            <div class="user-desc">
                                <p>{{ item.useraddress }}</p>
                            </div>
                        </div>
                        <hr />
                        <div class="chatuser-detail text-start mt-4">
                            <b-row>
                                <b-col cols="6" md="6" class="title">Bini Name:</b-col>
                                <b-col cols="6" md="6" class="text-end">{{ item.usersortname }}</b-col>
                            </b-row>
                            <hr />
                            <b-row>
                                <b-col cols="6" md="6" class="title">Tel:</b-col>
                                <b-col cols="6" md="6" class="text-end">{{ item.usertelnumber }}</b-col>
                            </b-row>
                            <hr />
                            <b-row>
                                <b-col cols="6" md="6" class="title">Date Of Birth:</b-col>
                                <b-col cols="6" md="6" class="text-end">{{ item.userdob }}</b-col>
                            </b-row>
                            <hr />
                            <b-row>
                                <b-col cols="6" md="6" class="title">Gender:</b-col>
                                <b-col cols="6" md="6" class="text-end">{{ item.usergender }}</b-col>
                            </b-row>
                            <hr />
                            <b-row>
                                <b-col cols="6" md="6" class="title">Language:</b-col>
                                <b-col cols="6" md="6" class="text-end">Engliah</b-col>
                            </b-row>
                        </div>
                    </div>
                </div>
                <div class="chat-header-icons d-flex">
                    <a href="javascript:void(0);" class="chat-icon-phone bg-primary-subtle ms-3">
                        <i class="ri-phone-line"></i>
                    </a>
                    <a href="javascript:void(0);" class="chat-icon-video bg-primary-subtle">
                        <i class="ri-vidicon-line"></i>
                    </a>
                    <a href="javascript:void(0);" class="chat-icon-delete bg-primary-subtle">
                        <i class="ri-delete-bin-line"></i>
                    </a>
                    <span class="dropdown bg-primary-subtle d-flex align-items-center justify-content-center">
                        <i class="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                            id="dropdownMenuButton01" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" role="menu"></i>
                        <span class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton01">
                            <a class="dropdown-item" href="JavaScript:void(0);"><i class="fa fa-thumb-tack"
                                    aria-hidden="true"></i>
                                Pin to top</a>
                            <a class="dropdown-item" href="JavaScript:void(0);"><i class="fa fa-trash-o"
                                    aria-hidden="true"></i>
                                Delete chat</a>
                            <a class="dropdown-item" href="JavaScript:void(0);"><i class="fa fa-ban"
                                    aria-hidden="true"></i>
                                Block</a>
                        </span>
                    </span>
                </div>
            </header>
        </div>
        <div class="chat-content scroller">
            <div class="chat">
                <div class="chat-user">
                    <a class="avatar m-0">
                        <img src="/assets/images/user/1.jpg" alt="avatar" class="avatar-50 rounded" />
                    </a>
                    <span class="chat-time mt-1">6:45</span>
                </div>
                <div class="chat-detail">
                    <div class="chat-message">
                        <p>How can we help? We're here for you! 😄</p>
                    </div>
                </div>
            </div>
            <div class="chat chat-left">
                <div class="chat-user">
                    <a class="avatar m-0">
                        <img :src="generateImgPath(`/assets/images/user/${item.userimg}`)" alt="avatar"
                            class="avatar-50 rounded" />
                    </a>
                    <span class="chat-time mt-1">6:48</span>
                </div>
                <div class="chat-detail">
                    <div class="chat-message">
                        <p>Hey John, I am looking for the best admin template.</p>
                        <p>Could you please help me to find it out? 🤔</p>
                    </div>
                </div>
            </div>
            <div class="chat">
                <div class="chat-user">
                    <a class="avatar m-0">
                        <img src="/assets/images/user/1.jpg" alt="avatar" class="avatar-50 rounded" />
                    </a>
                    <span class="chat-time mt-1">6:49</span>
                </div>
                <div class="chat-detail">
                    <div class="chat-message">
                        <p>Absolutely!</p>
                        <p>XRay Dashboard is the responsive bootstrap 5 admin
                            template.</p>
                    </div>
                </div>
            </div>
            <div class="chat chat-left">
                <div class="chat-user">
                    <a class="avatar m-0">
                        <img :src="generateImgPath(`/assets/images/user/${item.userimg}`)" alt="avatar"
                            class="avatar-50 rounded" />
                    </a>
                    <span class="chat-time mt-1">6:52</span>
                </div>
                <div class="chat-detail">
                    <div class="chat-message">
                        <p>Looks clean and fresh UI.</p>
                    </div>
                </div>
            </div>
            <div class="chat">
                <div class="chat-user">
                    <a class="avatar m-0">
                        <img src="/assets/images/user/1.jpg" alt="avatar" class="avatar-50 rounded" />
                    </a>
                    <span class="chat-time mt-1">6:53</span>
                </div>
                <div class="chat-detail">
                    <div class="chat-message">
                        <p>Thanks, from ThemeForest.</p>
                    </div>
                </div>
            </div>
            <div class="chat chat-left">
                <div class="chat-user">
                    <a class="avatar m-0">
                        <img :src="generateImgPath(`/assets/images/user/${item.userimg}`)" alt="avatar"
                            class="avatar-50 rounded" />
                    </a>
                    <span class="chat-time mt-1">6:54</span>
                </div>
                <div class="chat-detail">
                    <div class="chat-message">
                        <p>I will purchase it for sure. 👍</p>
                    </div>
                </div>
            </div>
            <div class="chat">
                <div class="chat-user">
                    <a class="avatar m-0">
                        <img src="/assets/images/user/1.jpg" alt="avatar" class="avatar-50 rounded" />
                    </a>
                    <span class="chat-time mt-1">6:56</span>
                </div>
                <div class="chat-detail">
                    <div class="chat-message">
                        <p>Okay Thanks..</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="chat-footer p-3">
            <form class="d-flex align-items-center " action="javascript:void(0);">
                <div class="chat-attagement d-flex">
                    <a href="javascript:void(0);" class="dropdown"><i class="fa fa-smile-o pe-3"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                        <div class="dropdown-menu p-0 border-0">
                            <emoji-picker data-target-input="#chat-input-2"></emoji-picker>
                        </div>
                    </a>

                    <a href="javascript:void(0);"><i class="fa fa-paperclip pe-3" aria-hidden="true"></i></a>
                </div>
                <input type="text" id="chat-input-2" class="form-control me-3" placeholder="Type your message" />
                <button type="submit" class="btn btn-primary-subtle d-flex align-items-center p-2"><i
                        class="fa fa-paper-plane-o" aria-hidden="true"></i><span
                        class="d-none d-lg-block ms-1">Send</span></button>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const generateImgPath = (path) => {
    return window.origin + import.meta.env.BASE_URL + path;
};

const activePopup = ref(null); // Track the currently active popup

const togglePopup = (index) => {
    activePopup.value = (activePopup.value === index) ? null : index; // Toggle popup visibility
};

const userData = [
    {
        chatbox: 'chatbox1',
        title: 'Team Discussions',
        userimg: '05.jpg',
        userdetailname: "Bini Jordan",
        useraddress: "Cape Town, RSA",
        usersortname: "Bini",
        usertelnumber: "072 143 9920",
        userdob: "July 12, 1989",
        usergender: "Male",
        userlanguage: "English",
    },
    {
        chatbox: 'chatbox2',
        title: 'Announcement',
        userimg: '06.jpg',
        useraddress: "Atlanta, USA",
        usersortname: "Mark",
        usertelnumber: "072 143 9920",
        userdob: "July 12, 1989",
        usergender: "Female",
        userlanguage: "English",
    },
    {
        chatbox: 'chatbox3',
        title: 'Doctors',
        userimg: '07.jpg',
        useraddress: "Cape Town, RSA",
        usersortname: "pai",
        usertelnumber: "072 143 9920",
        userdob: "July 12, 1989",
        usergender: "Male",
        userlanguage: "English",
    },
    {
        chatbox: 'chatbox4',
        title: "Nurses",
        userimg: '08.jpg',
        userdetailname: "Barb Ackue",
        useraddress: "Cape Town, RSA",
        usersortname: "Babe",
        usertelnumber: "072 143 9920",
        userdob: "July 12, 1989",
        usergender: "Female", // Fixed spelling
        userlanguage: "English" // Fixed spelling
    },
    {
        chatbox: 'chatbox5',
        title: "Testing Team",
        userimg: '09.jpg',
        userdetailname: "Peta Saireya",
        useraddress: "Cape Town, RSA",
        usersortname: "Pet",
        usertelnumber: "072 143 9920",
        userdob: "July 12, 1989",
        usergender: "Female",
        userlanguage: "English" // Fixed spelling
    },
    {
        chatbox: 'chatbox6',
        title: "Paul Molive",
        userimg: '10.jpg',
        userdetailname: "Paul Molive",
        useraddress: "Cape Town, RSA",
        usersortname: "Pau",
        usertelnumber: "072 143 9920",
        userdob: "July 12, 1989",
        usergender: "Male",
        userlanguage: "English" // Fixed spelling
    },
    {
        chatbox: 'chatbox7',
        title: "Paige Turner",
        userimg: '05.jpg', // Assuming user05 is defined elsewhere
        useraddress: "Cape Town, RSA",
        usersortname: "Pai",
        usertelnumber: "072 143 9920",
        userdob: "July 12, 1989",
        usergender: "Female", // Corrected spelling
        userlanguage: "English" // Corrected spelling
    },
    {
        chatbox: 'chatbox8',
        title: 'Barb Ackue',
        userimg: '06.jpg', // Assuming path is defined in the context
        useraddress: "Cape Town, RSA",
        usersortname: "Babe",
        usertelnumber: "072 143 9920",
        userdob: "July 12, 1989",
        usergender: "Female",
        userlanguage: "English" // Corrected spelling
    },
    {
        chatbox: 'chatbox9',
        title: 'Maya Didas',
        userimg: '07.jpg', // Assuming path is defined in the context
        userAddress: "Cape Town, RSA",
        userSortName: "Babe",
        userTelNumber: "072 143 9920",
        userDOB: "July 12, 1989",
        userGender: "Male",
        userLanguage: "English" // Corrected spelling
    },
    {
        chatbox: 'chatbox10',
        title: 'Monty Carlo',
        userimg: '08.jpg', // Assuming path is defined in the context
        userAddress: "Cape Town, RSA",
        userSortName: "Babe",
        userTelNumber: "072 143 9920",
        userDOB: "July 12, 1989",
        userGender: "Female",
        userLanguage: "English" // Corrected spelling
    },
    // Add more user objects as needed
];
const toggleSidebar = () => {
    document.querySelector('.chat-data-left').classList.add('show')
}
</script>