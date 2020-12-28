<template>
<div>
  <div id="main-content">
    <background ></background>
    <home class="home-class"></home>
    <mynavbar></mynavbar>
    <social></social>
    <my-footer></my-footer>
  </div>
  <div class="elfsight-app-c5a13acc-0684-464d-ba8c-79649f4123b1"></div>
</div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
const Background = defineAsyncComponent(() => import("../components/Background" /* webpackChunkName: "background" */ /* webpackPreload: true */));
const Navbar = defineAsyncComponent(() => import("../components/Navbar" /* webpackChunkName: "navbar" */ /* webpackPreload: true */));
const Social = defineAsyncComponent(()=> import("../components/Social" /* webpackChunkName: "social" */ /* webpackPreload: true */));
const Footer = defineAsyncComponent(()=> import("../components/Footer" /* webpackChunkName: "footer" */ /* webpackPreload: true */));
const Home = defineAsyncComponent(() => import("./Home" /* webpackChunkName: "home" */));
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
