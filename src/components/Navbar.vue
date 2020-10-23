<template>
  <div class="navstyle">
    <nav class="nav">
      <a href="/"
        ><div class="mylogo">
          <img src="../assets/logo60x60.png"  alt="Logo" aria-label="Logo"/>
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
          <a href="#"
            ><svg width="23" height="23" fill="url(#grad1)">
              <path
                d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              ></path></svg
            >About Me</a
          >
        </li>
        <li>
          <a href="#"
            ><svg width="23" height="23" fill="url(#grad1)">
              <path
                d="M21.49,4.73,17,2.17a1,1,0,0,0-1,0L12,4.45,8,2.17a1,1,0,0,0-1,0L2.51,4.73A1,1,0,0,0,2,5.6v5.12a1,1,0,0,0,.51.87l4,2.27V18.4a1,1,0,0,0,.51.87l4.5,2.56a1,1,0,0,0,1,0L17,19.27a1,1,0,0,0,.51-.87V13.86l4-2.27a1,1,0,0,0,.51-.87V5.6A1,1,0,0,0,21.49,4.73ZM4,10.14v-4l3.5-2,3.5,2v4l-3.5,2Zm11.5,7.68-3.5,2-3.5-2v-4l3.5-2,3.5,2ZM20,10.14l-3.5,2-3.5-2v-4l3.5-2,3.5,2Z"
              ></path></svg
            >Skills</a
          >
        </li>
         <li>
          <a href="#"
            ><svg width="23" height="23" fill="url(#grad1)">
              <path
                d="M22.78,10.37A1,1,0,0,0,22,10H20V9a3,3,0,0,0-3-3H10.72l-.32-1A3,3,0,0,0,7.56,3H4A3,3,0,0,0,1,6V18a3,3,0,0,0,3,3H18.4a3,3,0,0,0,2.92-2.35L23,11.22A1,1,0,0,0,22.78,10.37ZM5.37,18.22a1,1,0,0,1-1,.78H4a1,1,0,0,1-1-1V6A1,1,0,0,1,4,5H7.56a1,1,0,0,1,1,.68l.54,1.64A1,1,0,0,0,10,8h7a1,1,0,0,1,1,1v1H8a1,1,0,0,0-1,.78Zm14,0a1,1,0,0,1-1,.78H7.21a1.42,1.42,0,0,0,.11-.35L8.8,12h12Z"
              ></path></svg
            >Projects</a
          >
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
      if (window.innerWidth < 769) burger.click();
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

const hideNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  var prevScrollpos = window.pageYOffset;
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 64) {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        nav.classList.remove("hidenav");
      } else {
        if (burger.classList.contains("toggle")) burger.click();
        nav.classList.add("hidenav");
      }
      prevScrollpos = currentScrollPos;
    }
  });
};
const dropDemLinks = () => {
  const navLinks = document.querySelectorAll(".nav-links li");
  navLinks.forEach((link) => {
    link.classList.add("navLinksShow");
  });
};
export default {
  mounted() {
    dropDemLinks();
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
<style>
.container {
  width: max-content;
  max-width: 46px;
}

.container svg {
  width: 46px;
  height: 46px;
  display: block;
  margin: 0 auto;
  fill: none;
  transform: translateX(15.5px) translateY(-9px);
}
.container svg:hover {
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
  font-family: "Work sans";
  text-transform: uppercase;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  transition: all 0.5s ease;
  top: 0px;
}
.hidenav {
  top: -64px;
}
.nav-drop-shadow {
  box-shadow: 0px 4px 13px 1px rgb(36, 54, 66, 0.4);
}
.nav-links {
  display: flex;
  justify-content: space-around;
  width: 45%;
  font-family: 'Work Sans-light';
}
.nav-links li:hover{
  color: rgb(106, 228, 230);
}
@media (min-width: 769px) {
  .nav-links li {
    list-style: none;
    opacity: 0;
  }

  .navLinksShow:nth-child(1) {
    animation: 0.3s ease 0.3s 1 normal forwards running navLinksDrop;
  }
  .navLinksShow:nth-child(2) {
    animation: 0.3s ease 0.44s 1 normal forwards running navLinksDrop;
  }
  .navLinksShow:nth-child(3) {
    animation: 0.3s ease 0.58s 1 normal forwards running navLinksDrop;
  }
  @keyframes navLinksDrop {
    0% {
      opacity: 0;
      transform: translateY(-64px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}
.nav-links a {
  color: #cee8f5;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.nav-links a:hover{
  color: rgb(106, 228, 230);
}
.nav-links svg {
  height: 23px;
  width: 23px;
  margin-right: 2px;
  margin-bottom: 1px;
  transform: scale(0.65);
}
@media (min-width: 320px) {
  .nav {
    width: 100vw;
    height: 64px;
    background: rgba(0, 0, 0, 0.9);
    transition: all 0.3s ease;
    top: 0px;
  }
  .hidenav {
    top: -64px;
  }
}
.mylogo > img {
  height: 30px;
  position: absolute;
  transform: translateX(23.5px) translateY(-3px);
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
  background: linear-gradient(90deg, rgb(62, 110, 173) 0%,rgb(106, 228, 230) 100%);
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
    align-items: flex-start;
    width: 40%;
    transform: translateX(100%);
    transition: all 0.3s ease-in;
    height: 165px;
    background: linear-gradient(
      240deg,
      rgb(11 18 27) 0%,
      rgb(5 8 12) 52%,
      transparent 100%
    );
    font-family: 'Work Sans-light';
  
    box-shadow: -2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  }
  .nav-links li {
    list-style: none;
    margin-left: 16px;
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