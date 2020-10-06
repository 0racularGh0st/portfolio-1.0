<template>
<div>
  <div id="main-content">
    <background ></background>
    <home class="home-class"></home>
  </div>
</div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
const Background = defineAsyncComponent(() => import("../components/Background" /* webpackChunkName: "background" */));
const Home = defineAsyncComponent(() => import("./Home" /* webpackChunkName: "home" */));
export default {
  data(){
    return {
      
    }
  },
  components:{
    'background': Background,
    'home': Home,
  }
}
</script>
<style scoped lang="scss">

.home-class{
    position: relative;
}
</style>
