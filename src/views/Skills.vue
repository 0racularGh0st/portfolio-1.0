<template>
  <section id="skills" class="skills-main-section">
    <div class="section-name right">
         <div class="horizontal-gradient-line-to-left"/>
        <h1 class="section-name-text-right">Skills</h1>
    </div>
    <div class="section-details-container">
        <h3>Here are some of the things I've worked with:</h3>
        <h3 class="section-details-heading">Languages I Speak</h3>
            <div>
                <p>Javascript, C, C++, Java</p>
            </div>
        <h3 class="section-details-heading">Runtime Environment</h3>
            <div>
                <p>
                    NodeJS
                </p>
            </div>
        <h3 class="section-details-heading">Backend Framework</h3>
        <div>
            <p>
                ExpressJS
            </p>
        </div>

        <h3 class="section-details-heading">Frontend Frameworks</h3>
        <div>
            <p>
                Vue, React, ElectronJS 
            </p>
        </div>
        <h3 class="section-details-heading">Web Technologies</h3>
        <div>
            <p>
                HTML, CSS, SCSS
            </p>
        </div>
        <h3 class="section-details-heading">Databases</h3>
        <div>
            <p>
                SQL: MySql
            </p>
            <p>
                NoSQL: MongoDB, NEDB
            </p>
        </div>
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
  threshold: 0.3
}
 const subSection = document.querySelector(".skills-main-section");
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
.skills-main-section{
  color : #cee8f5;
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