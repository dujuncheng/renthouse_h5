<template>
  <div class="likai-container">
    <div class="text-container">
      <div class="title-container">
        <p>北京的生活成本昂贵，房租如此之高，</p>
        <p>为什么源源不断的人仍涌入这座城市？宁可呆在地下室也不愿意离开？</p>
      </div>
      <div class="geci-container">
        <p style="margin-bottom: 20px">也许汪峰《北京北京》作品里的歌词，曾痛彻很多人的心扉：</p>
        <div class="geci-block">
          <p>咖啡馆到广场有三个街区</p>
          <p>就像霓虹灯到月亮的距离</p>
          <p>在这儿我能感觉到我的存在</p>
          <p>在这儿有太多让我眷恋的东西</p>
          <p>我在这里活着也在这里死去</p>
          <p>北京，北京</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped>
.likai-container{
  padding: 80px 0px;
  width: 100%;
  min-height: 400px;
  background-image: url("../../static/image/3.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
}
  .text-container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    color: white;
    font-size: 18px;
  }

  .geci-container{
    padding-top: 40px;
  }
</style>