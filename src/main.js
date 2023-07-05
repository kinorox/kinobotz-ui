import { createApp } from 'vue';
import App from '@/App.vue';
import OverlayApp from '@/components/OverlayApp.vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import { VueSignalR } from '@dreamonkey/vue-signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';
import 'bootstrap'

const routes = [
    { path: '/', name: 'home', component: App },
    { path: '/overlay/:id', name: 'overlay', component: OverlayApp }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

var url = 'https://kinobotz.herokuapp.com';
if(process.env.NODE_ENV === 'development') {
    url = 'http://localhost:5000';
}

const connection = new HubConnectionBuilder()
    .withUrl(url + '/overlayHub')
    .build();

createApp(App)
    .use(router)
    .use(VueSignalR, { connection })
    .mount('#app');
