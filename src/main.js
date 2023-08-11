import { createApp } from 'vue';
import App from '@/App.vue';
import HomeApp from '@/HomeApp.vue';
import OverlayApp from '@/OverlayApp.vue';
import GptBehaviorApp from '@/GptBehaviorApp.vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import { VueSignalR } from '@dreamonkey/vue-signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';
import 'bootstrap'

const routes = [
    { path: '/', name: 'home', component: HomeApp },
    { path: '/overlay/:id', name: 'overlay', component: OverlayApp },
    { path: '/gptbehavior', name: 'gptbehavior', component: GptBehaviorApp },
    { path: '/login', name: 'twitchlogin', component: GptBehaviorApp }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

var url = 'https://kinobotz.herokuapp.com';
if(process.env.NODE_ENV === 'development') {
    url = 'https://localhost:44305';
}

const connection = new HubConnectionBuilder()
    .withUrl(url + '/overlayHub')
    .build();

createApp(App)
    .use(router)
    .use(VueSignalR, { connection })
    .mount('#app');
