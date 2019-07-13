'use strict';

module.exports = (config) => {
    config.set({
        autoWatch: true,
        browsers: ['Chrome', 'PhantomJS'],
        files: [
            '../node_modules/es6-shim/es6-shim.min.js',
            'karma.entry.js'
        ],
        frameworks: ['jasmine', 'requirejs'],
        logLevel: config.LOG_INFO,
        phantomJsLauncher: {
            exitOnResourceError: true
        },
        reporters: ['dots'],
        singleRun: false,
        webpack: require('../webpack/webpack.test'),
        webpackServer: {
            noInfo: true
        }
    })
}