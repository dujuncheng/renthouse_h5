<template>
  <div class="countrymap">
    <div class="title-container">
      <h2>那么，在北京租房子究竟有多难？</h2>
      <p>为了回答这个问题，我们特意爬取了2万多条数据，试图从中得到简介：</p>
    </div>
    <div class="chart-container">
      <div class="left-chart">
        <iframe src="http://www.dydata.io/preview.html?id=896057332858036224" scrolling="no" border="0" frameborder="0" allowfullscreen="false" width ="800" height="1600"></iframe>
      </div>
      <div class="right-chart" @scroll.prevent>
        <iframe src="http://www.dydata.io/preview.html?id=897290587812864000" scrolling="no" border="0" frameborder="0" allowfullscreen="false" width ="800" height="1600"></iframe>
      </div>
    </div>
    <div class="text-container">
      <div class="left-text">
        <p>全国主要城市人均月租金，表示在不同城市人们平均每月租房需要花的钱。从地图上能看出排名前三位的分别为：北京（2748元/月）、上海（2319元/月）、深圳（2211元/月）。北京是全国最贵的！</p>
        <p>Monthly rent per person in major cities of China, indicating how much people need to spent on renting houses every month on average in different cities. It can be seen from the map that the top 3 cities are Beijing(￥2748/month), Shanghai(￥2319/month) and Shenzhen(￥ 2211/month ). Clearly, Beijing is the highest one of the country !
        </p>
      </div>
      <div class="right-text">
        <p>说完了人均月租金，当然也得聊聊收入。如果你的收入足够多，租个房子简直小菜一碟。不过对于大部分刚踏入社会的年轻人来说，这可不是一个小数字。租金收入比指的是每个月租房子要占我们收入的多大比例。租金收入比高，说明你每月工资的绝大部分都用来付房租了，用来看电影、吃饭、打王者荣耀、买衣服包包的钱就少了。听起来很令人沮丧吧！
        </p>
        <p>更令人沮丧的是，地图中的数据告诉我们，房租收入比最高的还是北京，足足有58%！接下来是深圳（54%）、上海（48%）和三亚（48%）。这些地方的小伙伴生活真不易！</p>
        <p>Per capita income should also be taken into account after we done . Of course if you earn enough, renting a houes would be nothing but a piece of cake. Sadly for most young people who just get into the real world, renting is not a small budget. Rent Income Ration(RIR) means the proportion for rent out of our salary every month. A high RIR shows that most of your monthly salary was for rent, leaving little money for films-watching, food, King of Glory, new clothes and bags. How frustrating it is !
        </p>
        <p>What is worse, figure in the map proves that the highest RIR city is still Beijing, with a good dominant 58% ! Following cities are Shenzhen(54%), Shanghai(48%) and Sanya(48%). what a hard life my fellow friends are living !
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped>
.countrymap{
  text-align: center;
  background-color: rgb(64, 74, 89);
  color: white;
  padding-top: 20px;
}
.title-container{
  padding-bottom: 20px;
}
.chart-container{
  display: flex;
  flex-wrap: wrap;
}
.left-chart{
  height: 500px;
  overflow: hidden;
  flex-basis: 500px;
  margin: 0 auto;
}
.right-chart{
  flex-basis: 500px;
  height: 500px;
  overflow: hidden;
  margin: 0 auto;
}
.text-container{
  display: flex;
  padding:50px;
  text-align: left;
  font-size: 14px;
}
  .left-text{
    flex: 1;
    padding: 20px;
    padding-top: 0px;
  }
  .right-text{
    flex: 1;
    padding:20px;
    padding-top: 0px;
  }
</style>
