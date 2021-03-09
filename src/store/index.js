import Vue from 'vue';
import Vuex from 'vuex';

function loadStore() {
    const context = require.context('@/store/modules', true, /.js$/i)
    return context.keys().map(context).map(m => m.default)
}

Vue.use(Vuex);

export default new Vuex.Store({
    modules: loadStore().reduce((resourceModules, resource) => {
        resourceModules[resource.name] = resource;
        return resourceModules
    }, {}),
    state: {},
    mutations: {},
    getters: {
        // eslint-disable-next-line no-unused-vars
        getCopyObj: state => obj => {
            return JSON.parse(JSON.stringify(obj))
        },
    }
});
