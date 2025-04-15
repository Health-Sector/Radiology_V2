<template>
    <div class="content-bg">
        <router-view></router-view>
        <setting-offcanvas></setting-offcanvas>
    </div>
</template>

<script setup>
import SettingOffcanvas from '@/components/setting/SettingOffcanvas.vue';
</script>