export default {
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
            if (!msgData.time && (!msgData.leftButton || !msgData.rightButton))
                msgData.time = 1000
            if (msgData.time && (msgData.leftButton || msgData.rightButton))
                msgData.time = 0
            msgData.id = Date.now().toLocaleString()
            state.messages.push(msgData)
        },
    }
};
