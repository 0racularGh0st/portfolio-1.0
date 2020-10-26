<template>
    <div class="outer-skill-card-wrapper">
    <div class="skill-card-wrapper">
        <img v-bind:src="require(`@/${imgSrc}`)" v-bind:aria-label="imgLabel" v-bind:alt="imgLabel" v-bind:height="imgHeight" v-bind:class="imgClass" v-bind:width="imgWidth"/>
        <p class="text">{{imgLabel}}</p>
    </div>
    </div>
</template>
<script>
export default {
    props: ['imgSrc','imgLabel','imgHeight','imgClass','imgWidth']
}
</script>
<style lang="scss" scoped>
.outer-skill-card-wrapper{
    display: inline-block;
    opacity: 0.9;
}
.skill-card-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    justify-content: space-between;
    border: 1px solid #cee8f5;
    width: 96px;
    box-shadow: 0px 7px 14px -1px #3d5d86;
    margin: 0.5rem 0.25rem;
}
.skill-card-wrapper{
    p{
    font-family: 'Work Sans-Bold';
    margin-bottom: -1px;
    margin-top: 5px;
    background: #cee8f5;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 8px;
    font-size: 12px;
    position: relative;
    width: 82px;
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