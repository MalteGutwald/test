import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { CarouselPlugin } from 'bootstrap-vue'

Vue.use(CarouselPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
