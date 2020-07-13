import Vue from 'vue';
import Router from "vue-router";
import store from '../store';

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/site',
            name: 'site',
            component: () => import("../components/pages/site/Site")
        },
        {
            path: '/',
            name: 'home',
            component: () => import("../components/pages/main/Main")
        },
        {
            path: '/site/:id/',
            name: 'siteDetails',
            props: true,
            component: () => import("../components/pages/site/siteDetails/siteDetails"),
            meta: {requiresAuth: true},
            children: [
                {
                    path: ":tabName",
                    name: "siteDescription",
                    props: true,
                    component: () => import("../components/pages/site/siteDetails/siteView/siteViewDescription"),
                },
                {
                    path: ":tabName",
                    name: "siteContent",
                    props: true,
                    component: () => import("../components/pages/site/siteDetails/siteView/siteViewContent"),
                }
            ],
            beforeEnter: (to, from, next) => {
                // const pathTo = to.path.split('/')
                // if (pathTo.length>0 && pathTo[1]==='site' && pathTo.length>=4) {
                //     const exists = store.getters.getSiteById(to.params.id)
                //     if (exists) {
                //         next()
                //     } else {
                //         next({name: '404'})
                //     }
                // } else {
                    next()
                // }
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import("../components/pages/login/loginForm")
        },
        {
            path: '/404',
            alias: '*',
            name: '404',
            component: () => import("../components/pages/404/notFound"),
        },

    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some( record => record.meta.requiresAuth)) {
        if (!store.getters.getUserAuth) {
            next({
                name: 'login',
                query: {redirect: to.fullPath}
            })
        } else {
            next()
        }
    } else {
        next();
    }
})

export default router;
