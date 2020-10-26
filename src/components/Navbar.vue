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
          <a href="javascript:;" v-on:click="smoothScroll('.about-main-section',1000)"
            ><svg width="23" height="23" fill="url(#grad1)">
              <path
                d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              ></path></svg
            ><span >About Me <span class="hightlight-text-underline-navs"></span></span></a
          >
        </li>
        <li>
          <a href="javascript:;" v-on:click="smoothScroll('.skills-main-section',1000)"
            ><svg width="23" height="23" fill="url(#grad1)">
              <path
                d="M21.49,4.73,17,2.17a1,1,0,0,0-1,0L12,4.45,8,2.17a1,1,0,0,0-1,0L2.51,4.73A1,1,0,0,0,2,5.6v5.12a1,1,0,0,0,.51.87l4,2.27V18.4a1,1,0,0,0,.51.87l4.5,2.56a1,1,0,0,0,1,0L17,19.27a1,1,0,0,0,.51-.87V13.86l4-2.27a1,1,0,0,0,.51-.87V5.6A1,1,0,0,0,21.49,4.73ZM4,10.14v-4l3.5-2,3.5,2v4l-3.5,2Zm11.5,7.68-3.5,2-3.5-2v-4l3.5-2,3.5,2ZM20,10.14l-3.5,2-3.5-2v-4l3.5-2,3.5,2Z"
              ></path></svg
            ><span >Skills<span class="hightlight-text-underline-navs"></span></span></a
          >
        </li>
         <li>
          <a href="javascript:;"
            ><svg width="23" height="23" fill="url(#grad1)">
              <path
                d="M22.78,10.37A1,1,0,0,0,22,10H20V9a3,3,0,0,0-3-3H10.72l-.32-1A3,3,0,0,0,7.56,3H4A3,3,0,0,0,1,6V18a3,3,0,0,0,3,3H18.4a3,3,0,0,0,2.92-2.35L23,11.22A1,1,0,0,0,22.78,10.37ZM5.37,18.22a1,1,0,0,1-1,.78H4a1,1,0,0,1-1-1V6A1,1,0,0,1,4,5H7.56a1,1,0,0,1,1,.68l.54,1.64A1,1,0,0,0,10,8h7a1,1,0,0,1,1,1v1H8a1,1,0,0,0-1,.78Zm14,0a1,1,0,0,1-1,.78H7.21a1.42,1.42,0,0,0,.11-.35L8.8,12h12Z"
              ></path></svg
            ><span >Projects<span class="hightlight-text-underline-navs"></span></span></a
          >
        </li>
        <li class="social-container-nav">
          <div class="social-icon-nav" >
            <a href="https://github.com/0racularGh0st" target="_blank" rel="noopener noreferrer" aria-label="Github" >          
              <svg width="24" height="24" fill="#cee8f5"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg>
              </a>
        </div>
        <div class="social-icon-nav" aria-label="Linkedin">
            <a href="https://www.linkedin.com/in/nigel-david-tariang-476834118/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                        <svg  width="24" height="24" fill="#cee8f5"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg>
            </a>
        </div>
        <div class="social-icon-nav" aria-label="Email">
            <a href="mailto:nigel4tariang@gmail.com" aria-label="Email">
                            <svg  width="24" height="24" fill="#cee8f5"><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4ZM5,6H19a1,1,0,0,1,1,1l-8,4.88L4,7A1,1,0,0,1,5,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9.28l7.48,4.57a1,1,0,0,0,1,0L20,9.28Z"></path></svg>
            </a>
        </div>
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
  methods: {
    smoothScroll: function(target,duration){
      target = document.querySelector(target);
      var targetPosition = target.getBoundingClientRect().top + window.pageYOffset -64;
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var startTime = null;

      function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
      }
      function ease(t, b, c, d){
        t /= d/2;
        if(t<1) return c / 2 * t * t +b;
        t--;
        return -c / 2 * (t * (t-2) - 1) +b;

      }
      requestAnimationFrame(animation);
    }
  }
};
</script>
<style lang="scss">
.container {
  width: max-content;
  max-width: 46px;
}
.social-container-nav{
    display: flex;
    margin-left: auto !important;
    margin-right: auto !important;
    border-top: 1px solid #534b4b;
    padding-top: 0.5rem;
}
.social-icon-nav{
  margin: 0.25rem 0.5rem;
  svg{
    transform: scale(1) !important;
  }
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
  .social-container-nav{
    display: none;
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

.nav-links svg {
  height: 23px;
  width: 23px;
  margin-right: 2px;
  margin-bottom: 3px;
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
  .nav-links svg {
  height: 23px;
  width: 23px;
  margin-right: 2px;
  margin-bottom: 3px;
  transform: scale(0.65);
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
    height: 230px;
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
  .nav-links svg {
  height: 23px;
  width: 23px;
  margin-right: 2px;
  margin-bottom: 5px;
  transform: scale(0.65);
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