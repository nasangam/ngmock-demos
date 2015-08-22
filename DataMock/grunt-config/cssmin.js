module.exports = {
    target: {
        files: [{
            expand: true,
            cwd: './',
            src: [
                "app/styles/css/*.css",
                "vendor/bootstrap/css/bootstrap-ie7.css"
            ],

            dest: 'ngmin/css/',
            ext: '.min.css'
        }]
    }
}