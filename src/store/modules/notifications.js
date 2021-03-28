export default {
    name: 'notifications',
    namespaced: true,
    state: {
        messages: [],
    },
    getters: {
        getMessages(state) {
            return state.messages
        },
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
    },
    actions: {}
}
