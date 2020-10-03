<template>
<div>
  <div id="main-content">
    <background class="the-background"></background>
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
.the-background{
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background-size: cover;
    background-attachment: fixed;
    background: inherit;
}
.home-class{
    position: relative;
}
</style>
