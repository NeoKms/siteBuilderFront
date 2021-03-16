import axios from '@/plugins/axios'
const {errRequestHandler} = require('@/plugins/errorResponser')

export default {
    name: 'publications',
    namespaced: true,
    state: {
        publicationList:[]
    },
    getters: {
        getPublicationList(state) {
            return state.publicationList;
        },
    },
    mutations: {
        setPublicationList(state, data) {
            state.publicationList = data
        },
    },
    actions: {
        fetchPublicationList(context,payload) {
            return axios.post(`${envConfig.API_URL}/publications/byFilter`,payload)// eslint-disable-line no-undef
                .then(res => {
                    if (res.data && res.data.message === 'ok') {
                        context.commit('setPublicationList', res.data.result)
                        return true
                    } else {
                        return res.data.message || false
                    }
                })
                .catch(err => errRequestHandler(envConfig, err)); // eslint-disable-line no-undef
        },
    }
};
