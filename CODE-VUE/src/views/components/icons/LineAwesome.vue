<template>
        <b-row>
            <b-col sm="12">
                <b-card no-body>
                    <b-card-header class="d-flex justify-content-between">
                        <div class="header-title">
                            <b-card-title>Line Awesome Icon</b-card-title>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="d-flex gap-1 align-items-center mb-0">Use Class
                            <code>&lt;i class="las la-bell"&gt;&lt;/i&gt;</code>
                        </p>
                        <b-row class="m-1">
                            <b-col sm="6" md="4" lg="2" v-for="icon in LineAwesome" :key="icon">
                                <a class="iq-icons-list d-flex my-4 align-items-center" href="#">
                                    <i :class="['me-4', icon.iconClass]"></i>{{ icon.iconName }}
                                </a>
                            </b-col>
                            <b-col sm="12" class="text-center mt-3">
                                <a href="https://icons8.com/line-awesome" target="_blank"
                                    class="btn btn-primary-subtle">View
                                    All Icon</a>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
</template>

<script setup>
const LineAwesome = [
    { iconClass: 'las la-bell', iconName: 'bell' },
    { iconClass: 'las la-phone-volume', iconName: 'phone' },
    { iconClass: 'las la-radiation', iconName: 'radiation' },
    { iconClass: 'las la-dog', iconName: 'dog' },
    { iconClass: 'las la-fish', iconName: 'fish' },
    { iconClass: 'las la-spider', iconName: 'la-spider' },
    { iconClass: 'las la-angle-down', iconName: 'angle-down' },
    { iconClass: 'las la-angle-left', iconName: 'angle-left' },
    { iconClass: 'las la-angle-right', iconName: 'angle-right' },
    { iconClass: 'las la-angle-up', iconName: 'angle-up' },
    { iconClass: 'las la-caret-left', iconName: 'caret-left' },
    { iconClass: 'las la-caret-right', iconName: 'caret-right' },
    { iconClass: 'las la-download', iconName: 'download' },
    { iconClass: 'las la-location-arrow', iconName: 'location-arrow' },
    { iconClass: 'las la-share', iconName: 'share' },
    { iconClass: 'las la-backward', iconName: 'backward' },
    { iconClass: 'las la-play', iconName: 'play' },
    { iconClass: 'las la-pause', iconName: 'pause' },
    { iconClass: 'las la-sync', iconName: 'sync' },
    { iconClass: 'las la-volume-down', iconName: 'volume-down' },
    { iconClass: 'las la-volume-mute', iconName: 'volume-mute' },
    { iconClass: 'las la-volume-off', iconName: 'volume-off' },
    { iconClass: 'las la-volume-up', iconName: 'volume-up' },
    { iconClass: 'lab la-youtube', iconName: 'youtube' },
    { iconClass: 'las la-car', iconName: 'car' },
    { iconClass: 'las la-truck', iconName: 'truck' },
    { iconClass: 'las la-tree', iconName: 'tree' },
    { iconClass: 'lab la-pinterest-p', iconName: 'pinterest' },
    { iconClass: 'lab la-java', iconName: 'java' },
    { iconClass: 'las la-city', iconName: 'city' },
    { iconClass: 'las la-edit', iconName: 'edit' },
    { iconClass: 'las la-copy', iconName: 'copy' },
    { iconClass: 'las la-cut', iconName: 'cut' },
    { iconClass: 'las la-pen', iconName: 'pen' },
    { iconClass: 'las la-tag', iconName: 'tag' },
    { iconClass: 'las la-save', iconName: 'save' },
    { iconClass: 'las la-tasks', iconName: 'tasks' },
    { iconClass: 'las la-comment', iconName: 'comment' },
    { iconClass: 'las la-video', iconName: 'video' },
    { iconClass: 'las la-smile', iconName: 'smile' },
];
</script>