<template>
<div class="loading-container">
    <img src="../assets/mylogo.png" class="logo"/>
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
.logo{
    height: 125px;
    width: 125px;
}
.loading-container{
  position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    vertical-align: middle;
    top: 50%;
    left: 50%;
    transform: translate(-43%, -79%);
}
.loading {
   height: 50px;
    display: flex;
    align-items: center;
}

.bars {
   height: 50px;
    width: 3px;
    margin: 0 3.5px;
    border-radius: 10px;
    background: linear-gradient(to bottom, rgb(58 102 167) 0%,rgb(108 228 231) 100%);
    -webkit-animation: loading 0.8s infinite;
    animation: loading 0.8s infinite;
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