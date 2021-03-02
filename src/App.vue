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
                    name: 'Тест 2',
                    type: 'warning',
                    time: 1000,
                })
            }
        },
        mounted() {
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
</style>
