<template>
    <div class="outer-skill-card-wrapper">
    <div v-bind:class="textPos === 'up'? 'skill-card-wrapper up': 'skill-card-wrapper down'">
        <img v-bind:src="require(`@/${imgSrc}`)" v-bind:aria-label="imgLabel" v-bind:alt="imgLabel" v-bind:height="imgHeight" v-bind:class="imgClass" v-bind:width="imgWidth"/>
        <p class="text">{{imgLabel}}</p>
    </div>
    </div>
</template>
<script>
export default {
    props: ['imgSrc','imgLabel','imgHeight','imgClass','imgWidth','textPos']
}
</script>
<style lang="scss" scoped>
.outer-skill-card-wrapper{
   display: inline-block;
   position: relative;
}
.skill-card-wrapper{
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 40px 8px;
}
.skill-card-wrapper{
    .text{
        color:black;
        font-weight: bolder;
    }
    &.up{
       p{
        font-family: "Work Sans-Bold";
        background: #cee8f5;
        font-size: 10px;
        position: relative;
        width: max-content;
        padding: 0px 4px;
        border-radius: 4px;
        position: absolute;
        transform: translate3d(0px,-40px,0px);
        margin-top: 0;
        opacity: 0;
        &::before{
                    content: "";
                    position: absolute;
                    width: 10px;
                    background: #cee8f5;
                    height: 10px;
                    z-index: -5;
                    transform: rotate(45deg) translate3d(-70%, 0px, 0px);
                    left: 50%;
                    top: 90%;
        }
        }
        
    }
    &.down{
         p{
        font-family: "Work Sans-Bold";
        background: #cee8f5;
        font-size: 10px;
        position: relative;
        width: max-content;
        padding: 0px 4px;
        border-radius: 4px;
        position: absolute;
        transform: translate3d(0px,40px,0px);
        margin-bottom: 0;
        margin-top: 2em;
        opacity: 0;
        &::before{
               content: "";
                position: absolute;
                width: 10px;
                background: #cee8f5;
                height: 10px;
                z-index: -5;
                transform: rotate(45deg) translate3d(-70%, 0px, 0px);
                left: 50%;
                top: 10%;
        }
        }
        
    }
    img{
    
    }
   
}
 .expressjs{
    background: #cee8f5;
    border-radius: 5px;
}
</style>