<template>
    <div class="login-form">
        <div class="form">
            <img :src="logoImg" class="form__logo">
            <h2> Авторизация </h2>
            <v-text-field id="login" name="login" label="Логин" v-model="formData.username" required
                          autofocus></v-text-field>
            <v-text-field id="password" name="password" label="Пароль" v-model="formData.password"
                          required></v-text-field>
            <div class="form__refs">
                <router-link :to="{name: '404'}" class="ref-left" disabled>Регистрация</router-link>
                <router-link :to="{name: '404'}" class="ref-right" :disabled="true">Забыли пароль?</router-link>
            </div>
            <v-btn type="submit" name="done" @click="login">Войти</v-btn>
            <div class="error">{{error}}</div>
            <!--			<h4>Войти с помощью соц.сетей</h4>-->
            <!--			<div class="sign-social"></div>-->
        </div>
    </div>
</template>

<script>
    import {errVueHandler} from '@/plugins/errorResponser'
    export default {
        name: "loginForm",
        data() {
            return {
                formData: {
                    username: 'root',
                    password: 'root'
                },
                error: '',
                logoImg: require('@/assets/img/logo.png'),
            }
        },
        methods: {
            login: function () {
                this.$store.dispatch('login/fetchLogin', this.formData)
                    .then(res => {
                        if (res === true) {
                            this.$store.dispatch('connectionWs')
                                .then( () => {
                                    this.$store.dispatch('sites/fetchSiteList').then(res => errVueHandler(this, res))
                                })
                            this.$router.push(this.$route.query.redirect || '/')
                        } else {
                            this.$store.commit('notifications/addMessage', {
                                name: res === -1 ? 'Неизвестная ошибка' : res,
                                type: 'error',
                            })
                        }
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .login-form {
        width: 500px;
    }

    .form {
        &__logo {
            width: 200px;
        }

        input {
            text-align: center;
            width: 400px;
            margin: auto;

            &:focus {
                border: 1px solid #828282;
                box-shadow: 0 0 20px rgba(0, 0, 255, 0.5);
            }
        }

        &__refs {
            margin-bottom: 15px;

            a {
                color: #007bff;
                text-decoration: none;
            }

            .ref-left {
                margin-right: 100px;
            }

            .ref-right {
                margin-left: 100px;
            }
        }
    }
</style>
