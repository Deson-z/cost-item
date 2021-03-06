import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/common.css'
import './assets/style/normalize.css'
import './assets/fonts/iconfont.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './lib/ulits'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')