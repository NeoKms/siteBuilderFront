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
            component: () => import("../components/pages/site/Site"),
            meta: {requiresAuth: true, rights: {sites: 1}},
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
            meta: {requiresAuth: true, rights: {sites: 1}},
            children: [
                {
                    path: ":tabName",
                    name: "siteDescriptionView",
                    props: true,
                    meta: {requiresAuth: true, rights: {sites: 1}},
                    component: () => import("../components/pages/site/siteDetails/siteView/siteDescriptionView"),
                },
                {
                    path: ":tabName",
                    name: "siteContentView",
                    props: true,
                    meta: {requiresAuth: true, rights: {sites: 1}},
                    component: () => import("../components/pages/site/siteDetails/siteView/siteContentView"),
                },
                {
                    path: ":tabName/edit",
                    name: "siteDescriptionEdit",
                    props: true,
                    meta: {requiresAuth: true, rights: {sites: 2}},
                    component: () => import("../components/pages/site/siteDetails/siteEditor/siteDescriptionEdit"),
                },
                {
                    path: ":tabName/edit",
                    name: "siteContentEdit",
                    props: true,
                    meta: {requiresAuth: true, rights: {sites: 2}},
                    component: () => import("../components/pages/site/siteDetails/siteEditor/siteContentEdit"),
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
            component: () => import("../components/pages/login/loginForm"),
            beforeEnter: (to, from, next) => {
                store.dispatch('login/fetchCheckLogin')
                    .then(isAuth => {
                        if (isAuth) {
                            next({name: 'home'})
                        } else {
                            next()
                        }
                    })
            }
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
    if (to.matched.some(record => record.meta.requiresAuth)) {
        store.dispatch('login/fetchCheckLogin')
            .then(isAuth => {
                if (isAuth) {
                    if (to.meta.rights) {
                        let rights = store.getters['login/getUserRighst']
                        let access = true
                        for (let prop in to.meta.rights) {
                            if (!rights[prop] || rights[prop] < to.meta.rights[prop]) {
                                access = false
                                break
                            }
                        }
                        if (access) {
                            next();
                        } else {
                            next({
                                name: '404'
                            })
                        }
                    } else {
                        next();
                    }
                } else {
                    next({
                        name: 'login',
                        query: {redirect: to.fullPath}
                    })
                }
            })
    } else {
        next();
    }
})

export default router;
