import { createApp } from 'vue';
import App from '@/App.vue';
import OverlayApp from '@/components/OverlayApp.vue';
import { createRouter, createWebHistory } from 'vue-router'
import { VueSignalR } from '@dreamonkey/vue-signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';
import 'bootstrap'

const routes = [
    { path: '/', name: 'home', component: App },
    { path: '/overlay/:id', name: 'overlay', component: OverlayApp }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

var url = 'https://kinobotz.herokuapp.com';
if(process.env.NODE_ENV === 'development') {
    url = 'http://localhost:5000';
}

const connection = new HubConnectionBuilder()
    .withUrl(url + '/overlayHub')
    .build();


const http = require('http')
const fs = require('fs')
const httpPort = process.env.PORT

http.createServer((req, res) => {
    fs.readFile('index.html', 'utf-8', (err, content) => {
    if (err) {
        console.log('We cannot open "index.html" file.')
    }

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
    })
}).listen(httpPort, () => {
    console.log('Server listening on: http://localhost:%s', httpPort)
})

createApp(App)
    .use(router)
    .use(VueSignalR, { connection })
    .mount('#app');
