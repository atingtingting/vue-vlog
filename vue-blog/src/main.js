import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '../theme/index.css'
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
