<template>
  <section id="projects" class="projects-main-section">
    <div class="section-name">
      <h1 class="section-name-text-left">
        <img src="../assets/projects.svg" height="20" width="20" aria-label="projects-icon" alt="projects-icon" :style="{marginRight:'8px'}"/>
        Projects</h1>
      <div class="horizontal-gradient-line-to-right" />
    </div>
    <div class="section-details-container">
      <Project :imgSrc="webpSupported? 'assets/my-spotify.webp' : 'assets/my-spotify.png'" :config="config.mySpotify" place="left" class="project-item"/>
      <Project :imgSrc="webpSupported? 'assets/peer-vue.webp' : 'assets/peer-vue.png'" :config="config.peerVue" place="right" class="project-item"/>
      <Project :imgSrc="webpSupported? 'assets/service-status.webp' : 'assets/service-status.png'" :config="config.serviceStatus" place="left" class="project-item"/>
      <Project :imgSrc="webpSupported? 'assets/craftastic.webp' : 'assets/craftastic.png'" :config="config.craftastic" place="right" class="project-item"/>
    </div>
  </section>
</template>
<script>
import './sections.scss';
import './css-styled-components.scss';
const Modernizer = window.Modernizr;
const isWebpSupported = () => {
  if(Modernizer.webp)
    return true;
  else
    return false;
}
import config from "../config";
import Project from "../components/Project";
export default {
    async created(){
      this.webpSupported = await isWebpSupported();
    },
    mounted(){
      console.log("Mounted");
      this.observeMethod();
    },
  data(){
    return{
      webpSupported: false,
      config: config.PROJECTS
    }
  },
  methods: {
    observeMethod: function(){
      let options = {
      root: document.querySelector('main-app'),
      rootMargin: '0px',
      threshold: 0.0
        }
        const subSection = document.querySelector(".projects-main-section");
              let observer = new IntersectionObserver((entry) => {
                  if(entry[0].isIntersecting)
                  {
                    subSection.classList.add("sub-section-show");
                    observer.disconnect();
                  }
              },options);
              observer.observe(subSection);
        const projectItems = document.querySelectorAll(".project-item");
              let itemObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                      if(entry.isIntersecting)
                      {
                        entry.target.classList.add("show");
                        itemObserver.unobserve(entry.target);
                      }
                    })
              },options);
              projectItems.forEach((projectItem)=>{
                itemObserver.observe(projectItem);
              })

      }
  },
  components: {
    Project
  }
}
</script>
<style lang="scss" scoped>
.projects-main-section{
  color : #cee8f5;
  margin-top: 5rem;
  margin-bottom: 5rem;
  transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s, transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
  opacity: 0;
  transform: translate3d(0rem,3rem,0rem);
  -webkit-transform: translate3d(0rem,3rem,0rem);
}
.project-item{
  opacity: 0;
  transform: translate3d(0rem,3rem,0rem);
  -webkit-transform: translate3d(0rem,3rem,0rem);
  transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s, transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
  &.show{
    opacity: 1;
    transform: translate3d(0rem,0rem,0rem);
    -webkit-transform: translate3d(0rem,0rem,0rem);
  }
}
.sub-section-show{
  opacity: 1;
  transform: translate3d(0rem,0rem,0rem);
  -webkit-transform: translate3d(0rem,0rem,0rem);
}
.section-details-container{
  color: #bec2d2;
  box-shadow: unset;
}
@media screen and (max-width: 767px){
  .section-details-container{
  padding: unset;
  max-width: unset;
}
}
</style>