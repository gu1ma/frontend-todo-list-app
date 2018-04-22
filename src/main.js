// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueEvents from './plugins/events'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueEvents)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<div id="app"><transition name="fade" mode="out-in"><router-view class="view"></router-view></transition></div>'
})
