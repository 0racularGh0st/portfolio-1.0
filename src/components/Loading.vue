<template>
<div class="loading-container">
  <div class="loading">
        <div class="bars"></div>
        <div class="bars"></div>
        <div class="bars"></div>
        <div class="bars"></div>
        <div class="bars"></div>
        <div class="bars"></div>
        <div class="bars"></div>
        <div class="bars"></div>
    </div>
</div>
</template>

<style scoped>
body {
    margin: 0;
    padding: 0;
    background-color: #00b0a6;
}
.loading-container{
    position: relative;
    height: 100vh;
    width: 100vw;
}
.loading {
    position: absolute;
    height: 50px;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    transform: translate(-50%, -50%)
}

.bars {
   height: 50px;
    width: 5px;
    margin: 0 4px;
    border-radius: 10px;
    background: linear-gradient(to bottom, rgb(118 172 218) 0%,rgb(181 200 255) 50%,rgb(0 0 0) 100%);
    -webkit-animation: loading 0.8s infinite;
    animation: loading 0.8s infinite;
    box-shadow: 0px -6px 20px 2px #85f9f7;

}

.bars:nth-child(2) {
    animation-delay: 0.1s;
}
.bars:nth-child(3) {
    animation-delay: 0.2s;
}
.bars:nth-child(4) {
    animation-delay: 0.3s;
}
.bars:nth-child(5) {
    animation-delay: 0.4s;
}
.bars:nth-child(6) {
    animation-delay: 0.5s;
}
.bars:nth-child(7) {
    animation-delay: 0.6s;
}
.bars:nth-child(8) {
    animation-delay: 0.7s;
}
@keyframes loading {
    0% {
        height: 0;
    }
    50% {
        height: 50px;
    }
    100%{
        height: 0;
    }
}
</style>