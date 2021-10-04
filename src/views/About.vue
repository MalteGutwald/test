<template>
  <div class="about">
    <h1>Test</h1>
    <Inputs></Inputs>
    <!--
    <form>
      <input v-on:click="greet" type="submit" value="greet" class="btn">
    </form>
    -->  
  </div>


</template>

<script>
import Inputs from '../components/Inputs.vue';

export default {
  components:{
    Inputs
  },

  data(){
    return{
      
    }
  }
}
</script>
