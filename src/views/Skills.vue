<template>
  <section id="skills" class="skills-main-section">
    <div class="section-name right">
         <div class="horizontal-gradient-line-to-left"/>
        <h1 class="section-name-text-right">Skills</h1>
    </div>
    <div class="section-details-container">
        <p>Here are some of the things I've worked with:</p>
        <div class="section-details-heading-wrapper"><span class="left-line"></span><h4 class="section-details-heading">Languages I Speak</h4><span class="right-line"></span></div>
            <div class="skills-icons">
                <div class="skill-wrapper">
                    <img src="../assets/javascript.png" height="40" aria-label="javascript" alt="javascript"/>
                    <p>Javascript</p>
                </div>
                <div class="skill-wrapper">
                    <img src="../assets/c.png" height="40" aria-label="C" alt="C"/>
                    <p>C</p>
                </div>
                <div class="skill-wrapper">
                    <img src="../assets/c++.png" height="40" aria-label="C++" alt="C++"/>
                    <p>C</p>
                </div>
                <div class="skill-wrapper">
                    <img src="../assets/java.png" height="40" aria-label="Java" alt="Java"/>
                    <p>Java</p>
                </div>
            </div>
        <div class="section-details-heading-wrapper"><span class="left-line"></span><h4 class="section-details-heading">Frontend Frameworks</h4><span class="right-line"></span></div>
        <div class="skills-icons">
             <div class="skill-wrapper">
                    <img src="../assets/vue.png" height="40" aria-label="VueJS" alt="VueJS"/>
                    <p>VueJS</p>
                </div>
                <div class="skill-wrapper">
                    <img src="../assets/electron.png" height="40" aria-label="ElectronJS" alt="ElectronJS"/>
                    <p>ElectronJS</p>
                </div>
                <div class="skill-wrapper">
                    <img src="../assets/react.png" height="40" aria-label="ReactJS" alt="ReactJS"/>
                    <p>ReactJS</p>
                </div>
            </div>  
        <div class="section-details-heading-wrapper"><span class="left-line"></span><h4 class="section-details-heading">Runtime Environment</h4><span class="right-line"></span></div>
            <div class="skills-icons">
                <div class="skill-wrapper">
                    <img src="../assets/node2.png" height="60" aria-label="node" alt="node"/>
                    <p>NodeJS</p>
                </div>
            </div>    
        <div class="section-details-heading-wrapper"><span class="left-line"></span><h4 class="section-details-heading">Backend Framework</h4><span class="right-line"></span></div>
       <div class="skills-icons">
                <div class="skill-wrapper">
                    <img src="../assets/express.png" height="50" aria-label="express" alt="express" class="expressjs"/>
                    <p>ExpressJS</p>
                </div>
            </div>   
        <div class="section-details-heading-wrapper"><span class="left-line"></span><h4 class="section-details-heading">Web Technologies</h4><span class="right-line"></span></div>
        <div class="skills-icons">
                <div class="skill-wrapper">
                    <img src="../assets/html.png" height="40" aria-label="HTML" alt="HTML"/>
                    <p>HTML</p>
                </div>
                <div class="skill-wrapper">
                    <img src="../assets/css3.png" height="40" aria-label="CSS" alt="CSS"/>
                    <p>CSS3</p>
                </div>
                <div class="skill-wrapper">
                    <img src="../assets/sass.png" height="40" aria-label="Sass" alt="Sass"/>
                    <p>SCSS</p>
                </div>
            </div>  
        <div class="section-details-heading-wrapper"><span class="left-line"></span><h4 class="section-details-heading">Databases</h4><span class="right-line"></span></div>
            <div class="skills-icons">
                <div class="skill-wrapper">
                    <img src="../assets/mysql.png" height="40" aria-label="MySql" alt="MySql"/>
                    <p>MySql</p>
                </div>
               <div class="skill-wrapper">
                    <img src="../assets/mongodb.png" height="40" aria-label="MongoDB" alt="MongoDB"/>
                    <p>MongoDB</p>
                </div>
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
  threshold: 0.1
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
<style lang="scss" scoped>
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
.skills-icons{
    display: flex;
    justify-content: center;
    opacity: 0.8;
}
.skill-wrapper{
display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0.5rem;
   p{
       margin-top: 0.5rem;
   }
}
.expressjs{
    background: #cee8f5;
    border-radius: 5px;
}
.left-line{
        background:linear-gradient(-45deg, rgb(83, 75, 75) 0%, transparent 100%);
    height: 1px;
    width: 100%;
}
.right-line{
        background:linear-gradient(45deg, rgb(83, 75, 75) 0%, transparent 100%);
    height: 1px;
    width: 100%;
}
.section-details-heading-wrapper{
display: flex;
    align-items: center;
    justify-content: center;
}
</style>