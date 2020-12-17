<template>
    <nav class="navbar">
        <router-link class="nav-link" :to="{name: 'recipe-list'}">Recipes</router-link>
        <router-link class="nav-link" :to="{name: 'recipe-create'}">Create</router-link>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">

    .navbar {
        height: 5rem;
        display: flex;
        align-items: center;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(74,121,9,1) 100%, rgba(0,212,255,1) 100%);
    }

    .nav-link {
        font-size: 1.6rem;
        color: #fff;
        margin: 0 1rem;
        text-decoration: none;
    }

</style>