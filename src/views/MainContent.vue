<template>
<div>
  <div id="main-content">
    <background ></background>
    <home class="home-class"></home>
    <mynavbar></mynavbar>
    <social></social>
    <my-footer></my-footer>
  </div>
</div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
const Background = defineAsyncComponent(() => import("../components/Background" /* webpackChunkName: "background" */));
const Home = defineAsyncComponent(() => import("./Home" /* webpackChunkName: "home" */));
const Navbar = defineAsyncComponent(() => import("../components/Navbar" /* webpackChunkName: "navbar" */));
const Social = defineAsyncComponent(()=> import("../components/Social" /* webpackChunkName: "social" */));
const Footer = defineAsyncComponent(()=> import("../components/Footer" /* webpackChunkName: "footer" */));
export default {
  data(){
    return {
      
    }
  },
  components:{
    'background': Background,
    'home': Home,
    'mynavbar' : Navbar,
    'social' : Social,
    'my-footer' : Footer
  }
}
</script>
<style scoped lang="scss">
body{
  background: black;
}
.home-class{
    position: relative;
}
</style>
