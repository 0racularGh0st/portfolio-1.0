<template>
  <div>
    <div class="home">
    <section>
      <h1 class="content">
      <div id="line-typing" class="line-typing">
        
      </div>
      
    </h1>
    </section>
  </div>
  <about/>
  </div>
</template>

<script>
window.addEventListener("load", function() { 
  
  setTimeout(startType,3000);
});
let index=0;
const mainText= "Hi, I'm Nigel. ";
const texts = ["FullStack Developer.","DevOps Engineer."]
let letter='';
let mainTextDone = false;
let count = 0;
let currentText = "";
let direction="forward";
let prevDirection="forward";
const startType = ()=>{
          if(document.querySelector('.line-typing')){
            if(index<=mainText.length && !mainTextDone){
              letter = mainText.slice(0,++index);
              document.querySelector('.line-typing').textContent = letter;
                if(index > mainText.length)
                {
                  mainTextDone = true;
                  index = 0;
                }
            }
            else{
               if(count === texts.length)
               {
                 count = 0;
               }

               currentText = texts[count];
               if(direction === "forward"){
                 letter = currentText.slice(0,++index);
               document.querySelector('.line-typing').textContent = mainText+letter;
               if(letter.length === currentText.length)
               {
                 direction= "backward"
                //  count++;
                //  index = 0;
               }
               }
               if(direction === "backward"){
                 letter = currentText.slice(0,index--);
               document.querySelector('.line-typing').textContent = mainText+letter;
               if(letter.length === 0)
               {
                 direction= "forward"
                 count++;
                 index = 0;
               }
               }

            }
          }
          // if(index!==text.length)
          if(prevDirection === direction)
          {setTimeout(startType,70);}
          else{
            prevDirection = direction;
            if(prevDirection === "forward")
            setTimeout(startType,500);
            else{
              setTimeout(startType,2000);
            }
          }
}
import { defineAsyncComponent } from 'vue';
const About = defineAsyncComponent(() => import("./About" /* webpackChunkName: "about" */));
export default {
    data(){
      return {
        text: "Hi, I'm Nigel. FullStack Developer.",
        index : 0,
        letter : ''
      }
    },
   components:{
     'about':About
   }
   
}
</script>
<style scoped>
.home{
  height: 50vh;
}
.content{
  margin-top: 50vh;
  width: 31ch;
  margin-left: auto;
  margin-right: auto;
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