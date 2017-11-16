<template>
  <div class="container" :class="'container' + index ">
    <div class="bgimg" :style="imgStyle">
      <div class="title" :class="'title' + index" :style="titleLeave">
        <p class="content">{{content}}</p>
        <p class="content_en">{{content_en}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['bgimg', 'content', 'content_en', 'index', 'leaveTitleIndex', 'leaveTitleTop', 'scrollY'],
    data () {
      return {
        container: []
      }
    },
    computed: {
      titleLeave () {
        if (this.index + '' === this.leaveTitleIndex + '') {
          return { opacity: this.leaveTitleTop / (window.innerHeight / 2), transform: 'translateY(' + (-10000) / this.leaveTitleTop + 'px)' }
        } else {
          return { opacity: '1' }
        }
      },
      imgStyle () {
        return { backgroundPosition: '50% ' + this.scrollY * 100 / document.body.offsetHeight + '%', backgroundImage: 'url(' + this.bgimg + ')', backgroundSize: 'auto 140vh' }
      }
    }
  }
</script>

<style scoped>
  .container{
    height: 100vh;
  }
  .bgimg{
    height: 100vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 40px 0px 40px;
  }
  .title{
    font-size: 18px;
    color: ghostwhite;
    background-color: rgba(0, 0, 0, 0.7);
    width: 60%;
    text-align: left;
    padding:0px 40px;
  }
  .content_en{
    font-size: 12px;
  }
</style>
