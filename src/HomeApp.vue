<script>
import NavBar from './components/NavBar.vue';
import axios from 'axios';

export default {
    name: "HomeApp",
    components: { NavBar },
    mounted() {
        const hash = window.location.hash;
        const accessCode = this.extractAccessCodeFromHash(hash);

        if(!accessCode)
            return;

        var url = 'https://kinobotz.herokuapp.com';
        if(process.env.NODE_ENV === 'development') {
            url = 'https://localhost:44305';
        }

        axios.post(url + '/twitch/login', {
            AccessToken: accessCode,
            RedirectUri: 'http://localhost:8080/#/'
        }).then(() => {
            console.log('nice')
        });
    },
    methods: {
        extractAccessCodeFromHash(hash) {
        const codeParam = 'access_token=';
        const startIndex = hash.indexOf(codeParam);
        if (startIndex !== -1) {
            const endIndex = hash.indexOf('&', startIndex);
            if (endIndex !== -1) {
            return hash.substring(startIndex + codeParam.length, endIndex);
            } else {
            return hash.substring(startIndex + codeParam.length);
            }
        }
        return null;
        }
    }
}
</script>

<template>
    <NavBar/>
</template>
