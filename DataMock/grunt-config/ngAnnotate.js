module.exports = {
    app: {
        expand: true,
            cwd: './',
            src: [
            "app/**/*.js",
            "!app/**/*.mock.js",
            "!app/**/*.spec.js",
            "!app/vendor/**/*.js"
        ],
            dest: 'ngmin'
    }
}