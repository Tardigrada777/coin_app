import Vue from 'vue'
import App from './App.vue'

import { Pagination } from 'buefy/dist/components/pagination'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.component('b-pagination', Pagination)

new Vue({
  render: h => h(App),
}).$mount('#app')
