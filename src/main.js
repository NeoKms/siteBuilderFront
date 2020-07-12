import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from "./router"

Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue()

new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>',
    render: h => h(App)
});
