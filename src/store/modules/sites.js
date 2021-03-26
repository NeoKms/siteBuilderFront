import axios from '@/plugins/axios'
const {errRequestHandler} = require('@/plugins/errorResponser')

export default {
    name: 'sites',
    namespaced: true,
    state: {
        siteList: [],
        siteData: false,
        templatesList: [],
        imageDataList: [],
        domains: ['s1.build.lan','s2.build.lan','s3.build.lan','s4.build.lan'],
        permittedDomains: [],
        framesSrc: [
            {
                name: 'Main',
                src: `${envConfig.API_URL}/upload/testsite/index.html`,// eslint-disable-line no-undef
            },
            {
                name: 'Info',
                src: `${envConfig.API_URL}/upload/testsite/Informaciya.html`,// eslint-disable-line no-undef
            },
            {
                name: 'Actions',
                src: `${envConfig.API_URL}/upload/testsite/Akcii.html`,// eslint-disable-line no-undef
            },
            {
                name: 'Publications',
                src: `${envConfig.API_URL}/upload/testsite/Publikacii.html`,// eslint-disable-line no-undef
            },
            {
                name: 'Detail',
                src: `${envConfig.API_URL}/upload/testsite/object.html`,// eslint-disable-line no-undef
            },
            {
                name: 'Contacts',
                src: `${envConfig.API_URL}/upload/testsite/Kontakty.html`,// eslint-disable-line no-undef
            }
        ]
    },
    getters: {
        getFramesSrc(state) {
          return state.framesSrc
        },
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
        getPermittedDomains(state) {
            return state.permittedDomains;
        },
    },
    mutations: {
        setProcessing(state,data) {
            if (state.siteData && parseInt(state.siteData.id)===parseInt(data.site_id)) {
                state.siteData.active = data.active
                state.siteData.processing = data.pr
            }
        },
        setSiteList(state, data) {
            let existDomains = data.filter(el=>el.active===1).map(el=>el.address)
            state.permittedDomains = state.domains.filter(el=>!existDomains.includes(el))
            state.siteList = data
        },
        setSiteData(state, data) {
            if ('img' in data) {
                data.img = reinitImg(data.img)
            }
            if (data.template) {
                data.template = reinitImgInObj(data.template)
            }
            state.siteData = data
        },
        setTemplateList(state,data) {
            data = data.map (el => {
                if ('img' in el) {
                    el.img = reinitImg(el.img)
                }
                return el
            })
            state.templatesList = data
        },
        setImageList(state, data) {
            data = data.map(el => reinitImg(el))
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
        },
        fetchImageList(context) {
            return axios.get(`${envConfig.API_URL}/templates/images`)// eslint-disable-line no-undef
                .then(res => {
                    if (res.data && res.data.message === 'ok') {
                        context.commit('setImageList', res.data.result)
                        return true
                    } else {
                        return false
                    }
                })
                .catch(err => errRequestHandler(envConfig,err));// eslint-disable-line no-undef
        },
        setNewSite(context,payload) {
            return axios.put(`${envConfig.API_URL}/sites`,payload)// eslint-disable-line no-undef
                .then(res => {
                    if (res.data && res.data.message === 'ok') {
                        context.commit('setSiteData', res.data.result)
                        return true
                    } else {
                        return false
                    }
                })
                .catch(err => errRequestHandler(envConfig,err));// eslint-disable-line no-undef
        },
        delSite(context,payload) {
            return axios.delete(`${envConfig.API_URL}/sites/${payload.id}`)// eslint-disable-line no-undef
                .then(res => {
                    if (res.data && res.data.message === 'ok') {
                        return true
                    } else {
                        return false
                    }
                })
                .catch(err => errRequestHandler(envConfig,err));// eslint-disable-line no-undef
        },
        publishSite(context,payload) {
            return axios.put(`${envConfig.API_URL}/sites/${payload.id}/publish`)// eslint-disable-line no-undef
                .then(res => {
                    if (res.data && res.data.message === 'ok') {
                        return true
                    } else {
                        return false
                    }
                })
                .catch(err => errRequestHandler(envConfig,err));// eslint-disable-line no-undef
        },
        unPublishSite(context,payload) {
            return axios.put(`${envConfig.API_URL}/sites/${payload.id}/unpublish`)// eslint-disable-line no-undef
                .then(res => {
                    if (res.data && res.data.message === 'ok') {
                        return true
                    } else {
                        return false
                    }
                })
                .catch(err => errRequestHandler(envConfig,err));// eslint-disable-line no-undef
        },
    },
};
function reinitImg(url) {
    if (url.indexOf('http')===-1) {
        url = `${envConfig.API_URL}/${url}` // eslint-disable-line no-undef
    }
    return url
}
function reinitImgInObj(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            obj[key] = reinitImgInObj(obj[key])
        } else if (key === 'img' && obj[key]) {
            obj[key] = reinitImg(obj[key])
        }
    }
    return obj
}
