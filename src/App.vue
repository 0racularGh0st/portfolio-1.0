<template>
  <div id="main-app">
    <!-- <MainContent id="main-content" v-show="(mountainImageDownloaded && moonImageDownloaded && starsImageDownloaded && twinklingImageDownloaded)"></MainContent> 
    <Loading v-show="!(mountainImageDownloaded && moonImageDownloaded && starsImageDownloaded && twinklingImageDownloaded)"></Loading> -->
  <transition name="component-fade" mode="out-in">
      <component v-bind:is="componentToShow"></component>
  </transition>
  </div>
</template>
<script>
import Loading from './components/Loading';
import MountainImage from './assets/mountain.jpg';
import MoonImage from './assets/rsz_moon.jpg';
import StarsImage from './assets/stars.jpg';
import TwinklingImage from './assets/twinkling.jpg';
import MainContent from './views/MainContent';
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
       let self = this;
        let mountainImage = new Image();
        let moonImage = new Image();
        let starsImage = new Image();
        let twinklingImage = new Image();
        mountainImage.src = MountainImage;
        moonImage.src = MoonImage;
        starsImage.src = StarsImage;
        twinklingImage.src = TwinklingImage;

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
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity 1.3s ease-in-out;
}
.component-fade-enter, .component-fade-leave-to
 {
  opacity: 0;
}
</style>
