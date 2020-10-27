<template>
  <section id="projects" class="projects-main-section">
    <div class="section-name">
      <h1 class="section-name-text-left">Projects</h1>
      <div class="horizontal-gradient-line-to-right" />
    </div>
    <div class="section-details-container">
      <p>To be added soon! Check back later. </p>
    </div>
  </section>
</template>
<script>
import './sections.scss';
import './css-styled-components.scss';
export default {
    mounted(){
    this.observeMethod();
  },
  methods: {
    observeMethod: function(){
      let options = {
  root: document.querySelector('main-app'),
  rootMargin: '0px',
  threshold: 0.1
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
    }
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
  transform: translateY(3rem);
  -webkit-transform: translateY(3rem);
}
.sub-section-show{
  opacity: 1;
  transform: translateY(0rem);
  -webkit-transform: translateY(0rem);
}
.section-details-container{
  color: #bec2d2;
}
</style>