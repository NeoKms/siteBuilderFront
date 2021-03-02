import axios from '../../plugins/axios'

export default {
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
                        respdata.message==='error'?respdata.message=-1:''
                        return respdata.message || -1
                    }
                })
                .catch(e => {
                    console.log('err in fetchLogin')
                    console.log(e)
                    return -1
                })
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
