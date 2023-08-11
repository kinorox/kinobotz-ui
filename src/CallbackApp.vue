<script>
import NavBar from './components/NavBar.vue';
import axios from 'axios';

export default {
    name: "CallbackApp",
    components: { NavBar },
    mounted() {

        // Get the current URL
        const currentUrl = window.location.href;

        // Create a URL object
        const urlObj = new URL(currentUrl);

        // Get the value of the "code" parameter
        const code = urlObj.searchParams.get("code"); 
        
        var url = 'https://kinobotz.herokuapp.com';
        if(process.env.NODE_ENV === 'development') {
            url = 'https://localhost:44305';
        }

        let redirectUri = 'https://k1no.tv/callback';
        if(process.env.NODE_ENV === 'development') {
        redirectUri = 'http://localhost:8080/callback';
        }

        axios.post(url + '/twitch/login', {
            AccessToken: code,
            RedirectUri: redirectUri
        }).then(() => {
            console.log('nice')
        });
    }
}
</script>

<template>
    <NavBar/>
</template>
