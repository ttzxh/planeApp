import Vue from 'vue'
import App from './App'

import message from '@/components/quick-message/quick-message.vue'
Vue.component('quick-message',message);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
