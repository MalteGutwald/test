<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>

import Navbar from "./components/Layout/Navbar";
export default {
    name:"app",
    components: {
      Navbar,
    }
}
</script>
<style>
    Footer{
      font-weight: bold;
      font-weight: 600;
      text-align: left;
      padding-top: 1%;
      padding-left: 5%;
      padding-right:5%;


      position: fixed;
      bottom: 0;
    }
    /*
    #app{
      background-image: url("https://www.pfotenspass.de/images/image/Homepagehintergrund/Hintergrund-Homepage-52.jpg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      height: 100vh;
    }*/
</style>