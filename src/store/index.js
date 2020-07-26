import Vue from 'vue';
import Vuex from 'vuex';

import sites from './modules/sites';
import login from './modules/login';
import notifications from './modules/notifications';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		sites,
		login,
		notifications,
	},
	state: {
	},
	mutations: {

	},
	getters: {

	},
});
