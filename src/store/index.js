import Vue from 'vue';
import Vuex from 'vuex';
import SocketIO from "socket.io-client"

function loadStore() {
    const context = require.context('@/store/modules', true, /.js$/i)
    return context.keys().map(context).map(m => m.default)
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

Vue.use(Vuex);

export default new Vuex.Store({
    modules: loadStore().reduce((resourceModules, resource) => {
        resourceModules[resource.name] = resource;
        return resourceModules
    }, {}),
    state: {},
    mutations: {
        connectionWs(state) {
            state.connection = SocketIO(envConfig.WEBSOCKET_HOST, {transports: ['websocket'], reconnectionDelayMax: 5000});// eslint-disable-line no-undef
            state.connection.on('connect_error', function () {
                console.log('WS Connection Failed');
            });
            state.connection.on('connect', function () {
                console.log('WS Connected to ' + envConfig.WEBSOCKET_HOST);// eslint-disable-line no-undef
                state.connectionConnected = true
            });
            state.connection.on('disconnect', function () {
                console.log('WS Disconnected');
            });
        },
        setConnectToNewChanel: function (state, data) {
            state.connection.on(data.chanel, data.func)
        }
    },
    getters: {
        // eslint-disable-next-line no-unused-vars
        getCopyObj: state => obj => {
            return JSON.parse(JSON.stringify(obj))
        },
        getConnection: state => {
            return state.connectionConnected
        }
    },
    actions: {
        async connectToNewChanel(context, data) {
            if (context.getters.getConnection === -1) {
                await sleep(2000)
                context.dispatch('connectToNewChanel', data)
            } else {
                context.commit(data.success)
                context.commit('setConnectToNewChanel', data)
            }
            return true
        },

    }
});
