<template>
<div>
  <div id="main-content">
    <background ></background>
    <home class="home-class"></home>
    <mynavbar></mynavbar>
  </div>
</div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
const Background = defineAsyncComponent(() => import("../components/Background" /* webpackChunkName: "background" */));
const Home = defineAsyncComponent(() => import("./Home" /* webpackChunkName: "home" */));
const Navbar = defineAsyncComponent(() => import("../components/Navbar" /* webpackChunkName: "navbar" */));
export default {
  data(){
    return {
      
    }
  },
  components:{
    'background': Background,
    'home': Home,
    'mynavbar' : Navbar
  }
}
</script>
<style scoped lang="scss">

.home-class{
    position: relative;
}
</style>
