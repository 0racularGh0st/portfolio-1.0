<template>
  <div
    id="the-background"
    class="the-background"
    v-bind:style="backgroundHeight"
  >
    <div class="starsandtwinkle">
      <div class="still-stars">
        <div class="twinkling"></div>
      </div>
    </div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <Particles
      v-if="particle_ready"
      id="tsparticles"
      class="tsparticles tsparticles-show"
      :options="{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 40,
        interactivity: {
          detectsOn: 'window',
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: particle_hover,
              mode: 'grab',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            grab: {
              distance: 150,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: 'rgb(106, 228, 230)',
            distance: particle_link_distance,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: false,
              value_area: 0,
            },
            value: no_of_particles,
          },
          opacity: {
            value: 0.4,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 4,
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1,
            },
          },
        },
        detectRetina: false,
      }"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      moon: "",
      background: "",
      viewportDiff: "",
      particle_ready: false,
      particle_link_distance: 80,
      no_of_particles:20,
      particle_hover: false
    };
  },
  computed: {
    backgroundHeight: function () {
      return {
        height: "calc(100vh + " + this.viewportDiff + "px)",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        position: "fixed",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        background: "inherit",
      };
    },
  },
  mounted() {
    this.viewportDiff =
      document.documentElement.clientHeight - window.innerHeight;
    this.particle_link_distance = window.innerWidth>1024? 110: 80;
    this.no_of_particles= window.innerWidth > 1024? 30: 20;
    this.particle_hover= window.innerWidth > 1024? false: false;
    setTimeout(()=>{
      this.particle_ready = true;
    },1500);
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  background: black;
}

@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}
.still-stars,
.twinkling,
.starsandtwinkle {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.webp .still-stars {
  background: url(../assets/stars.webp) repeat top center #000;
  background-repeat: repeat;
  z-index: 0;
}
.no-webp .still-stars {
  background: url(../assets/stars.jpg) repeat top center #000;
  background-repeat: repeat;
  z-index: 0;
}
.webp .twinkling {
  background: url(../assets/twinkling.webp) repeat top center transparent;
  z-index: 1;
  animation: move-twink-back 200s linear infinite;
}
.no-webp .twinkling {
  background: url(../assets/twinkling.jpg) repeat top center transparent;
  z-index: 1;
  animation: move-twink-back 200s linear infinite;
}
.star {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 2px;
  background: linear-gradient(-45deg, #cbcbcb, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 6px #699bff);
  animation: tail 3000ms ease-in-out, shooting 3000ms ease-in-out;
}

.star::before,
.star::after {
  z-index: 4;
  position: absolute;
  content: "";
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(
    -45deg,
    rgba(0, 0, 255, 0),
    #cbcbcb,
    rgba(0, 0, 255, 0)
  );
  border-radius: 100%;
  transform: translate3d(50%,0,0) rotateZ(-45deg);
  animation: shining 3000ms ease-in-out;
}

.star::after {
  transform: translate3d(50%,0,0) rotateZ(45deg);
}

.star:nth-child(5) {
  z-index: 4;
  opacity: 0.5;
  top: calc(31%);
  left: calc(86% - 300px);
  animation-delay: 2s;
  animation-iteration-count: 1;
}
.star:nth-child(5)::before,
.star:nth-child(5)::after {
  animation-delay: 2s;
  animation-iteration-count: 1;
}

.star:nth-child(6) {
  z-index: 4;
  opacity: 0.5;
  top: calc(41% - -50px);
  left: calc(50% - 190px);
  animation-delay: 5s;
  animation-iteration-count: 1;
}
.star:nth-child(6)::before,
.star:nth-child(6)::after {
  animation-delay: 5s;
  animation-iteration-count: 1;
}

.star:nth-child(7) {
  z-index: 4;
  opacity: 0.5;
  top: calc(34%);
  left: calc(71%);
  animation-delay: 9s;
  animation-iteration-count: 1;
}
.star:nth-child(7)::before,
.star:nth-child(7)::after {
  animation-delay: 9s;
  animation-iteration-count: 1;
}

.star:nth-child(4) {
  z-index: 4;
  opacity: 0.5;
  top: calc(50% - 50px);
  left: calc(50% - 250px);
  animation-delay: 13s;
  animation-iteration-count: 1;
}
.star:nth-child(4)::before,
.star:nth-child(4)::after {
  animation-delay: 13s;
  animation-iteration-count: 1;
}

.star:nth-child(8) {
  z-index: 4;
  opacity: 0.5;
  top: calc(-5% - -190px);
  left: calc(74% - 200px);
  animation-delay: 17s;
  animation-iteration-count: 1;
}
.star:nth-child(8)::before,
.star:nth-child(8)::after {
  animation-delay: 17s;
  animation-iteration-count: 1;
}

/* Animations */
@keyframes tail {
  0% {
    width: 0;
  }

  30% {
    width: 80px;
  }

  100% {
    width: 0;
  }
}

@keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 20px;
  }
  100% {
    width: 0;
  }
}

@keyframes shooting {
  0% {
    transform: translate3d(0,0,0) rotate(-15deg);
  }
  100% {
    transform: translate3d(320px,-65px,0px) rotate(-15deg);
  }
}
#tsparticles {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: block;
  position: absolute;
  z-index: 5;
  
}
.tsparticles{
  opacity: 0;
  transition: opacity 1s ease;
  transition-delay: 0.5;
}
.tsparticles-show{
  opacity: 0.7;
}
</style>
