import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"
import vuetify from './plugins/vuetify.js'

Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue()

new Vue({
    store,
    router,
    vuetify,
    components: {App},
    template: '<App/>',
    render: h => h(App)
}).$mount('#app');
