<template>
  <section id="skills" class="skills-main-section">
    <div class="section-name right">
         <div class="horizontal-gradient-line-to-left"/>
        <h1 class="section-name-text-right">Skills</h1>
    </div>
    <div class="section-details-container">
        <div class="section-details-heading-wrapper"><span class="left-line"></span><h2 class="section-details-heading">Languages I Speak</h2><span class="right-line"></span></div>
            <div class="skills-icons">
                <skill-card imgSrc="assets/javascript.png" imgLabel="Javascript" imgHeight="40" imgWidth="32.3"/>
                <skill-card imgSrc="assets/c.png" imgLabel="C" imgHeight="40" imgWidth="40"/>
                <skill-card imgSrc="assets/c++.png" imgLabel="C++" imgHeight="40" imgWidth="40"/>
                <skill-card imgSrc="assets/java.png" imgLabel="Java" imgHeight="40" imgWidth="40"/>
            </div>
        <div class="section-details-heading-wrapper"><span class="left-line"></span><h2 class="section-details-heading">Frontend Frameworks</h2><span class="right-line"></span></div>
        <div class="skills-icons">
                <skill-card imgSrc="assets/vue.png" imgLabel="Vue" imgHeight="40" imgWidth="46.22"/>
                <skill-card imgSrc="assets/electron.png" imgLabel="ElectronJS" imgHeight="40" imgWidth="36.88"/>
                <skill-card imgSrc="assets/react.png" imgLabel="ReactJS" imgHeight="40" imgWidth="40"/>

            </div>  
        <div class="section-details-heading-wrapper"><span class="left-line"></span><h2 class="section-details-heading">Runtime Environment</h2><span class="right-line"></span></div>
            <div class="skills-icons">
                <skill-card imgSrc="assets/node2.png" imgLabel="NodeJS" imgHeight="40" imgWidth="40"/>
            </div>    
        <div class="section-details-heading-wrapper"><span class="left-line"></span><h2 class="section-details-heading">Backend Framework</h2><span class="right-line"></span></div>
       <div class="skills-icons">
                <skill-card imgSrc="assets/express.png" imgLabel="ExpressJS" imgHeight="40" imgClass="expressjs" imgWidth="65.33"/>
            </div>   
        <div class="section-details-heading-wrapper"><span class="left-line"></span><h2 class="section-details-heading">Web Technologies</h2><span class="right-line"></span></div>
        <div class="skills-icons">
                <skill-card imgSrc="assets/html.png" imgLabel="HTML" imgHeight="40" imgWidth="38.84"/>
                <skill-card imgSrc="assets/css3.png" imgLabel="CSS3" imgHeight="40" imgWidth="40"/>
                <skill-card imgSrc="assets/sass.png" imgLabel="SCSS" imgHeight="40" imgWidth="53.33"/>

            </div>  
        <div class="section-details-heading-wrapper"><span class="left-line"></span><h2 class="section-details-heading">Databases</h2><span class="right-line"></span></div>
            <div class="skills-icons">
                 <skill-card imgSrc="assets/mysql.png" imgLabel="MySql" imgHeight="40" imgWidth="40"/>
                 <skill-card imgSrc="assets/mongodb.png" imgLabel="MongoDB" imgHeight="40" imgWidth="40"/>
            </div>  
    </div>
   </section>
  
</template>

<script>
import './sections.scss';
import './css-styled-components.scss';
import SkillCard from "../components/SkillCard";
export default {

  mounted(){
    this.observeMethod();
  },
  components:{
        'skill-card' : SkillCard
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
.skills-icons{
   display: inline-block;
    opacity: 0.8;
    text-align: center;
    margin: 0 auto;
    width: 100%;
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
.section-details-container{
  padding-bottom: 3rem;
}
</style>