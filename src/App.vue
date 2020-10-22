<template>
  <div id="main-app" class="main-app">
    <!-- <MainContent id="main-content" v-show="(mountainImageDownloaded && moonImageDownloaded && starsImageDownloaded && twinklingImageDownloaded)"></MainContent> 
    <Loading v-show="!(mountainImageDownloaded && moonImageDownloaded && starsImageDownloaded && twinklingImageDownloaded)"></Loading> -->
  <transition name="component-fade" mode="out-in">
      <component v-bind:is="componentToShow"></component>
  </transition>
  </div>
</template>
<script>
const Modernizer = window.Modernizr;
   import MountainImage from './assets/mountain.webp';
   import MoonImage from './assets/rsz_moon.webp';
   import StarsImage from './assets/stars.webp';
   import TwinklingImage from './assets/twinkling.webp';
   import MountainImageJpg from './assets/mountain.jpg';
   import MoonImageJpg from './assets/rsz_moon.jpg';
   import StarsImageJpg from './assets/stars.jpg';
   import TwinklingImageJpg from './assets/twinkling.jpg';
   import Loading from './components/Loading';
import MainContent from './views/MainContent';
import './views/fonts.css';
export default {
  data(){
    //Using these flags to show a loader first until all background images are downloaded
    return {
      moonImageDownloaded : false,
      mountainImageDownloaded : false,
      starsImageDownloaded : false,
      twinklingImageDownloaded : false
    }
  },
  created(){
   this.imageReady();
  },
  methods: {
     imageReady: function(){
       let isWebpSupported = Modernizer.webp;
       let self = this;
        let mountainImage = new Image();
        let moonImage = new Image();
        let starsImage = new Image();
        let twinklingImage = new Image();
        mountainImage.src = isWebpSupported?  MountainImage : MountainImageJpg;
        moonImage.src = isWebpSupported? MoonImage : MoonImageJpg;
        starsImage.src = isWebpSupported? StarsImage : StarsImageJpg;
        twinklingImage.src = isWebpSupported? TwinklingImage : TwinklingImageJpg;

        mountainImage.onload = function(){
            if(mountainImage.complete)
              {
                self.mountainImageDownloaded = true;
              }
          }
       moonImage.onload = function(){
            if(moonImage.complete){
              self.moonImageDownloaded = true;
            }
       }

       starsImage.onload = function(){
            if(starsImage.complete){
              self.starsImageDownloaded = true;
            }
       }
      
       twinklingImage.onload = function(){
            if(twinklingImage.complete){
              self.twinklingImageDownloaded = true
            }
       }
     }
  },
  computed: {
    componentToShow: function(){
      if(!(this.mountainImageDownloaded && this.moonImageDownloaded && this.starsImageDownloaded && this.twinklingImageDownloaded))
          return "Loading"
      else 
          return "MainContent"
    }
  },
  components:{
    Loading,
    MainContent
  }
}
</script>
<style scoped >
body{
  background: black;
}
.main-app{
  background: black;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: all .3s ease;
  transition-delay: 1s; 
  opacity: 1;
}
.component-fade-enter, .component-fade-leave-to
 {
  opacity: 0;

}
</style>
