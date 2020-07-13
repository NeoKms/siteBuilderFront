<template>
  <div id="app">
	<PushNotifications/>
<!--		<button @click="testNotif">Тестовая уведомлялка</button>-->
<!--		<button @click="testNotif2">Тестовая уведомлялка</button>-->
	<div class="navbar">
		<router-link to="/" class="navbar__brand"><img src="../public/assets/img/logo.png" width="100"></router-link>
		<div class="navbar__items">
			<router-link to="/" class="nav_item">На главную</router-link>
			<router-link to="/site" class="nav_item">Перечень сайтов</router-link>
		</div>
	</div>
		<router-view class="main-body" :key="this.$route.path"/>
  </div>
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
            this.$store.commit('addMessage', {
                name: 'Тест 1222222222222222222222222222\n222222222222222222222222222222\n2222222222222222222',
                leftButton: 'Ok',
				rightButton: 'No',
				action: 'test'
            })
        },
        testNotif2() {
            this.$store.commit('addMessage', {
                name: 'Тест 2',
                type: 'warning',
                time: 1000,
            })
        }
	}
}
</script>

<style lang="scss">
	body, html {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	a {
		color: #007bff;
		text-decoration: none;
	}
	.main-body {
		max-width: 960px;
		text-align: center;
		width: 100%;
		background-color: #f5f5f5;
		padding: 15px;
		box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
		margin: 5% auto 5%;
	}
	.navbar {
		background-color: #f8f9fa;
		box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
		position: relative;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: .5rem 1rem;
		&__items {
			display: flex;
			flex-basis: auto;
			flex-grow: 1;
			align-items: center;
		}
		&__brand {
			display: inline-block;
			padding-top: .3125rem;
			padding-bottom: .3125rem;
			margin-right: 1rem;
			font-size: 1.25rem;
			line-height: inherit;
			white-space: nowrap;
		}
		.nav_item {
			padding: 4px 8px 4px 8px;
			text-decoration: none;
			color: rgba(0,0,0,.5);
			&:hover {
				color: black;
			}
			&.router-link-exact-active {
				color: black;
			}
		}
	}

</style>
