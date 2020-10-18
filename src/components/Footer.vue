<template>
    <div class="footer">
        <div>Designed and Built</div><div> by </div><div class="name">Nigel David Tariang</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
.footer{
        position: relative;
    text-align: center;
    color: #cee8f5;
    font-family: 'Comfortaa';
    font-size: 10px;
    line-height: 1rem;
    margin-bottom: 2rem;
}
.name{
    font-size: 12px;
    background: linear-gradient(90deg, rgb(62, 110, 173) 0%,rgb(106, 228, 230) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: fit-content;
    display: flex;
    margin: 0 auto;
}
</style>