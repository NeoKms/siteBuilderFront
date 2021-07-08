<template>

    <v-app>
        <PushNotifications />
        <v-card color="grey lighten-4" flat tile>
            <v-toolbar height="100">
                <router-link to="/"><img src="@/assets/img/logo.png" width="80" alt="logo"></router-link>
                <v-toolbar-title class="black--text">Title</v-toolbar-title>
                <v-toolbar-items>
                    <v-btn text small class="nav_btn" to="/">На главную</v-btn>
                    <v-btn text small class="nav_btn" to="/site">Перечень сайтов</v-btn>
                    <v-btn text small @click="testNotif2" class="nav_btn">Notif fast</v-btn>
                    <!--					<v-btn text small @click="testNotif" class="nav_btn">Notif ok\no</v-btn>-->
                </v-toolbar-items>
            </v-toolbar>
        </v-card>
        <v-main>
            <v-container>
                <router-view class="main-body" :key="this.$route.path" />
            </v-container>
        </v-main>
        <v-footer absolute class="font-weight-medium" elevation="12" app>
            <v-col class="text-center" cols="12">
                © {{ new Date().getFullYear() }} Copyright: <strong>Жигульский Владислав</strong>
            </v-col>
        </v-footer>
    </v-app>
</template>
<script>
    import PushNotifications from './components/notification/PushNotifications.vue'
    import {errVueHandler} from '@/plugins/errorResponser'
    import {mapGetters} from 'vuex';


    export default {
        name: 'App',
        components: {
            PushNotifications,
        },
        methods: {
            testNotif() {
                this.$store.commit('notifications/addMessage', {
                    name: 'Тест 1222222222222222222222222222\n2222222222222222222',
                    leftButton: 'Ok',
                    rightButton: 'No',
                    action: 'test'
                })
            },
            testNotif2() {
                this.$store.commit('notifications/addMessage', {
                    name: 'Хэй, я тестовое уведомление',
                    type: 'warning',
                    time: 1000,
                })
            }
        },
        computed: {
            ...mapGetters('login', {
                isAuth: 'getUserAuth',
            }),
        },
        mounted() {
            setTimeout(()=>{
                if (this.isAuth) {
                    this.$store.dispatch('connectionWs')
                        .then(() => {
                            this.$store.dispatch('sites/fetchSiteList').then(res => errVueHandler(this, res))
                        })
                }
            },1000);
            for (let prop in process.env) {
                envConfig[prop.replace('VUE_APP_','')] = process.env[prop] // eslint-disable-line
            }
        }
    }
</script>

<style lang="scss">
    a {
        color: #007bff;
        text-decoration: none;
    }

    .main-body {
        max-width: 1161px;
        text-align: center;
        width: 100%;
        background-color: #f5f5f5;
        padding: 15px;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
        margin: 5% auto 5%;
        overflow: hidden;
    }

    .nav_btn {
        color: rgba(0, 0, 0, .5) !important;

        a {
            color: rgba(0, 0, 0, .5) !important;
        }

        &:hover {
            color: rgba(0, 0, 0, 1) !important;

            a {
                color: rgba(0, 0, 0, 1) !important;
            }
        }
    }

    /* -------------------------------------------------*/
    .tooltip {
        display: block !important;
        z-index: 10000;

        .tooltip-inner {
            background: black;
            color: white;
            border-radius: 6px;
            padding: 5px 10px 4px;
        }

        .tooltip-arrow {
            width: 0;
            height: 0;
            border-style: solid;
            position: absolute;
            margin: 5px;
            border-color: black;
            z-index: 1;
        }

        &[x-placement^="top"] {
            margin-bottom: 5px;

            .tooltip-arrow {
                border-width: 5px 5px 0 5px;
                border-left-color: transparent !important;
                border-right-color: transparent !important;
                border-bottom-color: transparent !important;
                bottom: -5px;
                left: calc(50% - 5px);
                margin-top: 0;
                margin-bottom: 0;
            }
        }

        &[x-placement^="bottom"] {
            margin-top: 5px;

            .tooltip-arrow {
                border-width: 0 5px 5px 5px;
                border-left-color: transparent !important;
                border-right-color: transparent !important;
                border-top-color: transparent !important;
                top: -5px;
                left: calc(50% - 5px);
                margin-top: 0;
                margin-bottom: 0;
            }
        }

        &[x-placement^="right"] {
            margin-left: 5px;

            .tooltip-arrow {
                border-width: 5px 5px 5px 0;
                border-left-color: transparent !important;
                border-top-color: transparent !important;
                border-bottom-color: transparent !important;
                left: -5px;
                top: calc(50% - 5px);
                margin-left: 0;
                margin-right: 0;
            }
        }

        &[x-placement^="left"] {
            margin-right: 5px;

            .tooltip-arrow {
                border-width: 5px 0 5px 5px;
                border-top-color: transparent !important;
                border-right-color: transparent !important;
                border-bottom-color: transparent !important;
                right: -5px;
                top: calc(50% - 5px);
                margin-left: 0;
                margin-right: 0;
            }
        }

        &.popover {
            $color: #f9f9f9;

            .popover-inner {
                background: $color;
                color: black;
                padding: 24px;
                border-radius: 5px;
                box-shadow: 0 5px 30px rgba(black, .1);
            }

            .popover-arrow {
                border-color: $color;
            }
        }

        &[aria-hidden='true'] {
            visibility: hidden;
            opacity: 0;
            transition: opacity .15s, visibility .15s;
        }

        &[aria-hidden='false'] {
            visibility: visible;
            opacity: 1;
            transition: opacity .15s;
        }
    }
</style>
