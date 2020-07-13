export default {
    state: {
        user: {
            login: null,
            pass: null,
            auth: true//изменить на фолс при выгрузке
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
