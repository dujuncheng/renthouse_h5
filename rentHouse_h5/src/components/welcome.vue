<template>
  <div class="welcome-container">
    <transition name="fade">
      <div class="groupfade" v-show="scrollY < 6640">
        <div class="title-container">
          <h1 class="title1" :style="title1">说到租房，北京的年轻人都哭了</h1>
          <p  class="title2" :style="title2">我们爬了两万条数据，用数据给你最精确的北京租房素描</p>
        </div>
        <div class="block-container" :style="blockstyle">
          <div class="block1-container">
            <div class="block1" :style="block1">
              <div class="block1-text" :style="block1text">
                <p>In these groups, </p>
                <p>there are construction workers, nail divisions, programmers, waste recyclers,</p>
                <p>most of them, are rented in this city</p>
              </div>
            </div>
          </div>
          <div class="block2-container">
            <div class="block2" :style="block2">
              <div class="block2-text" :style="block2text">
                <p>在这些人群中，有建筑工、美甲师、程序员、大学生、废品回收者，</p>
                <p>也有银行职员和美国摄影师。</p>
                <p>他们中的大多数,</p>
                <p>都在这个城市租房</p>
              </div>
            </div>
          </div>
          <div class="block3-container">
            <div class="block3">
              <div class="block3-text" :style="block3text">
                <p>每天，</p>
                <p>平均有2100人拖着行李箱，抵达北京西站、</p>
                <p>首都国际机场、长途汽车站…</p>
                <p>涌入这个时而令人狂喜沸腾，</p>
                <p>时而令人焦躁失望的地方</p>
              </div>
            </div>
          </div>
          <div class="block4-container">
            <div class="block4" :style="block4">
              <div class="block4-text" :style="block4text">
                <p>2100 people on average are dragging their suitcases eveyday, </p>
                <p>shortly after they arrive at Beijing West Railway Station, </p>
                <p>Capital International Airport, coach stations and so on.</p>
                <p>Pouring into the city where people are either ravished with joy or hanging their heads in despair.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="bgimg-container" v-show="scrollY > 6640" :style="blockstyle">
        <div class="bgimg">
        </div>
      </div>
    </transition>
    <div class="last-text">
      <h1 class="last-text-title" :style="lasttext" >北京租房素描</h1>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['scrollY'],
    computed:{
      lasttext () {
        if (this.scrollY > 7500) {
          return { opacity: (this.scrollY-7500) /1500}
        } else {
          return { opacity: '0'}
        }
      },
      title1 () {
        if ( this.scrollY > 100 ) {
          return { transform: 'translateX( -' + (this.scrollY - 100)/2 +'px )'}
        } else {
          return {}
        }
      },
      title2 () {
        if ( this.scrollY > 350 ) {
          return { transform: 'translateX( -' + (this.scrollY - 350)/3 +'px )'}
        } else {
          return {}
        }
      },
      blockstyle () {
        if ((500 - this.scrollY-12)/3 > -156 && this.scrollY > 500) {
          return { transform:'translate(' + (500 - this.scrollY-12)/3 +'vw, -171vw) rotate(25deg) ' }
        } else if ((500 - this.scrollY-12)/3 < -156 ) {
          return { transform:'translate( -156vw, -171vw) rotate(25deg) ' }
        } else if (this.scrollY > 8500) {
          return { transform: 'translate(-156vw,-171vw) rotate(25deg)'}
        } else {
          return { transform: 'translate(-12vw,-171vw) rotate(25deg)'}
        }
      },
      block1 () {
        if (this.scrollY > 4000) {
          return { width: (this.scrollY-4000) /100 + '%',opacity: (this.scrollY-4000) /1000}
        } else {
          return { width: '0%'}
        }
      },
      block1text () {
        if (this.scrollY > 5500) {
          return { opacity: (this.scrollY-5500) /1500}
        } else {
          return { opacity: '0'}
        }
      },
      block2 () {
        if (this.scrollY > 3068) {
          return { height: (this.scrollY-3068) /100 + '%',opacity: (this.scrollY-3068) /1000}
        } else {
          return { height: '0%'}
        }
      },
      block2text () {
        if (this.scrollY > 3650) {
          return { opacity: (this.scrollY-3650) /1500}
        } else {
          return { opacity: '0'}
        }
      },
      block4 () {
        if (this.scrollY > 2000) {
          return { width: (this.scrollY-2000) /100 + '%',opacity: (this.scrollY-1752) /1000}
        } else {
          return { width: '0%'}
        }
      },
      block3text () {
        if (this.scrollY > 1752) {
            return { opacity: (this.scrollY-1752) /1500}
        } else {
            return { opacity: '0'}
        }
      },
      block4text () {
        if (this.scrollY > 2361) {
          return { opacity: (this.scrollY-2361) /1500}
        } else {
          return { opacity: '0'}
        }
      }
    },
    methods: {

    },
    mounted () {
    },
    watch: {
      scrollY: function() {
        if (this.scrollY >= 8500 ){
          $('.bgimg-container').css('position','absolute');
          $('.bgimg-container').css('top', '8500px');
          $('.last-text').css('position','absolute');
          $('.last-text').css('top', (8500+ window.innerHeight/2) +'px');
        } else {
          $('.bgimg-container').css('position','fixed');
          $('.bgimg-container').css('top', '0px');
          $('.last-text').css('position','fixed');
          $('.last-text').css('top', '50%');
        }
      }
    }
  }
</script>

<style scoped>

  .last-text{
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 10;
  }
  .last-text-title{
    color: white;
    font-size: 60px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
 .welcome-container{
   height: 9400px;
   background-color: whitesmoke;
 }
 .title-container{
   position: fixed;
   top: 50%;
   left: 10%;
   transform: translate(0,-50%);
   z-index: 6;
 }
 .block-container{
   width: 400vw;
   height: 400vw;
   display: flex;
   position: fixed;
   flex-wrap: wrap;
   z-index: 4;
   background-color: rgb(255,197,132);
 }
  .block1-container{
    width: 200vw;
    height: 200vw;
    z-index: 4;
    padding: 90px;
    padding-right: 10px;
    box-sizing: border-box;
    position: relative;
  }
  .block1{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.2);
    text-align: right;
    bottom: 112px;
    right: 33px;
  }
  .block1-text{
    position: absolute;
    right: 0;
    bottom: 0;
    padding:20px;
    color: white;
    font-size: 16px;
  }


   .block2-container{
     width: 200vw;
     height: 200vw;
     z-index: 4;
     padding: 10px;
     padding-bottom: 90px;
     box-sizing: border-box;
     position: relative;
   }
   .block2{
     background-color: rgba(0,0,0,0.4);
     width: 100%;
     height: 100%;
     position: absolute;
     left: 48px;
     bottom: 120px;
   }
   .block2-text{
     position: absolute;
     left:0;
     bottom: 0;
     padding: 20px;
     box-sizing: border-box;
     color: white;
   }
   .block3-container{
     width: 200vw;
     height: 200vw;
     z-index: 4;
     padding:20px;
     box-sizing: border-box;
   }
   .block3{
     width: 100%;
     height: 100%;
     background-color: whitesmoke;
     position: relative;
   }

   .block3-text{
     position: absolute;
     top: 0;
     right: 0;
     padding:20px;
     width: 400px;
     text-align: right;
   }
   .block4-container{
     width: 200vw;
     height: 200vw;
     z-index: 4;
     padding:60px;
     padding-top: 20px;
     box-sizing: border-box;
   }
   .block4{
     background-color: rgba(0,0,0,0.8);;
     width: 100%;
     height: 100%;
     position: relative;
   }
   .block4-text{
     width: 400px;
     padding: 20px;
     color: white;
     text-align: left;
     position: absolute;
     left: 0;
     top: 0;
     font-size: 16px;
   }
   .bgimg-container{
     width: 400vw;
     height: 400vw;
     position: fixed;
     z-index: 1;
   }
   .bgimg{
     height: 100%;
     width: 100%;
     transform: scale(0.5) rotate(-50deg);
     background-image: url("/static/image/4.jpg");
     background-repeat: no-repeat;
     background-position: 83% 59%;
     background-size: 80%;
   }
</style>