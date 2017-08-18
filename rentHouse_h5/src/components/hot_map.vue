<template>
  <div class="hot_map_container" @mouseenter="hover()" @mouseleave="leave()" @click="toggle()">
   <transition name="fade">
     <div class="cover" v-if="!isScale"></div>
   </transition>
    <div class="jietu-container"></div>
    <div id="hotmapapp" style="width:100%;height: 600px"></div>
    <transition name="fadeslide">
      <div class="text-container" v-if="false">
        <yinhao></yinhao>
        <p class="text">热力图上颜色越红的区域表示租金越高，越蓝表示租金越低。我们可以发现距离天安门最近的东城区和西城区租金最高，住在这里的年轻人们平均每月要花4150元才能租一个房间。海淀区和朝阳区也不例外，月租金平均约为3400元。而离市中心越远，租金相应会变得越少。这意味着人们的通勤时间会大大增加，每天要花2-3个小时在地铁上打瞌睡。</p>
        <p class="text">Different colors on the heat map stand for rent varies from area to area. The redder, the higher; the bluer, the lower. We can see that Dongcheng and Xicheng Dictrict, the two districts nearest to Tiananmen Square, are the highest ones. Those who choose to live in both distrcts need to spend ￥4150 for one room every month. With￥3400 per month, Haidian and Chaoyang District are just as expected. Generally speaking, the farther away from downtown, the lower the rent. As a result, commuting time of those who live in suburbs is significantly longer than those who don't, dozing 2 to 3 hours on the subway every day.</p>
      </div>
    </transition>
    <div class="bottom-text-container">
      <div class="bottom-text">
        <yinhao></yinhao>
        <p class="text">热力图上颜色越红的区域表示租金越高，越蓝表示租金越低。我们可以发现距离天安门最近的东城区和西城区租金最高，住在这里的年轻人们平均每月要花4150元才能租一个房间。海淀区和朝阳区也不例外，月租金平均约为3400元。而离市中心越远，租金相应会变得越少。这意味着人们的通勤时间会大大增加，每天要花2-3个小时在地铁上打瞌睡。</p>
        <p class="text">Different colors on the heat map stand for rent varies from area to area. The redder, the higher; the bluer, the lower. We can see that Dongcheng and Xicheng Dictrict, the two districts nearest to Tiananmen Square, are the highest ones. Those who choose to live in both distrcts need to spend ￥4150 for one room every month. With￥3400 per month, Haidian and Chaoyang District are just as expected. Generally speaking, the farther away from downtown, the lower the rent. As a result, commuting time of those who live in suburbs is significantly longer than those who don't, dozing 2 to 3 hours on the subway every day.</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import yinhao from '../components/yinhao.vue';
  export default  {
    components:{
      yinhao
    },
    data () {
      return {
        ishover: false,
        isScale: true
      }
    },
    methods:{
      hover () {
        this.ishover = true
      },
      leave () {
        this.ishover = false
      },
      toggle () {
        this.isScale = !this.isScale
      }
    }
  }
</script>


<style scoped>
  .bottom-text-container{
    padding: 50px;
    background-color: gainsboro;
  }

  .jietu-container{
    width: 100%;
    height: 100%;
    background-image: url("/static/image/jietu.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
  .decs_text{
    color: rgba(255,255,255,0.5);
    font-size: 12px;
    margin-left: 20px;
  }
 .cover{
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(0,0,0,0.3);
   z-index: 100;
 }
.hot_map_container{
  height: 600px;
  position: relative;
}

.text-container{
  background-color: rgb(64, 74, 89);
  padding:20px;
  color: white;
  text-align: left;
  font-size: 14px;
  position: absolute;
  right: 0;
  top: 0;
  width: 40vw;
  height: 600px;
  box-sizing: border-box;
  overflow: auto;
  z-index: 101;
}
.fadeslide-enter-active, .fadeslide-leave-active {
  transition: all .5s
}
.fadeslide-enter, .fadeslide-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0;
  transform:translateX(400px)
}
 .fade-enter-active, .fade-leave-active {
   transition: all .5s
 }
 .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
   opacity: 0;
 }
  .text{ 
    text-align: center;
  }
</style>

