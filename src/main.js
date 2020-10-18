import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"
import './assets/scss/styles.scss'
import vuetify from './plugins/vuetify.js'
//sentry
const sentryDns = require('./env');
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import { Integrations } from "@sentry/tracing";
Sentry.init({
    dsn: sentryDns,
    integrations: [
        new VueIntegration({
            Vue,
            tracing: true,
        }),
        new Integrations.BrowserTracing(),
    ],
    tracesSampleRate: 1.0,
});
//
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
