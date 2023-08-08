<script>
    export default {
        name: 'NavBar'
    }
</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand anaglyph" href="#" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="font-size: 20em;">k1no.tv</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/overlay/55b7c1e0-1800-436c-a500-7094e8981257">overlay</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/gptbehavior">gpt behavior</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
