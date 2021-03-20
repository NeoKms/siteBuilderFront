import axios from '@/plugins/axios'
const {errRequestHandler} = require('@/plugins/errorResponser')

export default {
    name: 'objects',
    namespaced: true,
    state: {
        objectList:[]
    },
    getters: {
        getObjectList(state) {
            return state.objectList;
        },
    },
    mutations: {
        setObjectList(state, data) {
            state.objectList = data
        },
    },
    actions: {
        fetchObjectList(context) {
            return axios.get(`${envConfig.API_URL}/objects`)// eslint-disable-line no-undef
                .then(res => {
                    if (res.data && res.data.message === 'ok') {
                        context.commit('setObjectList', res.data.result)
                        return true
                    } else {
                        return res.data.message || false
                    }
                })
                .catch(err => errRequestHandler(envConfig, err)); // eslint-disable-line no-undef
        },
    }
};
