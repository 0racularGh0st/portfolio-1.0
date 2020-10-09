<template>
  <div class="home">
    <h2 class="content">
      <div class="line anim-typewriter">
        Hi, I'm Nigel. FullStack Developer.
      </div>
      
    </h2>
  </div>
</template>

<script>
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
  font-size: 100%;
}
.line{
  color:#94a7b0;
    animation: type 3s steps(36);
    overflow : hidden;
    white-space: nowrap;
    border-right: 2px solid rgba(255,255,255,0.75);
    width: 36ch;
    letter-spacing: 1.3px;
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
    width: 36ch;
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