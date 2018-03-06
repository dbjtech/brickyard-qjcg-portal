module.exports = {
    modules: [
        'buildtask/build-webpage',
        'buildtask/install',
        'buildtask/watch',
        'buildtask/webpack',
        'buildtask/run',

        'framework/webserver/webpack-dev-server',
        'qjcg-portal',
    ],
    config: {
        'webpack-dev-server': {
        },
    },
}
