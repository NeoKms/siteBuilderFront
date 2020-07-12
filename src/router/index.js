import Vue from 'vue';
import Router from "vue-router";

Vue.use(Router)

export default new Router ({
    mode: "history",
    routes: [
        {
            path: '/site',
            name: 'site',
            component: () => import("../components/pages/site/Site.vue")
        },
        {
            path: '/',
            name: 'home',
            component: () => import("../components/pages/main/Main.vue")
        },
        {
            path: '/site/:id/details',
            name: 'siteDetails',
            component: () => import("../components/pages/site/siteDetails/siteDetails.vue")
        },
    ]
})
