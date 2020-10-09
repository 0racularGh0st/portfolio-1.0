<template>
  <div class="home">
    <h2 class="content">
      <div class="intro">
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
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: large;
}
.intro{
  color:#94a7b0;
    animation: type 3s steps(35);
    overflow : hidden;
    white-space: nowrap;
    border-right: 2px solid white;
    width: 35ch;
    letter-spacing: 1.3px;
    
}
@keyframes type {
  0% {
    width: 0ch;
  }
  100% {
    width: 35ch;
  }
  
}

</style>