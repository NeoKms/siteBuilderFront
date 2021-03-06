import axios from '@/plugins/axios'
const {errRequestHandler} = require('@/plugins/errorResponser')

export default {
    namespaced: true,
    state: {
        siteList: [],
        siteData: false,
        templatesList: [],

        imageDataList: [],
    },
    getters: {
        getSiteList(state) {
            return state.siteList;
        },
        getSiteData(state) {
            return state.siteData
        },
        getTemplatesList(state) {
            return state.templatesList;
        },

        getSiteByIdInd: state => id => {
            return state.sitesDataList.findIndex(siteData => Number(siteData.id) === Number(id));
        },
        getSiteDataList(state) {
            return state.sitesDataList;
        },
        getTemplateById: state => state.templatesList.reduce((out, item) => {
            out[item.id] = item
            return out
        }, {}),

        getImageList(state) {
            return state.imageDataList;
        },
    },
    mutations: {
        setSiteList(state, data) {
            state.siteList = data
        },
        setSiteData(state, data) {
            state.siteData = data
        },
        setTemplateList(state,data) {
            state.templatesList = data
        },


        setImageList(state, data) {
            state.imageDataList = data;
        }
    },
    actions: {
        fetchSiteList(context) {
            return axios.get(`${envConfig.API_URL}/sites`)// eslint-disable-line no-undef
                .then(res => {
                    if (res.data && res.data.message === 'ok') {
                        context.commit('setSiteList', res.data.result)
                        return true
                    } else {
                        return res.data.message || false
                    }
                })
                .catch(err => errRequestHandler(envConfig,err)); // eslint-disable-line no-undef
        },
        fetchSiteData(context, payload) {
            let nowSite = context.getters['getSiteData'];
            if (nowSite!==false && nowSite.id===parseInt(payload.id)) {
                return true
            }
            return axios.get(`${envConfig.API_URL}/sites/${payload.id}`)// eslint-disable-line no-undef
                .then(res => {
                    if (res.data && res.data.message === 'ok') {
                        context.commit('setSiteData', res.data.result)
                        return true
                    } else {
                        return res.data.message || false
                    }
                })
                .catch(err => errRequestHandler(envConfig,err)); // eslint-disable-line no-undef
        },
        fetchTemplatesList(context) {
            if (context.getters.getTemplatesList.length !== 0) {
                return true
            }
            return axios.get(`${envConfig.API_URL}/templates`)// eslint-disable-line no-undef
                .then(res => {
                    if (res.data && res.data.message === 'ok') {
                        context.commit('setTemplateList', res.data.result)
                        return true
                    } else {
                        return res.data.message || false
                    }
                })
                .catch(err => errRequestHandler(envConfig,err)); // eslint-disable-line no-undef
        },
        updateSiteData(context, payload) {
            return axios.post(`${envConfig.API_URL}/sites/${payload.id}`,payload)// eslint-disable-line no-undef
                .then(res => {
                    if (res.data && res.data.message === 'ok') {
                        context.commit('setSiteData', res.data.result)
                        return true
                    } else {
                        return res.data.message || false
                    }
                })
                .catch(err => errRequestHandler(envConfig,err)); // eslint-disable-line no-undef
            //context.commit('setSiteData', {ind: ind, data: payload})
        },



        fetchImageList(context) {
            return axios.get('https://jrgreez.ru/examples/listphoto.php')
                .then(res => {
                    if (res.data && res.data.message === 'ok') {
                        context.commit('setImageList', res.data.result)
                        return true
                    } else {
                        return false
                    }
                })
                .catch(err => {
                    // eslint-disable-next-line no-undef
                    if (envConfig.NODE_ENV!=='production'){
                        console.error(err)
                    }
                    if (err.response.status===400) {
                        return err.response.data.error
                    } else if (err.response.status===401) {
                        return -1
                    } else if (err.response.status===403) {
                        return 404
                    }
                    return ''
                });
        },
    },
};
