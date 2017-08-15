<template>
  <div class="yinxiang-container">
    <div class="title-container">
      <h2>影响房租的因素</h2>
      <p>除了地理区位之外，还有什么促使租金居高不下的原因？</p>
    </div>
    <div class="chart-container">
      <div class="left-container">
        <iframe src="http://www.dydata.io/preview.html?id=897409700275101696" scrolling="no" border="0" frameborder="0" allowfullscreen="true" width ="1584" height="1200"></iframe>
      </div>
      <div class="right-container">
        <iframe src="http://www.dydata.io/preview.html?id=897468395071676416" scrolling="no" border="0" frameborder="0" allowfullscreen="true" width ="1000" height="1000"></iframe>
      </div>
    </div>
    <div class="text-container">
      <p class="text">通过比较分析你可以发现，左边的散点图有一定的趋势和形状，而右边的则是杂乱无章的。用专业的话来说，租金和房屋面积有一定的正相关关系，房屋面积越大，租金越高。同时房屋和地铁距离的大小并不像人们平时想象的那样，它对租金的影响并没有那么显著。</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped>
  .yinxiang-container{
    padding: 10px;
  }
  .title-container{
    text-align: center;
    padding:40px;
  }
  .chart-container{
    display: flex;
    flex-wrap: wrap;
  }
  .left-container{
    margin: 0 auto;
    flex-basis: 500px;
    height: 500px;
    overflow: hidden;
  }
  .right-container{
    margin: 0 auto;
    flex-basis: 500px;
    height: 500px;
    overflow: hidden;
  }
  .text-container{
    padding: 30px 60px;
  }
</style>