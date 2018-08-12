// 入口js
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters'

//加载mockServer即可
import './mock/mockServer'

Vue.component(Button.name,Button)

import loading from './common/imgs/loading.gif'
Vue.use(VueLazyload,{loading})

new Vue({
    el:'#app',
    render:h=>h(App),
    router,
    store,
})