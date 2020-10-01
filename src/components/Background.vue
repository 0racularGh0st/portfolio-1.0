<template>
  <div id="main-background">
    <div class="stars"></div>
    <div class="twinkling"></div> 
    <div class="mountain"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

* {
    margin: 0;
    padding: 0;
}


@keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}

.stars, .twinkling, .mountain {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}

.stars {
  background:#000 url(../assets/stars.png) repeat top center;
  z-index:0;
}

.twinkling{
  background:transparent url(../assets/twinkling.png) repeat top center;
  z-index:1;
  animation:move-twink-back 200s linear infinite;
}

.mountain{
    background: transparent url(../assets/mountain3.png) no-repeat bottom center;
    z-index: 2;
    height: auto;
    width: 100%;
    filter: hue-rotate(360deg) brightness(0.7);
}
</style>
