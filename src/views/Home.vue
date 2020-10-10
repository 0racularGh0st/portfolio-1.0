<template>
  <div class="home">
    <h1 class="content">
      <div class="line anim-typewriter">
        Hi, I'm Nigel. FullStack Developer.
      </div>
      
    </h1>
  </div>
</template>

<script>
import './fonts.css';
export default {
  
}
</script>
<style scoped>
.home{
  height: 150vh;
}
.content{
  margin-top: 50vh;
  text-align: center;
  display: flex;
  justify-content: center;
}
.line{
    color:#cee8f5;
    animation: typewriter 3s steps(36);
    overflow : hidden;
    white-space: nowrap;
    border-right: 2px solid rgba(255,255,255,0.75);
    width: 36ch;
    transform: translateY(-50%);
    
}
.anim-typewriter{
  animation: typewriter 3s steps(36) 1s 1 normal both,
  blinkTextCursor 500ms steps(36) infinite normal;
}
@keyframes typewriter {
  0% {
    width: 0ch;
  }
  100% {
    width: 27ch;
  }
  
}
@keyframes blinkTextCursor {
  from{
    border-right-color: rgba(255,255,255,0.75);
  }
  to{
    border-right-color: transparent;
  }
}
</style>