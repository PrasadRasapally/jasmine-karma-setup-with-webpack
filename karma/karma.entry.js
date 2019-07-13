
define(function (require) {
    var namedModule = require('es6-shim');
});

define(function (require) {
    var namedModule = require('reflect-metadata');
});

define(function (require) {
    var namedModule = require('zone.js/dist/zone');
});
define(function (require) {
    var namedModule = require('zone.js/dist/long-stack-trace-zone');
});
define(function (require) {
    var namedModule = require('zone.js/dist/jasmine-patch');
});
define(function (require) {
    var namedModule = require('zone.js/dist/async-test');
});
define(function (require) {
    var namedModule = require('zone.js/dist/fake-async-test');
});
define(function (require) {
    var namedModule = require('zone.js/dist/sync-test');
});

define(function (require) {
    const browserTesting = require('@angular/platform-browser-dynamic/testing');
});

define(function (require) {
    const browserTesting = require('require-context/register')
});

var coreTesting;
define(function (require) {
    coreTesting = require('@angular/core/testing');
});

/*coreTesting.setBaseTestProviders(
    browserTesting.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    browserTesting.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);*/

const context = require.context('../src/', true, /\.spec\.ts$/);

context.keys().forEach(context);

Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;