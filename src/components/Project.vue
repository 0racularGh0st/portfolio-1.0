<template>
  <div :class="place==='left'?'main-project-container': 'main-project-container right'">
    <div :class="place==='left'?'project-name':'project-name right'">
        <h2>{{ config.name }}</h2>
        </div>
    <div :class="place==='left'?'project-content':'project-content right'">
    <div :class="place==='left'?'project-image-container':'project-image-container right'">
      <a :href="config.website" target="_blank" rel="noopener noreferrer" aria-label="Website">
          <img
        v-bind:src="require(`@/${imgSrc}`)"
        class="project-image"
        height="600"
        width="600"
        :alt="config.name"
      />
      </a>
    </div>
      <div :class="place==='left'?'main-contents':'main-contents right'">
      <div class="project-desc">
        <p>{{ config.description }}</p>
      </div>
      <div class="project-tags">
            <div class="project-tag" v-for="(tag,index) in config.tags" v-bind:key="tag">
                <p >{{tag}}{{index!==config.tags.length - 1? '&nbsp;|&nbsp;' : ''}}</p>
            </div>
      </div>
       <div :class="place==='left'?'buttons':'buttons right'">
           <div class="button-wrapper left">
          <a :href="config.github" target="_blank" rel="noopener noreferrer" aria-label="Github">
          <div class="button-content">
            <h3><svg width="24" height="24" fill="#cee8f5"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg>
            View Code</h3></div>
          </a>
        </div>
        <div class="button-wrapper">
          <a :href="config.website" target="_blank" rel="noopener noreferrer" aria-label="Website">
          <div class="button-content goto"><h3>
          <svg width="20" height="20" fill="#cee8f5" role="img" viewBox="0 0 194.818 194.818"><title>External</title><g><path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path><path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path></g></svg>                
          Demo</h3></div>
          </a>
        </div>
       </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["imgSrc", "config","place"],
};
</script>
<style lang="scss" scoped>

.main-project-container {
  position: relative;
  margin-bottom: 5rem;
  

  &.right{
      text-align: right;
  }
}
.buttons{
    display: flex;
    margin-top: 1rem;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    pointer-events: auto;
    &.right{
        justify-content: flex-end;
    }
}
.button-wrapper{
    display: flex;
    justify-content: center;
    text-decoration: none;
    a{
      text-decoration: none;
    }
    &.left{
        margin-right: 1rem;
    }
}
.button-content{
    padding: 1px;
    background-color: black;
    color: #cee8f5;
    border: none;
    position: relative;
    z-index: 0;
    border-radius: 5px;
    transition: background 1s ease;
    &::before{
      content: "";
    position: absolute;
    padding: 11px 9px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
    transition: background 1s ease;
    background: linear-gradient(45deg, #3e6ead 0%, #6ae4e6 50%, transparent 100%);
    }
  h3{
    display: flex;
    align-items: center;
    margin: 0;
    background: rgba(0, 0, 0, 1);
    padding: 6px 8px;
    border-radius: 5px;
    transition: background 1s ease;
    font-size: 14px;
    letter-spacing: 1px;

    svg {
        margin-right: 0.5rem;
    }
  }
  &.goto{
      h3{
           padding: 8px 8px;
      }
  }
}
.button-content:hover{
   background: linear-gradient(45deg, #3e6ead 0%, #6ae4e6 50%, transparent 100%);
  &::before{
    background: linear-gradient(-45deg, #3e6ead 0%, #6ae4e6 50%, transparent 100%);
    }
  h3{
    background: rgba(0, 0, 0, 0.85);
  }
}
.project-image-container {
    position: absolute;
    z-index: -1;
    font-size: 0;
    &::before {
    content: "";
    z-index: 2;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgb(2 21 31);
    opacity: 0.5;
    border-radius: 5px;
    transition: all 0.5s ease .5s;
  }
}
.project-name {
      h2{
          font-weight: 900;
          color: white;
      }
      &.right{
          text-align: right;
      }
  }
.project-image {
    width: 100%;
    height: 100%;
    position: relative;
    background: aliceblue;
    z-index: 1;
    opacity: 0.5;
    border-radius: 5px;
}
.project-content {
  z-index: 3;
  position: relative;
  top: 0;
  max-width: 400px;
  @media screen and (max-width:767px) {
      &.right{
      margin-left: auto;
  }
  }
  
  .project-desc {
      color: white;
      margin: 0 0.75rem;
    background: rgba(0, 0, 0, 0.65);
    padding: 0 1rem;
    border-radius: 5px;
    box-shadow: 0 10px 30px -15px black;
  }
  .project-tags{
      margin: 0 0.75rem;
      pointer-events: auto;
  }
  .project-tag{
      display: inline-block;
      p{
          margin-bottom: 0;
          color: #6ae4e6;
      }
  }
}

@media screen and (min-width: 48rem) {
  .main-project-container {
     position: relative;
     margin-bottom: 7.5rem;
  }
  .project-image-container {
    position: relative;
    max-width: 50%;
    margin-left: auto;
    min-width: 500px;
    transition: all 0.1s ease;
    box-shadow: none;
    
    &:hover{
        z-index: 4;
        box-shadow: -20px 0px 30px 0px #0a1019;
        border-radius: 5px;
        .project-image {
            opacity: 1;
        }
        &::before{
            content: unset;
        }
    }
    &.right{
        margin-right: auto;
        margin-left: unset;
        &:hover{
        z-index: 4;
        box-shadow: 20px 0px 30px 0px #0a1019;
        border-radius: 5px;
        .project-image {
            opacity: 1;
        }
        &::before{
            content: unset;
        }
    }
    }
  }
  .project-image {
    width: 100%;
    height: unset;
    transition: all 0.5s ease .1s;
  }
  .project-content {
    max-width: unset;
    position: relative;
    perspective: 600px;
    &.right{
        margin-right: 0;
    }
    .main-contents{
    position: absolute;
    top: 0;
    z-index: 3;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 80%;
    pointer-events: none;
    &.right{
        align-items: flex-end;
        right: 0;
    }
    }
  .project-desc {
    margin: 0 0.75rem;
    background: rgba(0, 0, 0, 0.65);
    padding: 0 1rem;
    border-radius: 5px;
    box-shadow: 0 10px 30px -15px black;
    pointer-events: auto;
  }
  }
}
</style>