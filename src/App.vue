<template>
  <div id="main-app">
    <MainContent id="main-content" v-show="(mountainImageDownloaded && moonImageDownloaded && starsImageDownloaded && twinklingImageDownloaded)"></MainContent>
    <div v-show="!(mountainImageDownloaded && moonImageDownloaded && starsImageDownloaded && twinklingImageDownloaded)"> Loading... </div>
  </div>
</template>
<script>

import MountainImage from './assets/mountain5.jpg';
import MoonImage from './assets/rsz_moon.png';
import StarsImage from './assets/stars.png';
import TwinklingImage from './assets/twinkling.png';
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
  components:{
    MainContent
  }
}
</script>
<style scoped >

</style>
