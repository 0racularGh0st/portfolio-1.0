<template>
    <div class="skill-card-wrapper">
        <img :src="src" :aria-label="label" :alt="label"/>
        <p>{{label}}</p>
    </div>
</template>
<script>
export default {
    props: [src,label]
}
</script>
<style lang="scss" scoped>
.skill-card-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>