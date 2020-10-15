<template>
  <div class="navstyle">
    <nav class="nav">
      <a href="/"><div class="mylogo">
        <img src="../assets/mylogomain.jpg" />
        <div class="container">
          <svg
            id="hexagon"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style="stop-color: rgb(62, 110, 173); stop-opacity: 1"
                />
                <stop
                  offset="100%"
                  style="stop-color: rgb(106, 228, 230); stop-opacity: 1"
                />
              </linearGradient>
            </defs>
            <path
              stroke="url(#grad1)"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M 50, 5
         L 11, 27
         L 11, 72
         L 50, 95
         L 89, 73
         L 89, 28 z"
            />
          </svg>
        </div>
      </div>
      </a>
      <ul class="nav-links">
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Skill-Set</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
      </ul>
      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  </div>
</template>
<script>
import anime from "animejs/lib/anime.es.js";
const anim = anime.timeline({
  loop: false,
  direction: "alternate",
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burger.click();
    });
  });
};
const dropShadow = () => {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    // console.log("scrolled", window.pageYOffset);
    if (window.pageYOffset > 10) {
      nav.classList.add("nav-drop-shadow");
    } else {
      nav.classList.remove("nav-drop-shadow");
    }
  });
};

const hideNav = () =>{
    const burger = document.querySelector(".burger");
     const nav = document.querySelector("nav");
    var prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", () => {
   
      if(window.pageYOffset>64){
          var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.classList.remove('hidenav');
  } else {
      if(burger.classList.contains('toggle'))
      burger.click();
    nav.classList.add('hidenav');
  }
  prevScrollpos = currentScrollPos;
      }
    
  });
};
export default {
  mounted() {
    navSlide();
    dropShadow();
    anim.add({
      targets: "#hexagon path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutQuart",
      duration: 1500,
      delay: function (el, i) {
        return i * 250;
      },
    });
    hideNav();
  },
};
</script>
<style >
.container {
  width: max-content;
  max-width: 100px;
  position: absolute;
}

svg {
  width: 46%;
  height: 46%;
  display: block;
  margin: 0 auto;
  fill: none;
  transform: translateX(-11.5px) translateY(-31px);
}
svg:hover {
  filter: drop-shadow(0 0 0.4rem rgb(106, 228, 230));
}
.navstyle {
  position: absolute;
  top: 0;
  left: 0;
}
.nav {
  position: fixed;
  width: 100vw;
  height: 64px;
  display: flex;
  justify-content: space-between;
  font-family: "Comfortaa";
  text-transform: uppercase;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  transition: all 0.5s ease;
  top: 0px;
}
.hidenav{
    top: -64px
}
.nav-drop-shadow {
  box-shadow: 0px 4px 13px 1px rgb(36, 54, 66, 0.4);
}
.nav-links {
  display: flex;
  justify-content: space-around;
  width: 45%;
}
.nav-links li {
  list-style: none;
}
.nav-links a {
  color: #cee8f5;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 10px;
}
@media (min-width: 320px) {
  .nav {
    width: 100vw;
    height: 64px;
    background: rgba(0, 0, 0, 0.9);
    transition: all 0.3s ease;
    top: 0px;
  }
  .hidenav{
    top: -64px
}
}
.mylogo > img {
  height: 30px;
  position: absolute;
  transform: translateX(23.5px) translateY(-25px);
}
.mylogo {
  position: relative;
  margin-top: 1rem;
}
.burger {
  display: none;
}
.burger div {
  width: 25px;
  height: 3px;
  background-color: #cee8f5;
  margin: 5px;
  border-radius: 10px;
  transition: all 0.3s ease;
}
@media screen and (max-width: 768px) {
  body {
    overflow-x: hidden;
  }
  .nav-links {
    position: absolute;
    right: 0px;
    top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    transform: translateX(100%);
    transition: all 0.5s ease-in;
    height: 165px;
    background: linear-gradient(
      240deg,
      rgb(11 18 27) 0%,
      rgb(5 8 12) 52%,
      transparent 100%
    );
    border-bottom-left-radius: 75%;
    box-shadow: -2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  }
  .nav-links li {
    opacity: 0;
    transition: all 0.5s ease;
  }
  .burger {
    display: block;
    cursor: pointer;
    margin-right: 8px;
    background: rgba(0, 0, 0, 0.5);
  }
  .nav-active {
    transform: translateX(0%);
  }
  @keyframes navLinkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  .toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  .toggle .line2 {
    opacity: 0;
    transform: translateX(100%);
  }
  .toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
}
</style>