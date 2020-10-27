<template>
  <div>
    <div class="home">
      <section>
        <h1 class="content">
          <div id="line-typing" class="line-typing"></div>
        </h1>
        <h2 class="content-2">I build things that live on the internet.</h2>
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
    };
  },
  components: {
    about: About,
    skills: Skills,
    projects: Projects,
  },
};
</script>
<style scoped>
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
  transform: translateY(-50%);
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
  transform: translateY(3rem);
  transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s, transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s;
}
.content-2-show{
  opacity: 0.7;
  transform: translateY(0);
}
</style>