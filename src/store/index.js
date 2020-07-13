import Vue from 'vue';
import Vuex from 'vuex';

import sites from './modules/sites';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		sites,
	},
	state: {
		messages: [],
		user: {
			login: null,
			pass: null,
			auth: false
		}
	},
	mutations: {
		addMessage(state, msgData) {
			if (!msgData.type)
				msgData.type = 'success'
			if (!msgData.time && (!msgData.leftButton || !msgData.rightButton))
				msgData.time = 1000
			if (msgData.time && (msgData.leftButton || msgData.rightButton))
				msgData.time = 0
			msgData.id = Date.now().toLocaleString()
			state.messages.push(msgData)
		},
		login(state, data) {
			console.log(data)
			state.user = data
			state.user.auth = true
		}
	},
	getters: {
		getMessages(state) {
			return state.messages
		},
		getUserAuth(state) {
			return state.user.auth
		}
	},
});
