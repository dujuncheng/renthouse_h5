<template>
  <div id="app">
    <welcome :scrollY="scrollY"></welcome>
    <shining_house></shining_house>
    <imgcontainer :bgimg="'qiao.jpg'" :content="turan" :content_en="turan_en" :index="'1'" :leaveTitleIndex="leaveTitleIndex" :leaveTitleTop="leaveTitleTop" :scrollY="scrollY"></imgcontainer>
    <ciyun></ciyun>
    <imgcontainer :bgimg="'zhanglang.jpg'" :content="raner" :content_en="raner_en" :index="'2'" :leaveTitleIndex="leaveTitleIndex" :leaveTitleTop="leaveTitleTop" :scrollY="scrollY"></imgcontainer>
    <countrymap></countrymap>
    <hot_map></hot_map>
    <yingxiang></yingxiang>
    <map_to_rentArea> </map_to_rentArea>
    <likai></likai>
    <ziliao></ziliao>
  </div>
</template>

<script>
  import imgcontainer from './components/section'
  import map_to_rentArea from './components/map_to_rentArea.vue'
  import hot_map from './components/hot_map.vue'
  import countrymap from './components/coutrymap.vue'
  import shining_house from './components/shining_house.vue'
  import ciyun from './components/ciyun.vue'
  import  welcome from './components/welcome.vue'
  import yingxiang from './components/yingxiang.vue'
  import likai from './components/likai.vue'
  import ziliao from './components/ziliao.vue'
  export default {
    data () {
      return {
        imgArr: [1, 2, 3, 4],
        chooseOne: '',
//     第几个元素的title的index
        leaveTitleIndex: '',
//      第几个元素title的顶部到浏览器顶部的距离
        leaveTitleTop: '',
        scrollY: '',
        turan:'突然，“生活”不期而至。它犹如一头庞大、狡诈、杀气腾腾的猛兽，极有耐心地缓缓逼近，张开血盆大口，随时要将你吞下，在劫难逃。你说你想要一间那样的公寓？凭你刚毕业的资历和薪水，没有银行会答应你按揭买下它。退而求其次，你租房选择了租房。然而，即使是租房，你负担得起你曾幻想过的生活吗？',
        turan_en:'All of a sudden, life happens. It comes toward you slowly and patienly, like some enormous, cunning, and murderous beast, ready to devour, impossible to escape. You were saying you wanted an apartment with bla bla bla ? Sorry, no bank would grant you a loan for a mortgage, being a newly graduate. Eventually you settle for renting. Still, can you afford the life you have imagined ?',
        raner:'然而当他们真正拎着大包小包进入房间时，所有的幻想都破灭了。\n 房子被隔断成五六间狭小的空间，板墙在暴风雨来临的时刻止不住地摇撼。卫生间的马桶是共用的，经常挂满污渍。水池的下水管道没有S形水弯，阵阵恶臭扑面而来。女孩儿们把洗好的衣服晾在楼道的栏杆上，或是挂在窗户凹槽上，希望明天不要下雨。',
        raner_en:'However, when they actually unpack their luggage in their Dream House, the gilt is off.An intact house is usually divided into 5 or 6 rooms with no public space left, the living room included. The door is so thin that one punch can smash it, while the wood siding wall won\'t stop shaking when the storm comes. Toilet in the bathroom is shared ,usually covered with stains. The S-shaped pipe between the sink and the sewer line is missing, reeking of repulsive smells. Girls hang up their laundry onto the handrail of the corridor or the grooves of the window, hoping it won\'t rain the next day. '
      }
    },
    name: 'app',
    components: {
      imgcontainer,
      map_to_rentArea,
      hot_map,
      countrymap,
      shining_house,
      ciyun,
      welcome,
      yingxiang,
      likai,
      ziliao
    },
    mounted () {
      var self = this
      var containerArr = document.getElementsByClassName('container')
      window.addEventListener('scroll', function () {
        self.scrollY = window.scrollY
        for (var i = 0; i < containerArr.length; i++) {
          var itemtitle = document.querySelector('.title' + i)
          var titleTop = itemtitle.offsetTop - window.scrollY
          if (titleTop > -window.innerHeight / 2 && titleTop < window.innerHeight / 2) {
            self.leaveTitleTop = titleTop
            self.leaveTitleIndex = i
          }
        }
      })
    }
  }
</script>

<style>

</style>
