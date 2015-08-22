module.exports = {
    app: {
        expand: true,
            cwd: './',
            src: [
            "app/config/**/*.js",
            "app/E2EMocks/**/*.js",
            "app/src/**/*.js",
            "!app/src/**/*.mock.js",
            "!app/src/**/*.spec.js",
            "!app/vendor/*"
        ],
            dest: 'ngmin'
    }
}