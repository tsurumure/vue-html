require(['./require.config'], function() {

    // Style
    require(['less!Assets/css/global', 'css!Plugins/nprogress/nprogress'], function() {
        console.log('style loeaded!')

        // Start
        require([
            'vue', 'vue-router', 'vuex', 'axios', 'nprogress',
            'Pages/router'
        ], function(Vue, VueRouter, Vuex, axios, NProgress){

            // Render DOM loaded
            console.log('render!')
            document.querySelector('body').classList.add('loaded')


            Vue.use(VueRouter)
            Vue.use(Vuex)

            // Components loaded
            require(['text!Pages/layouts/header.html'], function(){
                Vue.component('layout-header', {
                    data: function() {
                        return { title: 'hi' }
                    },
                    template: require('text!Pages/layouts/header.html')
                })
            })


            // Require: router.js
            const routesGroup = require ('Pages/router')
            const routesRequires = []
            routesGroup.forEach(item => {
                routesRequires.push(item.route)
                if (item.lifecycle) routesRequires.push(item.lifecycle)
                if (item.store) routesRequires.push(item.store)
            })

            require(routesRequires, function (){

                //-------------------- router --------------------
                const routes = routesGroup.map(item => {
                    return {
                        path: item.path,
                        component: Object.assign({
                            template: require(item.route)
                        }, require(item.lifecycle))
                    }
                })
                const router = new VueRouter({ routes })
                router.beforeEach((to, from, next) => {
                    // console.log('loading..')
                    NProgress.start()
                    next()
                })
                router.beforeResolve((to, from, next) => {
                    // console.log('loaded')
                    NProgress.done()
                    next()
                })
                //-------------------- #end router --------------------

                //-------------------- axios --------------------
                axios.defaults.baseURL = ''
                axios.interceptors.request.use((config) => {
                    NProgress.start()
                    return config
                })
                axios.interceptors.response.use((response) => {
                    NProgress.done()
                    return response
                }, (err) => {
                    console.log(err)
                    return Promise.reject(err)
                })
                //-------------------- #end axios --------------------

                //-------------------- store --------------------
                const store = new Vuex.Store({
                    modules: {
                        foo: require('Pages/views/foo/store')
                    },
                    state: { count: 1 },
                    getters: {}, mutations: {}, actions: {}
                })
                //-------------------- #end store --------------------


                let app = new Vue({
                    router, store,
                    data: {
                        message: 'Tom'
                    }
                })
                app.$mount('#app')
                //
            })
        })

    });

})
