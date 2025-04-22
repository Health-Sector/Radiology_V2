<template>

    <b-row>
      <b-col sm="12">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <b-card-title>Fontawesome Icon</b-card-title>
            </div>
          </b-card-header>
          <b-card-body>
            <p class="d-flex gap-1 align-items-center mb-0">Use Class
              <code>&lt;i class="fa fa-address-book"&gt;&lt;/i&gt;</code>
            </p>
            <b-row class="m-1">
              <b-col v-for="icon in fontawesome" :key="icon" sm="6" md="4" lg="2">
                <a class="iq-icons-list d-flex my-4 align-items-center" href="#">
                  <i :class="`fa ${icon.iconClass} me-4`" aria-hidden="true"></i>
                  {{ icon.iconName }}
                </a>
              </b-col>
              <b-col sm="12" class="text-center mt-3">
                <a href="https://fontawesome.com/v4.7.0/" target="blank" class="btn btn-primary-subtle">View All
                  Icon</a>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
</template>

<script setup>
const fontawesome = [
  { iconClass: 'fa-address-book', iconName: 'address-book' },
  { iconClass: 'fa-envelope-open', iconName: 'envelope-open' },
  { iconClass: 'fa-id-card', iconName: 'id-card' },
  { iconClass: 'fa-telegram', iconName: 'telegram' },
  { iconClass: 'fa-user-circle', iconName: 'user-circle' },
  { iconClass: 'fa-area-chart', iconName: 'area-chart' },
  { iconClass: 'fa-asterisk', iconName: 'asterisk' },
  { iconClass: 'fa-car', iconName: 'car' },
  { iconClass: 'fa-bars', iconName: 'bars' },
  { iconClass: 'fa-battery-full', iconName: 'battery-full' },
  { iconClass: 'fa-bluetooth', iconName: 'bluetooth' },
  { iconClass: 'fa-book', iconName: 'book' },
  { iconClass: 'fa-bug', iconName: 'bug' },
  { iconClass: 'fa-building', iconName: 'building' },
  { iconClass: 'fa-calculator', iconName: 'calculator' },
  { iconClass: 'fa-calendar', iconName: 'calendar' },
  { iconClass: 'fa-camera', iconName: 'camera' },
  { iconClass: 'fa-commenting', iconName: 'commenting' },
  { iconClass: 'fa-crop', iconName: 'crop' },
  { iconClass: 'fa-download', iconName: 'download' },
  { iconClass: 'fa-folder', iconName: 'folder' },
  { iconClass: 'fa-gift', iconName: 'gift' },
  { iconClass: 'fa-users', iconName: 'users' },
  { iconClass: 'fa-hashtag', iconName: 'hashtag' },
  { iconClass: 'fa-home', iconName: 'home' },
  { iconClass: 'fa-lock', iconName: 'lock' },
  { iconClass: 'fa-graduation-cap', iconName: 'graduation-cap' },
  { iconClass: 'fa-paper-plane', iconName: 'paper-plane' },
  { iconClass: 'fa-star', iconName: 'star' },
  { iconClass: 'fa-tag', iconName: 'tag' },
  { iconClass: 'fa-trash', iconName: 'trash' },
  { iconClass: 'fa-upload', iconName: 'upload' },
  { iconClass: 'fa-university', iconName: 'university' },
  { iconClass: 'fa-wifi', iconName: 'wifi' },
  { iconClass: 'fa-thumbs-up', iconName: 'thumbs-up' },
  { iconClass: 'fa-train', iconName: 'train' },
  { iconClass: 'fa-file', iconName: 'file' },
  { iconClass: 'fa-snapchat', iconName: 'snapchat' },
  { iconClass: 'fa-twitter', iconName: 'twitter' },
  { iconClass: 'fa-wordpress', iconName: 'wordpress' },
];
</script>