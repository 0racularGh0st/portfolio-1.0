<template>
  <section id="skills" class="skills-main-section">
    <div class="section-name right">
         <div class="horizontal-gradient-line-to-left"/>
        <h1 class="section-name-text-right">Skills</h1>
    </div>
    <div class="section-details-container tree">
            <div class="content">
              <img src="../assets/tree-hex.svg" alt="tree-hex" aria-label="tree-hex" width="25" height="25" class="tree-hex"/>
              <div class="bubble">
                <div class="section-details-heading-wrapper"><h4 class="section-details-heading">Languages I Speak</h4></div>
                <div class="skills-icons">
                <skill-card imgSrc="assets/javascript.png" imgLabel="Javascript" imgHeight="40" imgWidth="32.3" textPos="up"/>
                <skill-card imgSrc="assets/c.png" imgLabel="C" imgHeight="40" imgWidth="40" textPos="down"/>
                <skill-card imgSrc="assets/c++.png" imgLabel="C++" imgHeight="40" imgWidth="40" textPos="up"/>
                <skill-card imgSrc="assets/java.png" imgLabel="Java" imgHeight="40" imgWidth="40" textPos="down"/>
              </div>
              </div>
            </div>
           <div class="content">
            <img src="../assets/tree-hex.svg" alt="tree-hex" aria-label="tree-hex" width="25" height="25" class="tree-hex"/>
            <div class="bubble">
              <div class="section-details-heading-wrapper"><h4 class="section-details-heading">Frontend Frameworks</h4></div>
             <div class="skills-icons">
                <skill-card imgSrc="assets/vue.png" imgLabel="Vue" imgHeight="40" imgWidth="46.22" textPos="up"/>
                <skill-card imgSrc="assets/electron.png" imgLabel="ElectronJS" imgHeight="40" imgWidth="36.88" textPos="down"/>
                <skill-card imgSrc="assets/react.png" imgLabel="ReactJS" imgHeight="40" imgWidth="40" textPos="up"/>
            </div>  
            </div>
           </div>
          <div class="content">
            <img src="../assets/tree-hex.svg" alt="tree-hex" aria-label="tree-hex" width="25" height="25" class="tree-hex"/>
            <div class="bubble">
              <div class="section-details-heading-wrapper"><h4 class="section-details-heading">Runtime Environment</h4></div>
                <div class="skills-icons">
                    <skill-card imgSrc="assets/node2.png" imgLabel="NodeJS" imgHeight="40" imgWidth="40" textPos="up"/>
                </div>  
            </div> 
          </div> 
          <div class="content">
            <img src="../assets/tree-hex.svg" alt="tree-hex" aria-label="tree-hex" width="25" height="25" class="tree-hex"/>
            <div class="bubble">
               <div class="section-details-heading-wrapper"><h4 class="section-details-heading">Backend Framework</h4></div>
             <div class="skills-icons">
                <skill-card imgSrc="assets/express.png" imgLabel="ExpressJS" imgHeight="40" imgClass="expressjs" imgWidth="65.33" textPos="up"/>
            </div>   
            </div>
          </div>
        <div class="content">
          <img src="../assets/tree-hex.svg" alt="tree-hex" aria-label="tree-hex" width="25" height="25" class="tree-hex"/>
          <div class="bubble">
            <div class="section-details-heading-wrapper"><h4 class="section-details-heading">Web Technologies</h4></div>
          <div class="skills-icons">
                <skill-card imgSrc="assets/html.png" imgLabel="HTML" imgHeight="40" imgWidth="38.84" textPos="up"/>
                <skill-card imgSrc="assets/css3.png" imgLabel="CSS3" imgHeight="40" imgWidth="40" textPos="down"/>
                <skill-card imgSrc="assets/sass.png" imgLabel="SCSS" imgHeight="40" imgWidth="53.33" textPos="up"/>
            </div>  
          </div>
        </div>
       <div class="content">
         <img src="../assets/tree-hex.svg" alt="tree-hex" aria-label="tree-hex" width="25" height="25" class="tree-hex"/>
          <div class="bubble">
            <div class="section-details-heading-wrapper"><h4 class="section-details-heading">Databases</h4></div>
            <div class="skills-icons">
                 <skill-card imgSrc="assets/mysql.png" imgLabel="MySql" imgHeight="40" imgWidth="40" textPos="up"/>
                 <skill-card imgSrc="assets/mongodb.png" imgLabel="MongoDB" imgHeight="40" imgWidth="40" textPos="down"/>
            </div>  
          </div>
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
    text-align: center;
    margin: 0 auto;
    width: 100%;
}
.section-details-heading-wrapper{
display: flex;
    align-items: center;
    justify-content: center;
}
.section-details-container{
  padding-bottom: 3rem;
  box-shadow: unset;
}
.section-details-heading{
    margin-top: 0;
    margin-bottom: 0;
  }
@media screen and (max-width: 768px){
  .section-details-container{
  padding: unset;
  max-width: unset;
}
.tree{
  position: relative;
   width: 100%;
   box-sizing: border-box;
   &::before{
      content: '';
      position: absolute;
      left: 12px;
      width: 1px;
      height: 100%;
      opacity: 0.7;
      background:linear-gradient(#3e6ead 0%, #6ae4e6 80%, transparent 100%);
   }
  .content{
    box-sizing: border-box;
    .tree-hex{
      position: absolute;
    }
  }
}
}
@media screen and (min-width: 769px){
  .section-details-container{
  padding: unset;
}
.section-details-heading-wrapper{
    display: unset;
    align-items: unset;
    justify-content: unset;
}
  .tree{
   position: relative;
   width: 100%;
   box-sizing: border-box;
   &::before{
      content: '';
      position: absolute;
      left: 50%;
      width: 1px;
      height: 100%;
      opacity: 0.7;
      background:linear-gradient(#3e6ead 0%, #6ae4e6 80%, transparent 100%);
   }
  .content{
    width: 50%;
    box-sizing: border-box;
  }
}
.content:nth-child(odd){
  position: relative;
  clear: both;
  .tree-hex{
      position: absolute;
      right: -13px;
    }
    .section-details-heading{
    text-align: right;
    width: min-content;
    margin-left: auto;
    }
    .skills-icons{
      text-align: right;
    }
    .bubble{
      margin-right: 24px;
    }
}
.content:nth-child(even){
  position: relative;
  margin-left: 50%;
  clear: both;
  .tree-hex{
      position: absolute;
      left: -12px;
    }
    .section-details-heading{
    text-align: left;
    width: min-content;
    margin-right: auto;
    }
    .skills-icons{
       text-align: left;
    }
    .bubble{
      margin-left: 24px;
    }
}
.container {
  width: max-content;
  max-width: 46px;
}
}

</style>