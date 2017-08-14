<template>
  <div class="section-container">
    <div class="map-container">
      <div class="map-title">
        <h2>北京各区域平均租金/月</h2>
      </div>
      <div class="map-desc">
        <p v-if="!selectitem">①请点击地图选择区域</p>
        <p v-if="selectitem">①您选择了 <strong class="selectitem"> {{mapdata[selectitem].name}} </strong></p>
      </div>
      <div class="map">
        <div class="map-top">
          <div class="yanqing center bg1" @click="selectArea('yanqing')"  @mouseenter="hover('yanqing')"  @mouseleave="hover('')"  :class="{ darkbg1:(hoveritem == 'yanqing' || selectitem == 'yanqing' )}">
            <p class="name">延庆区</p>
            <p class="price">1063.6</p>
          </div>
          <div class="huairou center bg1" @click="selectArea('huairou')" @mouseenter="hover('huairou')"  @mouseleave="hover('')":class="{ darkbg1:hoveritem === 'huairou' || selectitem == 'huairou' }">
            <p class="name">怀柔区</p>
            <p class="price">1038.71</p>
          </div>
          <div class="miyun center bg1" @click="selectArea('miyun')" @mouseenter="hover('miyun')"  @mouseleave="hover('')":class="{ darkbg1:hoveritem === 'miyun' || selectitem == 'miyun'}">
            <p class="name">密云区</p>
            <p class="price">844.73</p>
          </div>
          <div class="pinggu center bg1" @click="selectArea('pinggu')" @mouseenter="hover('pinggu')"  @mouseleave="hover('')":class="{ darkbg1:hoveritem === 'pinggu' || selectitem == 'pinggu'}">
            <p class="name">平谷区</p>
            <p class="price">802.64</p>
          </div>
        </div>
        <div class="map-middle">
          <div class="changping center bg3" @click="selectArea('changping')" @mouseenter="hover('changping')"  @mouseleave="hover('')":class="{ darkbg3:hoveritem === 'changping' || selectitem == 'changping'}">
            <p class="name">昌平区</p>
            <p class="price">1801.45</p>
          </div>
          <div class="shunyi center bg3" @click="selectArea('shunyi')" @mouseenter="hover('shunyi')"  @mouseleave="hover('')":class="{ darkbg3:hoveritem === 'shunyi' || selectitem == 'shunyi'}">
            <p class="name">顺义区</p>
            <p class="pirce">2081.08</p>
          </div>
        </div>
        <div class="map-bottom">
          <div class="map-bottom-left">
            <div class="mentougou center bg2" @click="selectArea('mentougou')"  @mouseenter="hover('mentougou')"  @mouseleave="hover('')":class="{ darkbg2:hoveritem === 'mentougou' || selectitem == 'mentougou'}">
              <p class="name">门头沟区</p>
              <p class="price">1595.39</p>
            </div>
            <div class="fangshan center bg2" @click="selectArea('fangshan')" @mouseenter="hover('fangshan')"  @mouseleave="hover('')":class="{ darkbg2:hoveritem === 'fangshan' || selectitem == 'fangshan'}">
              <p class="name">房山区</p>
              <p class="price">1173.4</p>
            </div>
          </div>
          <div class="map-bottom-middle">
            <div class="map-bottom-middle-top">
              <div class="haidian center bg4" @click="selectArea('haidian')" @mouseenter="hover('haidian')"  @mouseleave="hover('')":class="{ darkbg4:hoveritem === 'haidian' || selectitem == 'haidian'}">
                <p class="name">海淀区</p>
                <p class="price">3351.46</p>
              </div>
              <div class="chaoyang center bg4" @click="selectArea('chaoyang')" @mouseenter="hover('chaoyang')"  @mouseleave="hover('')":class="{ darkbg4:hoveritem === 'chaoyang' || selectitem == 'chaoyang'}">
                <p class="name">朝阳区</p>
                <p class="price">3426.13</p>
              </div>
            </div>
            <div class="map-bottom-middle-middle">
              <div class="map-bottom-middle-middle-left">
                <div class="map-bottom-middle-middle-left-left">
                  <div class="shijingshan center bg3" @click="selectArea('shijingshan')" @mouseenter="hover('shijingshan')"  @mouseleave="hover('')":class="{ darkbg3:hoveritem === 'shijingshan' || selectitem == 'shijingshan'}">
                    <p class="name">石景山区</p>
                    <p class="price">2420.72</p>
                  </div>
                </div>
                <div class="map-bottom-middle-middle-left-right">
                  <div class="map-bottom-middle-middle-left-right-top">
                    <div class="xicheng center bg4" @click="selectArea('xicheng')" @mouseenter="hover('xicheng')"  @mouseleave="hover('')":class="{ darkbg4:hoveritem === 'xicheng' || selectitem == 'xicheng'}">
                      <p class="name">西城区</p>
                      <p class="price">4136.17</p>
                    </div>
                    <div class="dongcheng center bg4" @click="selectArea('dongcheng')" @mouseenter="hover('dongcheng')"  @mouseleave="hover('')":class="{ darkbg4:hoveritem === 'dongcheng' || selectitem == 'dongcheng'}" >
                      <p class="name">东城区</p>
                      <p class="price">4171.3</p>
                    </div>
                  </div>
                  <div class="map-bottom-middle-middle-left-right-bottom">
                    <div class="fengtai center bg3" @click="selectArea('fengtai')" @mouseenter="hover('fengtai')"  @mouseleave="hover('')":class="{ darkbg3:hoveritem === 'fengtai' || selectitem == 'fengtai'}">
                      <p class="name">丰台区</p>
                      <p class="price">2476.36</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="map-bottom-middle-middle-right">
                <div class="map-bottom-middle-middle-right-top bg2" @click="selectArea('tongzhou')" @mouseenter="hover('tongzhou')"  @mouseleave="hover('')":class="{ darkbg2:hoveritem === 'tongzhou' || selectitem == 'tongzhou'}"></div>
                <div class="map-bottom-middle-middle-right-bottom bg2" @click="selectArea('daxing')" @mouseenter="hover('daxing')"  @mouseleave="hover('')":class="{ darkbg2:hoveritem === 'daxing' || selectitem == 'daxing'}"></div>
              </div>
            </div>
            <div class="map-bottom-middle-bottom">
              <div class="map-bottom-middle-bottom-left">
                <div class="fangshan bg2" style="height: 100%;" @click="selectArea('fangshan')" @mouseenter="hover('fangshan')"  @mouseleave="hover('')":class="{ darkbg2:hoveritem === 'fangshan' || selectitem == 'fangshan'}"></div>
              </div>
              <div class="map-bottom-middle-bottom-right">
                <div class="daxing bg2" style="height: 100%" @click="selectArea('daxing')" @mouseenter="hover('daxing')"  @mouseleave="hover('')":class="{ darkbg2:hoveritem === 'daxing' || selectitem == 'daxing'}"></div>
              </div>
            </div>
          </div>
          <div class="map-bottom-right">
            <div class="tongzhou center bg2" @click="selectArea('tongzhou')" @mouseenter="hover('tongzhou')"  @mouseleave="hover('')":class="{ darkbg2:hoveritem === 'tongzhou' || selectitem == 'tongzhou'}">
              <p class="name">通州区</p>
              <p class="price">1581.49</p>
            </div>
            <div class="daxing center bg2" @click="selectArea('daxing')" @mouseenter="hover('daxing')"  @mouseleave="hover('')":class="{ darkbg2:hoveritem === 'daxing' || selectitem == 'daxing'}">
              <p class="name">大兴区</p>
              <p class="price">1715.54</p>
            </div>
          </div>
        </div>
      </div>
      <div class="map-desc">
        <p v-if="!payValue">②请选择您每月租金</p>
        <p v-if="payValue">②您选择的每月租金是 <strong class="payvalue">{{payValue}}元</strong></p>
      </div>
      <div class="pay">
        <div class="pay-title">
          <h3>每月租金</h3>
        </div>
        <div class="pay-content">
          <el-slider v-model="payValue" :step="10" show-input :max="10000" :min="500"></el-slider>
        </div>
      </div>
    </div>
    <div class="house-container">
      <div class="title">
        <h1>在北京，</h1>
        <h4 v-if="selectitem && payValue">您每月 <span style="font-size: 30px">{{payValue}}元</span>的租金在 <span style="font-size: 30px">{{mapdata[selectitem].name}}</span> 可以租到的房屋面积为：</h4>
      </div>
      <div class="square-container">
        <div class="square" v-if="selectitem && payValue" :style="{width: Math.sqrt(mapdata[selectitem].rate * payValue)*3.6 + '%'}">
          <div class="left-top-arrow"></div>
          <div class="square-content">
            <p class="square-content-text">{{mapdata[selectitem].rate * payValue | subto2}}㎡</p>
          </div>
          <div content="right-bottom-arrow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return{
        hoveritem:'',
        selectitem:'',
        csvdata: `延庆区,yanqing,1063.6,29.0601092896175,0.0344114328694998
                  怀柔区,huairou,1038.71,28.3800546448087,0.035236013901859
                  密云区,miyun,844.73,23.0800546448087,0.043327453742616
                  平谷区,pinggu,802.64,21.9300546448087,0.04559952157879
                  昌平区,changping,1801.45,49.2199453551913,0.0203169668877848
                  顺义区,shunyi,2081.08,56.8601092896175,0.0175870221231284
                  门头沟区,mentougou,1595.39,43.5898907103825,0.0229410990416136
                  海淀区,haidian,3351.46,91.5699453551913,0.0109206137026848
                  朝阳区,chaoyang,3426.13,93.6101092896175,0.0106826069063346
                  通州区,tongzhou,1581.49,43.2101092896175,0.0231427324864526
                  房山区,fangshan,1173.40,32.06,0.0311914095790012
                  石景山区,shijingshan,2420.72,66.1398907103825,0.0151194685878582
                  西城区,xicheng,4136.17,113.010109289617,0.0088487658872822
                  东城区,dongcheng,4171.30,113.97,0.00877424304173759
                  丰台区,fengtai,2476.36,67.6601092896175,0.0147797573858405
                  大兴区,daxing,1715.54,46.8726775956284,0.0213343903377362`,
        mapdata: {},
        payValue:3000
      }
    },
    methods:{
      selectArea (name) {
        this.selectitem = name;
      },
      hover (name) {
        this.hoveritem = name
      },
      getMapData () {
        var tempArr = this.csvdata.split('\n');
        for(var i =0;i<tempArr.length;i++){
          tempArr[i] = tempArr[i].trim().split(',');
          this.mapdata[tempArr[i][1]] = { price:tempArr[i][2], rate:tempArr[i][4], name:tempArr[i][0]}
        }
        console.dir(this.mapdata);
      }
    },
    created () {
      this.getMapData()
    },
    filters :{
      subto2 (value) {
        value = value + '';
        if (value.indexOf('.')>0){
          var index = value.indexOf('.');
          value = value.substr(0,index+4);
        }
        return value
      }
    }
  }
</script>

<style scoped>

  .bg4 {
    background-color: rgba(2,42,76,0.8);
  }
  .bg3 {
    background-color: rgba(8,77,139,0.8);
  }
  .bg2 {
    background-color: rgba(15,106,193,0.8);
  }
  .bg1 {
    background-color: rgba(50,154,252,0.8);
  }
  .darkbg4 {
    background-color: rgba(2,42,76,1);
  }
  .darkbg3 {
    background-color: rgba(8,77,139,1);
  }
  .darkbg2 {
    background-color: rgba(15,106,193,1);
  }
  .darkbg1{
    background-color: rgba(50,154,252,1);
  }
  .section-container{
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    align-items: center;
  }
  .map-container{
    flex-grow: 1;
    flex-basis: 500px;
    padding:20px;
    padding-right: 40px;
  }
  .map-title{
    text-align: center;
  }

  .map-desc{
    text-align: center;
    color: gray;
  }
  .map{
    background-color: white;
    width: 100%;
    height: 400px;
    overflow: hidden;
    color: white;
    cursor: pointer;
  }
  .map-top{
    height: 25%;
    width: 100%;
    display: flex;
    box-sizing: border-box;
  }
  .center{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .center p{
    margin: 0.6em;
  }
  .center .price{
    font-size: 12px;
    font-weight: lighter;
    background-color: rgb(252,98,65);
    padding: 2px 10px;
    border-radius: 3px;
    color: ;
  }
  .center .name{
    margin: 0.5em;
  }
  .yanqing{
    flex: 2;
    height: 100%;
    border-right: 1px solid rgba(255,255,255,0.2);
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .huairou{
    flex: 1;
    height: 100%;
    border-right: 1px solid rgba(255,255,255,0.2);
    border-right: 1px solid rgba(255,255,255,0.2);
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .miyun{
    flex: 1;
    height: 100%;
    border-right: 1px solid rgba(255,255,255,0.2);
    border-right: 1px solid rgba(255,255,255,0.2);
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .pinggu{
    flex: 2;
    border-right: 1px solid rgba(255,255,255,0.2);
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .map-middle{
    height: 15%;
    width: 100%;
    display: flex;
  }
  .changping{
    flex: 1;
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-top: 1px solid rgba(255,255,255,0.2);
    border-right: 1px solid rgba(255,255,255,0.2);
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .shunyi{
    flex: 1;
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-top: 1px solid rgba(255,255,255,0.2);
    border-right: 1px solid rgba(255,255,255,0.2);
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .map-bottom{
    height: 60%;
    width: 100%;
    display: flex;
  }
  .map-bottom-left{
    flex: 1;
  }
  .mentougou{
    height: 50%;
    width: 100%;
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-right: 1px solid rgba(255,255,255,0.2);
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .fangshan{
    height: 50%;
    width: 100%;
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .map-bottom-middle{
    flex: 3;
  }
  .map-bottom-middle-top{
    width:100%;
    height:25%;
    display: flex;
  }
  .haidian{
    flex: 1;
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-left: 1px solid rgba(255,255,255,0.2);
    border-right: 1px solid rgba(255,255,255,0.2);
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .chaoyang{
    flex: 1;
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-right: 1px solid rgba(255,255,255,0.2);
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .map-bottom-middle-middle{
    width: 100%;
    height: 60%;
    display: flex;
  }
  .map-bottom-middle-middle-left{
    flex: 6;
    height: 100%;
    display: flex;
  }
  .map-bottom-middle-middle-left-left{
    height: 100%;
    flex: 1;
  }
  .map-bottom-middle-middle-left-right{
    flex: 2;
    height: 100%;
  }
  .map-bottom-middle-middle-left-right-top{
    height: 50%;
    display: flex;
  }
  .xicheng{
    flex: 1;
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-left: 1px solid rgba(255,255,255,0.2);
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .dongcheng{
    flex: 1;
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .map-bottom-middle-middle-left-right-bottom{
    height: 50%;
  }
  .fengtai{
    height: 100%;
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-left: 1px solid rgba(255,255,255,0.2);
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .shijingshan{
    height:100%;
    border-left: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .map-bottom-middle-middle-right{
    flex: 1;
    height: 100%;
  }
  .map-bottom-middle-middle-right-top{
    height: 42%;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .map-bottom-middle-middle-right-bottom{
    height: 57.5%;
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }


  .map-bottom-middle-bottom{
    width: 100%;
    height: 15%;
    display: flex;
  }
  .map-bottom-middle-bottom-left{
    flex: 1;
    height: 100%;
  }
  .map-bottom-middle-bottom-right{
    flex: 1;
    height: 100%;
  }



  .map-bottom-right{
    flex: 1;
  }
  .tongzhou{
    height: 50%;
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }
  .daxing{
    height: 50%;
    width: 100%;
    transition:all 0.5s;
    -moz-transition:all 0.5s; /* Firefox 4 */
    -webkit-transition:all 0.5s; /* Safari and Chrome */
    -o-transition:all 0.5s; /* Opera */
  }



  .house-container{
    flex-grow: 1;
    flex-basis: 500px;
    min-height: 500px;
    border-left: 1px dashed rgba(15,106,193,0.8);
    padding: 20px;
  }
  .house-container .title{
    height: 110px;
  }
  .pay{
    padding: 20px;
    padding-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pay-title{
    flex: 2;
    font-size: 14px;
  }
  .pay-content{
    flex: 10;
  }
  .payvalue{
    display: inline-block;
    padding:1px 20px;
    background-color: #20a0ff;
    border-radius: 40px;
    color: white;
  }
  .selectitem{
    display: inline-block;
    padding:1px 20px;
    background-color: #20a0ff;
    border-radius: 40px;
    color: white;
  }
  .square-container{
    position: relative;
    height: 400px;
  }
  .square{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 67px;
    border-radius: 10px;
    overflow: hidden;
    background-color: rgba(0,0,0,0.5);
    -webkit-transition: all 0.5s;
    -moz-transition: all  0.5s;
    -ms-transition: all  0.5s;
    -o-transition: all  0.5s;
    transition: all  0.5s;
  }
  .square-content{
    position: absolute;

  }
  .square-content-text{
    color: white;
  }
  .square::after{
    content: '';
    margin-top: 80%;
    display: block;
  }
</style>
