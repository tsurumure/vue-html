define(['axios', 'vuex'], function (axios, Vuex) {
    return {
        namespaced: true,
        state: {
            message: 'hello'
        },
        mutations: {
        },
        actions: {
            GetTest: function (cxt) {
                // cxt.state.loading = false
                return new Promise((resolve) => {
                    var url = 'http://www.zdzp.cn/api/Common/VerificationCode/GetImage?width=85&height=40&type=0'
                    axios.get(url).then(rs => {
                        resolve(rs)
                    })
                })
            }
        }
    }
})
