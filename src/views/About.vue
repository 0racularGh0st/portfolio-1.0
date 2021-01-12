<template>
  <section id="about" class="about-main-section">
    <div class="section-name">
        <h1 class="section-name-text-left"><img src="../assets/about.svg" height="20" width="20" aria-label="about-icon" alt="about-icon" :style="{marginRight:'8px'}"/>About Me</h1>
        <div class="horizontal-gradient-line-to-right"/>
    </div>
    <div class="section-details-container">
        <p>Hello! I'm <a href="javascript:;" class="highlight-text">Nigel David</a>, a Fullstack Developer from Shillong, Meghalaya - India.</p>
        <p>I love building things that live on the internet, be it websites, applications or other things in between. 
          My goal is to always build products that focus on Functionality, Performance and Design. 
        </p>
        <p>
          Shortly after graduating from <a href="https://www.iitm.ac.in/" target="_blank" rel="noopener noreferrer" class="highlight-text-link" aria-label="IIT Madras">IIT Madras<span class="hightlight-text-underline"></span></a> (M.Tech CSE), I joined <a href="https://www.telstra.com.au/" target="_blank" rel="noopener noreferrer" class="highlight-text-link" aria-label="Telstra">Telstra<span class="hightlight-text-underline"></span></a> as a Software/DevOps Engineer where I work on various Backend and Frontend applications. 
        </p>

    </div>
   </section>
  
</template>

<script>
import './sections.scss';
import './css-styled-components.scss';
import AboutIcon from '../assets/about.svg';
export default {
  mounted(){
    this.observeMethod();
  },
  data(){
    return{
      aboutIcon: AboutIcon
    }
  },
  methods: {
    observeMethod: function(){
      let options = {
  root: document.querySelector('main-app'),
  rootMargin: '0px',
  threshold: 0.1
}
 const subSection = document.querySelector(".about-main-section");
        let observer = new IntersectionObserver((entry) => {
            if(entry[0].isIntersecting)
            {
              subSection.classList.add("sub-section-show");
               observer.disconnect();
            }
        },options);
        observer.observe(subSection);
    }
  }
}
</script>
<style scoped>
.about-main-section{
  color : #cee8f5;
  margin-bottom: 5rem;
  transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s, transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
  opacity: 0;
  transform: translate3d(0rem,3rem,0rem);
  -webkit-transform: translate3d(0rem,3rem,0rem);
}
.sub-section-show{
  opacity: 1;
  transform: translate3d(0rem,0rem,0rem);
  -webkit-transform: translate3d(0rem,0rem,0rem);
}
.section-details-container{
  color: #bec2d2;
}
</style>