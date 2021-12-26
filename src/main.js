import Vue from 'vue'
import App from './App.vue'
import router from './route/index'

Vue.config.productionTip = false

new Vue({
  router,
  data(){
    return {
      cart : []
    }
  },
  render: h => h(App),
}).$mount('#app')
