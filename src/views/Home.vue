<template>
  <div>
    <div class="home">
      <section>
        <h1 class="content">
          <div id="line-typing" class="line-typing"></div>
        </h1>
        <h2 class="content-2">I build things that live on the internet.</h2>
        <div class="button-wrapper">
          <a href="mailto:nigel4tariang@gmail.com" aria-label="Email">
          <div class="getintouch"><h3>Get In Touch</h3></div>
          </a>
        </div>
        <div class="copy-email" @click="copyEmail()">
          Copy Email Address
          <img v-if="copiedEmail" class="copied" src="../assets/checkmark.png" height="15" width="15" alt="checkmark" aria-label="checkmark">
          </div>
      </section>
    </div>
    <about />
    <skills />
    <projects />
  </div>
</template>

<script>
window.addEventListener("load", function () {
  setTimeout(startType, 3000);
});
let index = 0;
const mainText = "Hi, I'm Nigel. ";
const texts = ["FullStack Developer.", "DevOps Engineer."];
let letter = "";
let mainTextDone = false;
let count = 0;
let currentText = "";
let direction = "forward";
let prevDirection = "forward";
const startType = () => {
  if (document.querySelector(".line-typing")) {
    if (index <= mainText.length && !mainTextDone) {
      letter = mainText.slice(0, ++index);
      document.querySelector(".line-typing").textContent = letter;
      if (index > mainText.length) {
        mainTextDone = true;
        document.querySelector(".content-2").classList.add("content-2-show");
        document.querySelector(".getintouch").classList.add("getintouch-show");
        document.querySelector(".copy-email").classList.add("show");
        index = 0;
      }
    } else {
      if (count === texts.length) {
        count = 0;
      }

      currentText = texts[count];
      if (direction === "forward") {
        letter = currentText.slice(0, ++index);
        document.querySelector(".line-typing").textContent = mainText + letter;
        if (letter.length === currentText.length) {
          direction = "backward";
          //  count++;
          //  index = 0;
        }
      }
      if (direction === "backward") {
        letter = currentText.slice(0, index--);
        document.querySelector(".line-typing").textContent = mainText + letter;
        if (letter.length === 0) {
          direction = "forward";
          count++;
          index = 0;
        }
      }
    }
  }
  // if(index!==text.length)
  if (prevDirection === direction) {
    setTimeout(startType, 70);
  } else {
    prevDirection = direction;
    if (prevDirection === "forward") setTimeout(startType, 500);
    else {
      setTimeout(startType, 2000);
    }
  }
};
import { defineAsyncComponent } from "vue";
const About = defineAsyncComponent(() =>
  import("./About" /* webpackChunkName: "about" */)
);
const Skills = defineAsyncComponent(() =>
  import("./Skills" /* webpackChunkName: "skills" */)
);
const Projects = defineAsyncComponent(() =>
  import("./Projects" /* webpackChunkName: "projects" */)
);

export default {
  data() {
    return {
      text: "Hi, I'm Nigel. FullStack Developer.",
      index: 0,
      letter: "",
      copiedEmail: false
    };
  },
  components: {
    about: About,
    skills: Skills,
    projects: Projects,
  },
  methods: {
    copyEmail: function(){
      var myEmail = document.createElement("textarea");
      document.body.appendChild(myEmail);
      myEmail.value = "nigel4tariang@gmail.com";
      myEmail.select();
      myEmail.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.body.removeChild(myEmail);
      this.copiedEmail = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 50vh;
}
.content {
  margin: 50vh auto 0 auto;
  width: 31ch;
}
.line-typing {
  color: #cee8f5;
  overflow: hidden;
  white-space: nowrap;
  transform: translate3d(0,-50%,0);
}

.line-typing::after {
  content: "";
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  animation: blinkTextCursor 500ms infinite;
  animation-delay: 2s;
  animation-direction: normal;
  animation-fill-mode: both;
}

@keyframes blinkTextCursor {
  0% {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  100% {
    border-right-color: transparent;
  }
}
@-webkit-keyframes blinkTextCursor {
  0% {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  100% {
    border-right-color: transparent;
  }
}
.content-2 {
  color: #cee8f5;
  margin-top: unset;
  max-width: 100vw;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  transform: translate3d(0rem,3rem,0rem);
  transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s, transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s;
}
.content-2-show{
  opacity: 0.7;
  transform: translate3d(0,0,0);
}
.button-wrapper{
    display: flex;
    justify-content: center;
    text-decoration: none;
    a{
      text-decoration: none;
    }
}
.getintouch{
    transform: translate3d(0rem,3rem,0rem);
    opacity: 0;
    padding: 1px;
    background-color: black;
    color: #cee8f5;
    border: none;
    position: relative;
    z-index: 0;
    border-radius: 5px;
    transition: background 1s ease, transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s,opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s;
    &::before{
      content: "";
    position: absolute;
    padding: 11px 9px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
    transition: background 1s ease;
    background: linear-gradient(45deg, #3e6ead 0%, #6ae4e6 50%, transparent 100%);
    }
  h3{
    margin: 0;
    background: rgba(0, 0, 0, 1);
    padding: 10px 8px;
    border-radius: 5px;
    transition: background 1s ease;
    font-size: 14px;
    letter-spacing: 1px;
  }
}
.getintouch:hover{
   background: linear-gradient(45deg, #3e6ead 0%, #6ae4e6 50%, transparent 100%);
  &::before{
    background: linear-gradient(-45deg, #3e6ead 0%, #6ae4e6 50%, transparent 100%);
    }
  h3{
    background: rgba(0, 0, 0, 0.85);
  }
}
.getintouch-show{
  transform: translate3d(0rem,0rem,0rem);
    opacity: 0.9;
}
.copy-email{
    position: relative;
    color: #cee8f5;
    font-size: 12px;
    font-family: "Work Sans";
    margin-top: 0.5rem;
    text-align: center;
    cursor: pointer;
    transform: translate3d(0rem,3rem,0rem);
    opacity: 0;
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) .7s,opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) .7s;
    &:hover{
      color: rgb(106, 228, 230);

    }
    &.show{
      transform: translate3d(0rem,0rem,0rem);
      opacity: 0.9;
    }
    .copied{
    position: absolute;
    margin-left: 6px;
    transform: translate3d(0px,-3px,0px);
    -webkit-transform: translate3d(0px,-3px,0px);
    }
}
</style>