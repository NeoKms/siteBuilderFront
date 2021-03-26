export default {
    name: 'notifications',
    namespaced: true,
    state: {
        messages: [],
        connectedToBuilder: false
    },
    getters: {
        getMessages(state) {
            return state.messages
        },
        getConnectedToBuilder(state) {
            return state.connectedToBuilder
        }
    },
    mutations: {
        addMessage(state, msgData) {
            if (!msgData.type)
                msgData.type = 'success'
            if (!msgData.time && (!msgData.leftButton || !msgData.rightButton)) {
                msgData.time = 1000
            }
            msgData.id = new Date().getTime()
            state.messages.push(msgData)
            if (msgData.time > 0) {
                setTimeout(() => {
                    state.messages.splice(state.messages.findIndex(elem => elem.id === msgData.id), 1)
                }, msgData.time)
            }
        },
        connectedToBuilder() {
            console.log('connected to builder chanel')
        }
    },
    actions: {
        connectToWsBuilder(context) {
            if (!context.getters['getConnectedToBuilder']) {
                context.dispatch('connectToNewChanel', {
                    chanel: 'builder',
                    success: 'notifications/connectedToBuilder',
                    func: async data => {
                        let tmp = {
                            type: data.status === 'error' ? 'error' : 'success',
                            time: 10000
                        }
                        const site_id = data.site_id
                        let findedSite = (context.rootGetters['sites/getSiteList'] || []).find(el=>parseInt(el.id)===parseInt(site_id))
                        if (findedSite) {
                            if (data.status === 'error') {
                                tmp.name = data.error || 'Неизвестная ошибка'
                            } else if (data.status === 'deleted') {
                                tmp.name = 'Сайт был снят с публикации'
                                context.commit('sites/setProcessing',{site_id,pr:0,active: false},{ root: true })
                            } else if (data.status === 'success') {
                                context.commit('sites/setProcessing',{site_id,pr:0,active: true},{ root: true })
                                tmp.name = 'Сайт был успешно опубликован'
                            }
                            tmp.name += `\nСайт: ${findedSite.name}, http://${findedSite.address}`
                            context.commit('addMessage', tmp)
                        }
                        }
                }, {root: true})
            }
            return true
        },
    }
}
