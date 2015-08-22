module.exports = {
    options: {configFile: 'WebContent/app/config/test/unit/karma.conf.js'},
    unit: {
        singleRun: true
    },
    continuous: {singleRun: false, autoWatch: true}
}