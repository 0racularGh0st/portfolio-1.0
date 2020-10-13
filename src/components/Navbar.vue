<template>
    <div class="navstyle">
        <nav class="nav">
            <div class="mylogo">
                <img src="../assets/mylogomain.jpg" />
            </div>
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
const navSlide = () => {
            const burger = document.querySelector('.burger');
            const nav = document.querySelector('.nav-links');
            const navLinks = document.querySelectorAll('.nav-links li');
           
            burger.addEventListener('click',()=>{
                nav.classList.toggle('nav-active');
                 navLinks.forEach((link,index)=>{
                if(link.style.animation){
                    link.style.animation = '';
                }
                else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 +.3}s`;

                }
            });
            //burger animation
            burger.classList.toggle('toggle');
            });
             navLinks.forEach((link)=>{
                link.addEventListener('click',()=>{
                    burger.click();
                });
            });
           
        }
const dropShadow = () =>{
    window.addEventListener('scroll',()=>{
            const nav = document.querySelector('nav');
           // console.log("scrolled", window.pageYOffset);
            if(window.pageYOffset>10){
                nav.classList.add('nav-drop-shadow');
            }
            else{
                nav.classList.remove('nav-drop-shadow');
            }
        });
    }
export default {
    mounted(){
        navSlide();
        dropShadow();
}
}
</script>
<style >

.navstyle{
    position: absolute;
    top: 0;
    left: 0;
}
.nav{
    position: fixed;
    width: 100vw;
    height: 64px;
    display: flex;
    justify-content: space-between;
    font-family: 'Comfortaa', cursive;
    text-transform: uppercase;
    align-items: center;
    background: rgba(0,0,0,0.9);
    transition: box-shadow .3s ease;

}
.nav-drop-shadow{
    box-shadow: 0px 4px 13px 1px rgb(36,54,66,0.4);
}
.nav-links{
    display: flex;
    justify-content: space-around;
    width: 45%;
}
.nav-links li{
    list-style: none;
}
.nav-links a{
    color: #cee8f5;
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 10px;
}
@media (min-width: 320px){
    .nav{
        width: 100vw;
        height: 64px;
        background: rgba(0,0,0,0.9);
         transition: box-shadow .3s ease;
    }
}
.mylogo > img{
    margin: 1rem;
    margin-top: 1.2rem;
    height: 42px;
    background: radial-gradient(circle, rgb(27 69 95) 0%, rgb(11 21 33) 52%, transparent 100%);
    border-radius: 50%;
    box-shadow:0 0 17px 2px rgb(92,129,154,0.5);
}
.burger{
    display: none;
}
.burger div{
    width: 25px;
    height: 3px;
    background-color: #cee8f5;
    margin: 5px;
    border-radius: 10px;
    transition: all 0.5s ease;
}
@media screen and (max-width:768px){
    body{
        overflow-x: hidden;
    }
    .nav-links{
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
        background: linear-gradient(240deg,rgb(11 18 27) 0%, rgb(5 8 12) 52%, transparent 100%);
        border-bottom-left-radius: 75%;
        box-shadow: -2px 2px 4px 2px rgba(0,0,0,0.5);
    }
    .nav-links li{
         opacity: 0; 
         transition: all 0.5s ease;
    }
    .burger{
        display: block;
        cursor: pointer;
        margin-right: 8px;
        background: rgba(0,0,0,0.5);
    }
  .nav-active{
    transform: translateX(0%);
    }
    @keyframes navLinkFade {
       from{
           opacity: 0;
           transform: translateX(50px);
       } 
       to{
           opacity: 1;
           transform: translateX(0px);
       }
    }

    .toggle .line1{
        transform: rotate(-45deg) translate(-5px,6px);
    }
    .toggle .line2{
        opacity: 0;
        transform: translateX(100%);
    }
    .toggle .line3{
        transform: rotate(45deg) translate(-5px,-6px);
    }
}
  

</style>