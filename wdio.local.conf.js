exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    bail: 0,
    baseUrl: 'http://automationpractice.com',
    waitforTimeout: 20000,
    connectionRetryTimeout: 20000,
    connectionRetryCount: 1,
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 20000,
        helpers: [require.resolve('@babel/register')]
    },
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--window-size=1920,1080']
        }
    }]
}
