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
        connectionWs(context) {
            context.state.connection = SocketIO(envConfig.WEBSOCKET_HOST, {transports: ['websocket'], reconnectionDelayMax: 5000});// eslint-disable-line no-undef
            context.state.connection.on('connect_error', function () {
                console.log('WS Connection Failed');
            });
            context.state.connection.on('connect', function () {
                console.log('WS Connected to ' + envConfig.WEBSOCKET_HOST);// eslint-disable-line no-undef
                context.state.connectionConnected = true
            });
            context.state.connection.on('disconnect', function () {
                console.log('WS Disconnected');
            });
            context.state.connection.on('builder', (data) => {
                let tmp = {
                    type: data.status === 'error' ? 'error' : 'success',
                    time: 10000
                }
                const site_id = data.site_id
                let findedSite = (context.rootGetters['sites/getSiteList'] || []).find(el=>parseInt(el.id)===parseInt(site_id))
                if (findedSite) {
                    if (data.status === 'error') {
                        tmp.name = 'Ошибка: ' + (data.error || 'Неизвестная ошибка')
                        context.commit('sites/setProcessing',{site_id,pr:0,active: false},{ root: true })
                    } else if (data.status === 'deleted') {
                        tmp.name = 'Сайт был снят с публикации'
                        context.commit('sites/setProcessing',{site_id,pr:0,active: false},{ root: true })
                    } else if (data.status === 'success' || data.status === 'update') {
                        context.commit('sites/setProcessing',{site_id,pr:0,active: true},{ root: true })
                        tmp.name = data.text || 'Сайт был успешно опубликован'
                    }
                    tmp.name += `\nСайт: ${findedSite.name}, http://${findedSite.address}`
                    context.commit('notifications/addMessage', tmp,{ root: true })
                }
            });
        },
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
