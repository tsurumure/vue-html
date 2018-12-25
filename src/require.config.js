require.config({
    urlArgs: 'v=' + (new Date()).getTime(),
    map:{
        '*': {
            'css': 'Plugins/require/css.min',
            'less': 'Plugins/require/less.min',
            'text': 'Plugins/require/text.min'
        }
    },
    baseUrl: '/src',
    waitSeconds:0,
    paths: {
        'vue': 'Plugins/vue.min', 'vue-router': 'Plugins/vue-router.min',
        'vuex': 'Plugins/vuex.min',
        'axios': 'Plugins/axios.min',
        'nprogress': 'Plugins/nprogress/nprogress'
    },
    shim: {
        'vue-router': ['vue'], 'vuex': ['vue']
    }
})
