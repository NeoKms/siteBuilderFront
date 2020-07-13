<template>
	<div class="login-form">
		<div class="form">
			<img :src="logoImg" class="form__logo">
			<h2> Please Sign in</h2>
			<input type="text" id="login" name="login" placeholder="root" v-model="formData.login" required autofocus><br>
			<input type="password" id="password" name="password" placeholder="root" v-model="formData.pass" required>
			<div class="form__refs">
				<router-link :to="{name: 'registration'}" class="ref-left">Sign up</router-link>
				<router-link :to="{name: 'resetPass'}" class="ref-right">Forgot password?</router-link>
			</div>
			<button type="submit" name="done" @click="login">Sign in</button>
			<div class="error-text">
				{{error}}
			</div>
			<h4>Sign in in with your social account</h4>
			<div class="sign-social">

			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "loginForm",
		data() {
            return {
                formData: {
                    login: 'root',
                    pass: 'root'
                },
                logoImg: 'assets/img/logo.png',
                error: ''
            }
        },
		methods: {
            login: function () {
				//auth in API
				this.$store.commit('login',this.formData)
				const redirectPath = this.$route.query.redirect || '/'
				// this.$router.go(-1)
				this.$router.push(redirectPath)
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
