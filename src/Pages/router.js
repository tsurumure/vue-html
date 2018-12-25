define([], function () {
    return [
        {
            path: '/',
            route: 'text!Pages/views/home/home.html',
            lifecycle: 'Pages/views/home/home'
        },
        {
            path: '/foo',
            route: 'text!Pages/views/foo/foo.html',
            lifecycle: 'Pages/views/foo/foo',
            store: 'Pages/views/foo/store'
        }
    ]
})
