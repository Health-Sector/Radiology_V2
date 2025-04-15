import { createRouter, createWebHistory } from 'vue-router';

import { DefaultRoutes, AuthRoutes, ErrorRoutes } from './default-routes';
import DefaultLayout from "../layouts/DefaultLayout.vue"
import BlankLayout from '@/layouts/BlankLayout.vue';

const routes = [
    {
        path: '/admin',
        name: 'dashboard',
        component: DefaultLayout,
        meta: {},
        children: DefaultRoutes('dashboard'),
    },
    {
        path: '/auth',
        name: 'auth',
        component: BlankLayout,
        meta: {},
        children: AuthRoutes('auth'),
    },
    {
        path: '/page',
        name: 'page',
        component: BlankLayout,
        meta: {},
        children: ErrorRoutes('page'),
    },
]

const Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: ''
});

export default Router;