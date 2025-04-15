<template>
    <b-row>
      <b-col sm="12">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <b-card-title>Remixicon Icon</b-card-title>
            </div>
          </b-card-header>
          <b-card-body>
            <p class="d-flex gap-1 align-items-center mb-0">Use Class
              <code>&lt;i class="ri-4k-fill"&gt;&lt;/i&gt;</code>
            </p>
            <b-row class="m-1">
              <b-col sm="6" md="4" lg="2" v-for="icon in Remixicon" :key="icon">
                <a class="iq-icons-list d-flex my-4 align-items-center" href="#">
                  <i :class="['me-4', icon.iconClass]"></i>{{ icon.iconName }}
                </a>
              </b-col>
              <b-col sm="12" class="text-center mt-3">
                <a href="https://remixicon.com/" target="_blank" class="btn btn-primary-subtle">View All Icon</a>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
</template>

<script setup>
const Remixicon = [
  { iconClass: 'ri ri-4k-fill', iconName: '4k Fill' },
  { iconClass: 'ri ri-4k-line', iconName: '4k line' },
  { iconClass: 'ri ri-account-box-fill', iconName: 'Account Fill' },
  { iconClass: 'ri ri-account-pin-box-line', iconName: 'account-pin-box' },
  { iconClass: 'ri ri-award-line', iconName: 'award-line' },
  { iconClass: 'ri ri-award-fill', iconName: 'award-fill' },
  { iconClass: 'ri ri-bookmark-line', iconName: 'bookmark-line' },
  { iconClass: 'ri ri-bookmark-fill', iconName: 'bookmark-fill' },
  { iconClass: 'ri ri-calculator-line', iconName: 'calculator-line' },
  { iconClass: 'ri ri-calculator-fill', iconName: 'calculator-fill' },
  { iconClass: 'ri ri-calendar-line', iconName: 'calendar-line' },
  { iconClass: 'ri ri-calendar-fill', iconName: 'calendar-fill' },
  { iconClass: 'ri ri-reply-line', iconName: 'reply-line' },
  { iconClass: 'ri ri-reply-fill', iconName: 'reply-fill' },
  { iconClass: 'ri ri-send-plane-line', iconName: 'send-plane-line' },
  { iconClass: 'ri ri-send-plane-fill', iconName: 'send-plane-fill' },
  { iconClass: 'ri ri-computer-line', iconName: 'computer-line' },
  { iconClass: 'ri ri-computer-fill', iconName: 'computer-fill' },
  { iconClass: 'ri ri-cellphone-line', iconName: 'cellphone-line' },
  { iconClass: 'ri ri-cellphone-fill', iconName: 'cellphone-fill' },
  { iconClass: 'ri ri-phone-line', iconName: 'phone-line' },
  { iconClass: 'ri ri-phone-fill', iconName: 'phone-fill' },
  { iconClass: 'ri ri-tablet-line', iconName: 'tablet-line' },
  { iconClass: 'ri ri-tablet-fill', iconName: 'tablet-fill' },
  { iconClass: 'ri ri-device-line', iconName: 'device-line' },
  { iconClass: 'ri ri-device-fill', iconName: 'device-fill' },
  { iconClass: 'ri ri-battery-line', iconName: 'battery-line' },
  { iconClass: 'ri ri-battery-fill', iconName: 'battery-fill' },
  { iconClass: 'ri ri-battery-low-line', iconName: 'battery-low-line' },
  { iconClass: 'ri ri-battery-low-fill', iconName: 'battery-low-fill' },
  { iconClass: 'ri ri-file-line', iconName: 'file-line' },
  { iconClass: 'ri ri-file-fill', iconName: 'file-fill' },
  { iconClass: 'ri ri-book-open-line', iconName: 'book-open-line' },
  { iconClass: 'ri ri-book-open-fill', iconName: 'book-open-fill' },
  { iconClass: 'ri ri-lightbulb-line', iconName: 'lightbulb-line' },
  { iconClass: 'ri ri-lightbulb-fill', iconName: 'lightbulb-fill' },
  { iconClass: 'ri ri-map-pin-line', iconName: 'map-pin-line' },
  { iconClass: 'ri ri-map-pin-fill', iconName: 'map-pin-fill' },
  { iconClass: 'ri ri-drop-line', iconName: 'drop-line' },
  { iconClass: 'ri ri-drop-fill', iconName: 'drop-fill' }
];
</script>