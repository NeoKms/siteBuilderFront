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
		siteList: [],
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
	},
	getters: {
		getMessages(state) {
			return state.messages;
		},
	},
});
