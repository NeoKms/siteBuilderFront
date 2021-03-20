import axios from '@/plugins/axios'
const {errRequestHandler} = require('@/plugins/errorResponser')

export default {
    name: 'login',
    namespaced: true,
    state: {
        user: {
            auth: false
        }
    },
    getters: {
        getUserAuth(state) {
            return state.user.auth
        },
        getUserRighst(state) {
            return state.user.rights
        }
    },
    mutations: {
        login(state, data) {
            state.user = data
            state.user.auth = true
        }
    },
    actions: {
        fetchLogin(context, payload) {
            return axios.post(envConfig.API_URL + '/auth/login', payload)// eslint-disable-line
                .then(response => {
                    const respdata = response.data
                    if (respdata.message && respdata.message === 'ok') {
                        context.commit('login', respdata.result)
                        return true
                    } else {
                        return respdata.message || false
                    }
                })
                .catch(err => errRequestHandler(envConfig,err)); // eslint-disable-line
        },
        fetchCheckLogin(context) {
            return axios.get(envConfig.API_URL + '/auth/checklogin')// eslint-disable-line
                .then(response => {
                    const respdata = response.data
                    if (respdata.message && respdata.message === 'ok') {
                        context.commit('login', respdata.result)
                        return true
                    } else {
                        return false
                    }
                })
                // eslint-disable-next-line no-unused-vars
                .catch(e => {
                    return false
                })
        }
    }
};
