<script>
import NavBar from './components/NavBar.vue';
import GptBehaviorTable from './components/GptBehaviorTable.vue';

export default {
    name: "GptBehaviorApp",
    components: { GptBehaviorTable, NavBar }
}
</script>

<template>
    <NavBar/>
    <GptBehaviorTable/>
</template>