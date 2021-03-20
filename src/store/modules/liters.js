import axios from '@/plugins/axios'
const {errRequestHandler} = require('@/plugins/errorResponser')

export default {
    name: 'liters',
    namespaced: true,
    state: {
        literList:[]
    },
    getters: {
        getLiterList(state) {
            return state.literList;
        },
    },
    mutations: {
        setLiterList(state, data) {
            state.literList = data
        },
    },
    actions: {
        fetchLiterList(context) {
            return axios.get(`${envConfig.API_URL}/liters`)// eslint-disable-line no-undef
                .then(res => {
                    if (res.data && res.data.message === 'ok') {
                        context.commit('setLiterList', res.data.result)
                        return true
                    } else {
                        return res.data.message || false
                    }
                })
                .catch(err => errRequestHandler(envConfig, err)); // eslint-disable-line no-undef
        },
    }
};
