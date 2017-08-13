<template>
  <div class="section-container">
    <div class="map-container">
      <div class="map-title">
        <h2>北京各区域平均租金/月</h2>
      </div>
      <div class="map-desc">
        <p v-if="!selectitem">请点击地图选择区域</p>
        <p v-if="selectitem">您选择了{{selectitem}}</p>
      </div>
      <div class="map">
        <div class="map-top">
          <div class="yanqing center bg1" @click="selectArea('yanqing')"  @mouseenter="hover('yanqing')"  @mouseleave="hover('')"  :class="{ darkbg1:(hoveritem == 'yanqing' || selectitem == 'yanqing' )}">
            延庆区
          </div>
          <div class="huairou center bg1" @click="selectArea('huairou')" @mouseenter="hover('huairou')"  @mouseleave="hover('')":class="{ darkbg1:hoveritem === 'huairou' || selectitem == 'huairou' }">怀柔区</div>
          <div class="miyun center bg1" @click="selectArea('miyun')" @mouseenter="hover('miyun')"  @mouseleave="hover('')":class="{ darkbg1:hoveritem === 'miyun' || selectitem == 'miyun'}">密云区</div>
          <div class="pinggu center bg1" @click="selectArea('pinggu')" @mouseenter="hover('pinggu')"  @mouseleave="hover('')":class="{ darkbg1:hoveritem === 'pinggu' || selectitem == 'pinggu'}">平谷区</div>
        </div>
        <div class="map-middle">
          <div class="changping center bg3" @click="selectArea('changping')" @mouseenter="hover('changping')"  @mouseleave="hover('')":class="{ darkbg3:hoveritem === 'changping' || selectitem == 'changping'}">昌平区</div>
          <div class="shunyi center bg3" @click="selectArea('shunyi')" @mouseenter="hover('shunyi')"  @mouseleave="hover('')":class="{ darkbg3:hoveritem === 'shunyi' || selectitem == 'shunyi'}">顺义区</div>
        </div>
        <div class="map-bottom">
          <div class="map-bottom-left">
            <div class="mentougou center bg2" @click="selectArea('mentougou')"  @mouseenter="hover('mentougou')"  @mouseleave="hover('')":class="{ darkbg2:hoveritem === 'mentougou' || selectitem == 'mentougou'}">门头沟区</div>
            <div class="fangshan center bg2" @click="selectArea('fangshan')" @mouseenter="hover('fangshan')"  @mouseleave="hover('')":class="{ darkbg2:hoveritem === 'fangshan' || selectitem == 'fangshan'}">房山区</div>
          </div>
          <div class="map-bottom-middle">
            <div class="map-bottom-middle-top">
              <div class="haidian center bg4" @click="selectArea('haidian')" @mouseenter="hover('haidian')"  @mouseleave="hover('')":class="{ darkbg4:hoveritem === 'haidian' || selectitem == 'haidian'}">海淀区</div>
              <div class="chaoyang center bg4" @click="selectArea('chaoyang')" @mouseenter="hover('chaoyang')"  @mouseleave="hover('')":class="{ darkbg4:hoveritem === 'chaoyang' || selectitem == 'chaoyang'}">朝阳区</div>
            </div>
            <div class="map-bottom-middle-middle">
              <div class="map-bottom-middle-middle-left">
                <div class="map-bottom-middle-middle-left-left">
                  <div class="shijingshan center bg3" @click="selectArea('shijingshan')" @mouseenter="hover('shijingshan')"  @mouseleave="hover('')":class="{ darkbg3:hoveritem === 'shijingshan' || selectitem == 'shijingshan'}">石景山区</div>
                </div>
                <div class="map-bottom-middle-middle-left-right">
                  <div class="map-bottom-middle-middle-left-right-top">
                    <div class="xicheng center bg4" @click="selectArea('xicheng')" @mouseenter="hover('xicheng')"  @mouseleave="hover('')":class="{ darkbg4:hoveritem === 'xicheng' || selectitem == 'xicheng'}">西城区</div>
                    <div class="dongcheng center bg4" @click="selectArea('dongcheng')" @mouseenter="hover('dongcheng')"  @mouseleave="hover('')":class="{ darkbg4:hoveritem === 'dongcheng' || selectitem == 'dongcheng'}" >东城区</div>
                  </div>
                  <div class="map-bottom-middle-middle-left-right-bottom">
                    <div class="fengtai center bg3" @click="selectArea('fengtai')" @mouseenter="hover('fengtai')"  @mouseleave="hover('')":class="{ darkbg3:hoveritem === 'fengtai' || selectitem == 'fengtai'}">丰台区</div>
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
            <div class="tongzhou center bg2" @click="selectArea('tongzhou')" @mouseenter="hover('tongzhou')"  @mouseleave="hover('')":class="{ darkbg2:hoveritem === 'tongzhou' || selectitem == 'tongzhou'}">通州区</div>
            <div class="daxing center bg2" @click="selectArea('daxing')" @mouseenter="hover('daxing')"  @mouseleave="hover('')":class="{ darkbg2:hoveritem === 'daxing' || selectitem == 'daxing'}">大兴区</div>
          </div>
        </div>
      </div>
    </div>
    <div class="house-container">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return{
        hoveritem:'',
        selectitem:'',
        mapdata: {
          yanqing:{

          }
        }
      }
    },
    methods:{
      selectArea (name) {
        this.selectitem = name;
      },
      hover (name) {
        this.hoveritem = name
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
    align-items: center;
    justify-content: center;
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
    background-color: aqua;
  }
</style>
