import Vue from 'vue'
import App from './App.vue'
import VueCollision from 'vue-collision'

export const bus = new Vue()

Vue.use(VueCollision, { globalTriggers:[] })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
