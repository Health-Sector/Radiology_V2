import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import VueApexCharts from 'vue3-apexcharts'
import Vue3Autocounter from '@/assets/vendor/vue3-autocounter'

import './assets/vendor/phosphor-icons/Fonts/regular/style.css'
import './assets/vendor/phosphor-icons/Fonts/duotone/style.css'
import './assets/vendor/phosphor-icons/Fonts/fill/style.css'
import './assets/vendor/ionicons/css/ionicons.min.css'

import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap';
import 'swiper/scss'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-bs5'
import 'flatpickr/dist/flatpickr.css';
import './assets/scss/xray.scss'
import './assets/scss/custom.scss'
import './assets/scss/rtl.scss'
import './assets/scss/customizer.scss'
import { createPinia } from 'pinia';

const app = createApp(App)

const pinia = createPinia();
app.use(VueApexCharts);
app.use(Vue3Autocounter);

app.use(Router);
app.use(pinia);
app.mount('#app')
