import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"
import './assets/scss/styles.scss'
import vuetify from './plugins/vuetify.js'

Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue()

new Vue({
    // el: '#app',
    store,
    router,
    vuetify,
    components: { App },
    template: '<App/>',
    render: h => h(App)
}).$mount('#app');
