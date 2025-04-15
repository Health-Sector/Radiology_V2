<template>
    <aside ref="sidebar"
        :class="`sidebar sidebartab sidebar-base ${sidebarType.join(' ')} ${sidebarColor} ${sidebarMenuStyle}`"
        data-toggle="main-sidebar" id="first-tour" data-sidebar="responsive">
        <div class="sidebar-header d-flex align-items-center justify-content-start position-relative">
            <router-link to="/" class="navbar-brand me-5 pt-3">
                <Logo />
            </router-link>
            <div class="ms-5 wrapper-menu d-flex d-none d-xl-block" @click="toggleSidebar">
                <div class="main-circle" role="button"><i class="ri-more-fill"></i></div>
            </div>
            <li class="nav-item d-block d-xl-none" @click="toggleSidebarMini">
                <a class="wrapper-menu" data-toggle="sidebar" data-active="true">
                    <div class="main-circle"><i class="ri-more-fill"></i></div>
                </a>
            </li>
        </div>
        <div class="sidebar-body pt-0 pb-3 data-scrollbar">
            <div class="sidebar-list">
                <VerticalNav />
            </div>
        </div>
    </aside>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import VerticalNav from './VerticalNav.vue';
import Logo from './logo.vue';
import { useSetting } from '@/store/pinia';

// Store
const store = useSetting();
const sidebarType = computed(() => {
    // Ensure "sidebar-mini" is included by default
    return store.sidebar_type_value.length ? store.sidebar_type_value : ['sidebar-mini'];
});
const sidebarColor = computed(() => store.sidebar_color_value);
const sidebarMenuStyle = computed(() => store.sidebar_menu_style_value);

const sidebar = ref(null);

const toggleSidebar = () => {
    if (sidebarType.value.includes('sidebar-mini')) {
        store.sidebar_type(['sidebar-base']);
    } else {
        store.sidebar_type(['sidebar-mini', 'sidebar-hover']);
    }
};

const toggleSidebarMini = () => {
    if (sidebarType.value.includes('sidebar-mini')) {
        store.sidebar_type(['sidebar-base']);
    } else {
        store.sidebar_type(['sidebar-mini', 'sidebar-hover']);
    }
}

// Responsive Resize Function
const resizePlugins = () => {
    if (!sidebar.value) return;

    if (window.innerWidth < 1025) {
        if (!sidebar.value.classList.contains("sidebar-mini")) {
            sidebar.value.classList.add("sidebar-mini", "on-resize");
        }
    } else {
        if (sidebar.value.classList.contains("sidebar-mini") && sidebar.value.classList.contains("on-resize")) {
            sidebar.value.classList.remove("sidebar-mini", "on-resize");
        }
    }
};

// Add and Remove Resize Event Listeners
onMounted(() => {
    resizePlugins();
    window.addEventListener("resize", resizePlugins);
});

onUnmounted(() => {
    window.removeEventListener("resize", resizePlugins);
});
</script>
