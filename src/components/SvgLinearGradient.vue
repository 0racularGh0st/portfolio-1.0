<template>
     <svg
              id="hexagon"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <linearGradient id="main-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
</template>
<style scoped>
.svg-linear-gradient{
    display: none;
}
</style>