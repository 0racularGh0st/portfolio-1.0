<template>
    <div class="outer-skill-card-wrapper">
    <div class="skill-card-wrapper">
        <img v-bind:src="require(`@/${imgSrc}`)" v-bind:aria-label="imgLabel" v-bind:alt="imgLabel" v-bind:height="imgHeight" v-bind:class="imgClass"/>
        <p class="text">{{imgLabel}}</p>
    </div>
    </div>
</template>
<script>
export default {
    props: ['imgSrc','imgLabel','imgHeight','imgClass']
}
</script>
<style lang="scss" scoped>
.outer-skill-card-wrapper{
    display: inline-block;
}
.skill-card-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    justify-content: space-between;
    border: 1px solid #cee8f5;
    width: 90px;
    box-shadow: 0px 7px 14px -1px #3d5d86;
    margin: 0.5rem 0.25rem;
}
.skill-card-wrapper{
    p{
        margin-bottom: 0;
        margin-top: 5px;
        background: #cee8f5;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        padding: 5px;
        font-size: 12px;
        position: relative;
        width: 80px;
        text-align: center;
    }
    .text{
        color:black;
        font-weight: bolder;
    }
    img{
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
   
}
 .expressjs{
    background: #cee8f5;
    border-radius: 5px;
}
</style>