define(['axios', 'vuex'], function (axios, Vuex) {

    return {
        computed: {
            ...Vuex.mapState({
                'message': state => state.foo.message
            })
        },
        methods: {
            ...Vuex.mapActions({
                'GetTest': 'foo/GetTest'
            })
        },
        mounted () {
            // this.$store.dispatch('foo/GetTest')
            // this.GetTest().then(rs => {
            //     console.log(rs.data)
            // })
        },
        data: function () {
            return {}
        }
    }
})
