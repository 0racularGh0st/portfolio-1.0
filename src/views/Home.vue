<template>
  <div class="home">
    <h1 class="content">
      <div class="line-typing">
        
      </div>
      
    </h1>
  </div>
</template>

<script>
export default {
    data(){
      return {
        text: "Hi, I'm Nigel. FullStack Developer.",
        index : 0,
        letter : ''
      }
    },
    mounted(){
           setTimeout(()=>{this.startType()},2000);
    },
    methods: {
      startType : function(){
          
          let self = this;
          self.letter = self.text.slice(0,++self.index);
          document.querySelector('.line-typing').textContent = self.letter;
          if(self.index!==self.text.length)
          setTimeout(this.startType,70);
      }
    }
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