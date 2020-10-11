<template>
    <div class="navstyle">
        <nav class="nav">
            <div class="mylogo">
                <img src="../assets/mylogomain.jpg" />
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
.navstyle{
    position: absolute;
    top: 0;
    left: 0;
}
.nav{
    position: fixed;
    width: 100vw;
    height: 50px;
}
@media (min-width: 320px){
    .nav{
        width: 100vw;
        height: 50px;
    }
}
.mylogo > img{
    margin: 0.7rem;
    height: 50px;
    background: radial-gradient(circle, rgb(27 69 95) 0%, rgb(11 21 33) 52%, transparent 100%);
    border-radius: 50%;
    box-shadow: 0 0 17px 2px #4c5860;
}
</style>