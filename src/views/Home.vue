<template>
  <div>
    <div class="home">
    <h1 class="content">
      <div id="line-typing" class="line-typing">
        
      </div>
      
    </h1>
  </div>
  <about/>
  </div>
</template>

<script>
window.addEventListener("load", function() { 
  
  setTimeout(startType,3000);
});
let index=0;
const text = "Hi, I'm Nigel. FullStack Developer."
let letter='';
const startType = ()=>{
          if(document.querySelector('.line-typing')){
            letter = text.slice(0,++index);
          document.querySelector('.line-typing').textContent = letter;
          }
          if(index!==text.length)
          setTimeout(startType,70);
}
import About from './About';
export default {
    data(){
      return {
        text: "Hi, I'm Nigel. FullStack Developer.",
        index : 0,
        letter : ''
      }
    },
   components:{
     About
   }
}
</script>
<style scoped>
.home{
  height: 100vh;
}
.content{
  margin-top: 50vh;
  text-align: center;
  display: flex;
  justify-content: center;
}
.line-typing{
    color:#cee8f5;
    overflow : hidden;
    white-space: nowrap;
    transform: translateY(-50%);
}
   
.line-typing::after{
  content: '';
  border-right: 2px solid rgba(255,255,255,0.75);
  animation: blinkTextCursor 500ms infinite;
  animation-delay: 2s;
  animation-direction: normal;
  animation-fill-mode: both;
}


@keyframes blinkTextCursor {
  0%{
    border-right-color: rgba(255,255,255,0.75);
  }
  100%{
    border-right-color: transparent;
  }
}
@-webkit-keyframes blinkTextCursor {
  0%{
    border-right-color: rgba(255,255,255,0.75);
  }
  100%{
    border-right-color: transparent;
  }
}
</style>