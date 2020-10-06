<template>
  <div id="the-background" class="the-background" v-bind:style="backgroundHeight">
    <div class="starsandtwinkle">
      <div class="still-stars">
      <div class="twinkling"></div> 
    </div>
    </div>
    <div id="mountain" class="mountain" v-bind:style="mountainStyles"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
     <div class="star"></div>
     <div id="moon" class= "moon"></div>
  </div>
</template>
<script>

import MountainImage from '../assets/mountain.jpg';
export default {
  data(){
    return{
      moon: '',
      mountain: '',
      background: '',
      viewportDiff: ''
    }
  },
  computed: {
    mountainStyles: function(){
      return {
        background: "transparent url("+MountainImage+") no-repeat",
        zIndex: 6,
        width: "100%",
        filter: "brightness(0.7)",
        backgroundPositionY: "60%",
        height: "60%",
        top: "40%",
        backgroundSize: "cover"
      }
    },
    backgroundHeight: function(){
      return {
         height: "calc(100vh + "+this.viewportDiff+"px)",
         top: "0",
         left: "0",
         right: "0",
         bottom: "0",
         position: "fixed",
         backgroundSize: "cover",
         backgroundAttachment: "fixed",
         background: "inherit"
      }
    }
  }
  ,

  mounted(){
     this.viewportDiff = document.documentElement.clientHeight - window.innerHeight;
    this.moon = document.getElementById('moon');
    this.mountain = document.getElementById('mountain');
    this.moon.style.left = '0px';
    this.moon.style.top = '0px';
   // this.mountain.style.top = '40%';  
    this.mountain.style.filter = 'brightness(0.7)';
    window.addEventListener('scroll',function(){
        let value = window.scrollY;
        this.moon.style.left= (value/2)+'px';
        this.moon.style.top=-(value/3)+'px';
      //  this.mountain.style.top = (value/5)<40? '40%' : (value/5)+'%';
       // this.mountain.style.filter = (1/(1+(value/300)))>0.7 ? 'brightness(0.7)' : 'brightness('+(1/(1+(value/300)))+')';
       if((1/(1+(value/300)))>0.7){
            this.mountain.style.filter = 'brightness(0.7)';
       }
       else if((1/(1+(value/300)))<0.33){
         this.mountain.style.filter = 'brightness(0.33)';
       }
       else{
         this.mountain.style.filter =  'brightness('+(1/(1+(value/300)))+')';
       }
    });
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
    margin: 0;
    padding: 0;
}


@keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}

.mountain, .moon{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}
.still-stars, .twinkling, .starsandtwinkle{
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}

.still-stars {
  background:#000 url(../assets/stars.jpg) repeat top center;
  z-index:0;
}

.twinkling{
  background:transparent url(../assets/twinkling.jpg) repeat top center;
  z-index:1;
  animation:move-twink-back 200s linear infinite;
}

.moon{
    background: transparent url(../assets/rsz_moon.jpg) no-repeat top right;
    z-index: 5;
    background-size: 10rem;
    background-position-y: 30%;
    background-position-x: 90%;
    filter: brightness(0.9);
    left: 0px;
}
.star {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 2px;
  background: linear-gradient(-45deg, #cbcbcb, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 6px #699bff);
  animation: tail 3000ms ease-in-out, shooting 3000ms ease-in-out ;
}

.star::before, .star::after {
  z-index: 4;
  position: absolute;
  content: '';
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #cbcbcb, rgba(0, 0, 255, 0));
  border-radius: 100%;
  transform: translateX(50%) rotateZ(-45deg);
  animation: shining 3000ms ease-in-out;
}

.star::after {
  transform: translateX(50%) rotateZ(45deg);
}

.star:nth-child(5) {
   z-index: 4;
   opacity: 0.5;
  top: calc(31%);
  left: calc(86% - 300px);
  animation-delay: 2s;
  animation-iteration-count: 1;
}
.star:nth-child(5)::before, .star:nth-child(5)::after {
  animation-delay: 2s;
  animation-iteration-count: 1;
}

.star:nth-child(6) {
   z-index: 4;
   opacity: 0.5;
  top: calc(41% - -50px);
  left: calc(50% - 190px);
  animation-delay: 5s;
  animation-iteration-count: 1;
}
.star:nth-child(6)::before, .star:nth-child(6)::after {
  animation-delay: 5s;
  animation-iteration-count: 1;
}

.star:nth-child(7) {
   z-index: 4;
   opacity: 0.5;
  top: calc(34%);
  left: calc(71%);
  animation-delay: 9s;
  animation-iteration-count: 1;
}
.star:nth-child(7)::before, .star:nth-child(7)::after {
  animation-delay: 9s;
  animation-iteration-count: 1;
}

.star:nth-child(4) {
  z-index: 4;
  opacity: 0.5;
  top: calc(50% - 50px);
  left: calc(50% - 250px);
  animation-delay: 13s;
  animation-iteration-count: 1;
}
.star:nth-child(4)::before, .star:nth-child(4)::after {
  animation-delay: 13s;
  animation-iteration-count: 1;
}

.star:nth-child(8) {
   z-index: 4;
   opacity: 0.5;
  top: calc(-5% - -190px);
  left: calc(74% - 200px);
  animation-delay: 17s;
  animation-iteration-count: 1;
}
.star:nth-child(8)::before, .star:nth-child(8)::after {
  animation-delay: 17s;
  animation-iteration-count: 1;
}




/* Animations */
@keyframes tail {
  0% {
    width: 0;
  }
  
  30% {
    width: 80px;
  }
  
  100% {
    width: 0;
  }
}

@keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 20px;
  }
  100% {
    width: 0;
  }
}

@keyframes shooting {
  0% {
    transform: translateX(0) rotate(-15deg) translateY(0);
  }
  100% {
    transform: translateX(320px) rotate(-15deg) translateY(-65px);
  }
}
</style>
