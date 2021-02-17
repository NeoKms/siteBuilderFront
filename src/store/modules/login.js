export default {
    namespaced: true,
    state: {
        user: {
            login: null,
            pass: null,
            auth: false//изменить на фолс при выгрузке
        }
    },
    getters: {
        getUserAuth(state) {
            return state.user.auth
        }
    },
    mutations: {
        login(state, data) {
            state.user = data
            state.user.auth = true
        }
    }
};
