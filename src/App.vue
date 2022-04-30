<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
document.title = 'Mein neuer Titel';
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
</style>