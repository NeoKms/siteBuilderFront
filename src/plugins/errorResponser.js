module.exports = {
    errVueHandler: (self,res) => {
        if (res === true) {
            return true
        }
        if (res === -1) {
            self.$router.push({
                name: 'login',
                query: {redirect: self.$route.fullPath}
            })
        } else if (res === 404) {
            self.$router.push({
                name: '404'
            })
        } else {
            self.$store.commit('notifications/addMessage', {
                name: res === '' || res === false ? 'Неизвестная ошибка' : res,
                type: 'error',
                time: 3000,
            })
        }
        return false
    },
    errRequestHandler: (envConfig,err) => {
        if (envConfig.NODE_ENV!=='production'){
            console.error(err)
        }
        if (err.response.status===400) {
            return err.response.data.error
        } else if (err.response.status===401) {
            return -1
        } else if (err.response.status===403) {
            return 404
        } else if (err.response.status===404) {
            return 404
        }
        return ''
    }
};
