<template>
  <div class="main-project-container">
    <div class="project-image-container">
      <img
        v-bind:src="require(`@/${imgSrc}`)"
        class="project-image"
        height="600"
        width="600"
      />
    </div>
    <div class="project-content">
      <div class="project-name">
        <h2>{{ config.name }}</h2>
      </div>
      <div class="project-desc">
        <p>{{ config.description }}</p>
      </div>
      <div class="project-tags">
            <div class="project-tag" v-for="(tag,index) in config.tags" v-bind:key="tag">
                <p >{{tag}}{{index!==config.tags.length - 1? '&nbsp;|&nbsp;' : ''}}</p>
            </div>
              
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["imgSrc", "config"],
};
</script>
<style lang="scss" scoped>

.main-project-container {
  position: relative;
}
.project-image-container {
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
  position: absolute;
  top: 0;
  margin-left: 1rem;
  .project-name {
      h2{
          font-weight: 900;
          text-transform: uppercase;
          color: white;
      }
  }
  .project-desc {
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
  }
  .project-image-container {
  }
  .project-image {
    width: 100%;
    height: unset;
  }
  .project-content {
    .project-name {
    }
    .project-desc {
    }
  }
}
</style>