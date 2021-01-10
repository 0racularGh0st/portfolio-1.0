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
    margin-bottom: 8px;
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
.section-details-heading{
  text-align: left;
  margin-top: 8px;
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
    margin-bottom: 1rem;
    position: relative;
    .tree-hex{
      position: absolute;
      transform: translateY(-4px);
    }
    .bubble{
          min-width: 230px;
          width: auto;
          margin-left: 40px;
          padding-left: 16px;
          border: 1px solid var(--border-color-main);
          border-radius: 6px;
          
          &::before{
              content: "";
              position: absolute;
              width: 8px;
              height: 8px;
              background: linear-gradient(-90deg, var(--border-color-main) 0%, var(--main-light-gradient) 100%);
              left: 32px;
              top: 10px;
              border-bottom-left-radius: 100%;
              z-index: 1;
          }
          &::after{
              content: "";
              position: absolute;
              width: 8px;
              height: 6px;
              background: black;
              left: 33px;
              top: 11px;
              border-bottom-left-radius: 100%;
              z-index: 1;
          }
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
    margin-top: 8px;
    }
    .skills-icons{
      text-align: right;
      margin-bottom: 8px;
    }
    .bubble{
      margin-right: 24px;
      padding-right: 8px;
      border: 1px solid var(--border-color-main);
      border-radius: 6px;
      
      &::before{
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background: linear-gradient(90deg, var(--border-color-main) 0%, var(--main-light-gradient) 100%);
          right: 16px;
          top: 10px;
          border-bottom-right-radius: 100%;
          z-index: 1;
      }
      &::after{
          content: "";
          position: absolute;
          width: 8px;
          height: 6px;
          background: black;
          right: 17px;
          top: 11px;
          border-bottom-right-radius: 100%;
          z-index: 1;
      }
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
    margin-top: 8px;
    }
    .skills-icons{
       text-align: left;
       margin-bottom: 8px;
    }
    .bubble{
      margin-left: 24px;
      padding-left: 8px;
      border: 1px solid var(--border-color-main);
      border-radius: 6px;
      &::before{
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background: linear-gradient(90deg, var(--main-light-gradient) 0%, var(--border-color-main) 100%);
          left: 16px;
          top: 10px;
          border-bottom-left-radius: 100%;
          z-index: 1;
      }
      &::after{
          content: "";
          position: absolute;
          width: 8px;
          height: 6px;
          background: black;
          left: 17px;
          top: 11px;
          border-bottom-left-radius: 100%;
          z-index: 1;
      }
    }
}
.container {
  width: max-content;
  max-width: 46px;
}
}
.section-details-heading {
  position: relative;
  &::before{
    content: "";
    height: 1px;
    width: 100%;
    position: absolute;
    background: linear-gradient(45deg, #3e6ead 0%, #6ae4e6 50%, transparent 100%);
    bottom: -3px;
    z-index: -1;
  }
}
</style>