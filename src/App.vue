<template>
  <div id="main-app">
    <background class="the-background"></background>
    <home class="home-class"></home>
  </div>
</template>
<script>
import Background from './components/Background';
import Home from './views/Home';
export default {
  components:{
    'background': Background,
    'home': Home
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
