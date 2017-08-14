// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Slider } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'

Vue.config.productionTip = false

Vue.use(Slider)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
