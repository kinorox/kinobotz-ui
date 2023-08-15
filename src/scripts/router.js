import HomeApp from '@/HomeApp.vue';
import OverlayApp from '@/OverlayApp.vue';
import GptBehaviorApp from '@/GptBehaviorApp.vue';
import CallbackApp from '@/CallbackApp.vue';
import DashboardApp from '@/DashboardApp.vue';
import UsersApp from '@/UsersApp.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'home', component: HomeApp },
    { path: '/overlay/:id', name: 'overlay', component: OverlayApp },
    { path: '/gptbehavior', name: 'gptbehavior', component: GptBehaviorApp },
    { path: '/callback', name: 'callback', component: CallbackApp },
    { path: '/dashboard', name: 'dashboard', component: DashboardApp },
    { path: '/users', name: 'users', component: UsersApp }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;