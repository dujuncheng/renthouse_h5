# renthouse_h5
第三届数据新闻交互作品——《北京房租》

这个作品从策划，到数据采集，分析，到设计，实现，共花费了3天的时间。
最后在比赛截至的最后一刻提交上去了，不过获得了前十名的成绩，这么短的时间内要完成整个作品，代码写的有些不规范。

# 预览
http://dujuncheng.com.cn/renthouse

# 实现

### 视觉差
背景图片background-attachment: fixed; 同时 transform: tranlateY( scrollY px) 的值随着滚动值的变化而变化即可
![](http://image.dydata.io/EGNavp9WdGnDg6kjk9Nrz3.gif)

### 点击地图区域出现房租
首先是布局：地图部分就是div块布局的，因为有不规则图形，当时花了一些心思；逻辑部分用vue的双向绑定就比较简单了，右侧面积 = 选中的区域.rate * 房租；
![](http://image.dydata.io/8etuEHg1JqFj4D75YWi7Zd.gif)





