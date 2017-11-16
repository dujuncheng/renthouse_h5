<template>
  <div class="shining_house">
    <div class="cover">
      <div class="cover-text-container">
        <p class="cover-text">
          当夜色降临时，绝大多数人都需要寻找一个休憩之所。在北京，一共有1390000套出租屋，它们散落在普通住宅楼、四合院、阁楼、地下室里，有时候也会以别墅的面貌出现。在这些出租屋中，住着5000000个形色各异、来去匆匆的人。
        </p>
        <p class="cover-text-en">
          When the day turn into night, most people will be needing a resting premises. In Beijing, all together there are 1,390,000 rental estates, scattering in conventional residential buildings, quadrangle courtyards, attics and basements, sometimes a villa. Accordingly, 5,000,000 unique individuals in hasty life are their residents.
        </p>
      </div>
    </div>
    <video autoplay loop id="bgvid" style="height: 100%;width: 100%;object-fit:cover">
      <source src="../../static/video/rent_video_x264.mp4" type="video/webm">
      <source src="../../static/video/rent_video_x264.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped>
.shining_house{
  height:700px;
  background-color: rgba(0,0,0,0.5);
  position: relative;
  overflow: hidden;
}

.cover{
  position: absolute;
  top:0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
  background-color: rgba(0,0,0,0.6);
  color: white;
}
.cover-text-container{
  width: 60%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 101;
}
.cover-text{
  font-size: 18px;
}
.cover-text-en{
  font-size: 12px;
}
#bgvid{
  position:absolute;
  top: 0;
  left: 0;
  z-index: 99;
}
</style>
