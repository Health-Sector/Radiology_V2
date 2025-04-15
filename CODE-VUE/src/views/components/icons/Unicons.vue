<template>
    <b-row>
      <b-col sm="12">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <b-card-title>Unicons Icon</b-card-title>
            </div>
          </b-card-header>
          <b-card-body>
            <p class="d-flex gap-1 align-items-center mb-0">Use Class
              <code>&lt;i class="ion-archive"&gt;&lt;/i&gt;</code>
            </p>
            <b-row class="m-1">
              <b-col sm="6" md="4" lg="2" v-for="icon in Unicons" :key="icon">
                <a class="iq-icons-list d-flex my-4 align-items-center" href="#">
                  <i :class="['me-4', icon.iconClass]"></i>{{ icon.iconName }}
                </a>
              </b-col>
              <b-col sm="12" class="text-center mt-3">
                <a href="https://www.unicons.net/" target="_blank" class="btn btn-primary-subtle">View All Icon</a>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
</template>

<script setup>
const Unicons = [
  { iconClass: 'ion-archive', iconName: 'Archive' },
  { iconClass: 'ion-reply', iconName: 'Reply' },
  { iconClass: 'ion-reply-all', iconName: 'Reply All' },
  { iconClass: 'ion-forward', iconName: 'Forward' },
  { iconClass: 'ion-play', iconName: 'Play' },
  { iconClass: 'ion-volume-high', iconName: 'Volume High' },
  { iconClass: 'ion-pricetags', iconName: 'Pricetags' },
  { iconClass: 'ion-pause', iconName: 'Pause' },
  { iconClass: 'ion-briefcase', iconName: 'Briefcase' },
  { iconClass: 'ion-medkit', iconName: 'Medkit' },
  { iconClass: 'ion-at', iconName: 'At' },
  { iconClass: 'ion-pound', iconName: 'Pound' },
  { iconClass: 'ion-asterisk', iconName: 'Asterisk' },
  { iconClass: 'ion-alert', iconName: 'Alert' },
  { iconClass: 'ion-alert-circled', iconName: 'Alert Circled' },
  { iconClass: 'ion-refresh', iconName: 'Refresh' },
  { iconClass: 'ion-loop', iconName: 'Loop' },
  { iconClass: 'ion-shuffle', iconName: 'Shuffle' },
  { iconClass: 'ion-home', iconName: 'Home' },
  { iconClass: 'ion-search', iconName: 'Search' },
  { iconClass: 'ion-flag', iconName: 'Flag' },
  { iconClass: 'ion-heart', iconName: 'Heart' },
  { iconClass: 'ion-heart-broken', iconName: 'Broken' },
  { iconClass: 'ion-gear-a', iconName: 'Gear' },
  { iconClass: 'ion-gear-b', iconName: 'Gear Bold' },
  { iconClass: 'ion-toggle-filled', iconName: 'Toggle' },
  { iconClass: 'ion-trash-b', iconName: 'Trash Fill' },
  { iconClass: 'ion-hammer', iconName: 'Hammer' },
  { iconClass: 'ion-wrench', iconName: 'Wrench' },
  { iconClass: 'ion-information-circled', iconName: 'Information' },
  { iconClass: 'ion-help-circled', iconName: 'Help' },
  { iconClass: 'ion-plus-circled', iconName: 'Plus' },
  { iconClass: 'ion-close-circled', iconName: 'Close' },
  { iconClass: 'ion-email-unread', iconName: 'Email' },
  { iconClass: 'ion-upload', iconName: 'Upload' },
  { iconClass: 'ion-soup-can', iconName: 'Database' },
  { iconClass: 'ion-thumbsup', iconName: 'Thumbsup' },
  { iconClass: 'ion-thumbsdown', iconName: 'Thumbsdown' },
  { iconClass: 'ion-pricetag', iconName: 'Pricetag' },
  { iconClass: 'ion-bowtie', iconName: 'Bowtie' }
];
</script>
