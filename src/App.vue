<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
  import Navbar from "./components/Navbar"
  
  export default {
    components: {
      Navbar
    }
  }
</script>

<style lang="scss">
    //Global reset
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%; //1rem = 10px
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
    }
</style>
