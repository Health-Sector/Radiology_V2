<template>
  <div class="wrapper">
    <Sidebar></Sidebar>
    <main class="main-content content-page ">
      <div class="position-relative ">
        <Header />
      </div>
      <div :class="`content-inner ${pageLayout} pb-0`" id="page_layout">
        <router-view></router-view>
      </div>
      <Footer appName="XRay" />
    </main>
    <setting-offcanvas></setting-offcanvas>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Sidebar from "@/components/partials/Sidebar.vue";
import Footer from "@/components/partials/Footer.vue";
import Header from "@/components/partials/Header.vue";
import SettingOffcanvas from '@/components/setting/SettingOffcanvas.vue';

// Pinia Store
import { useSetting } from '@/store/pinia';

const store = useSetting();
const pageLayout = computed(() => store.page_layout_value);

</script>
