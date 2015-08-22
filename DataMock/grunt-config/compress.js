module.exports = {
    dist: {
        options: {archive: 'build/<%= pkg.name %>-<%= pkg.version %>.zip'},
        files: [
            {src: ['build/**'],dest: ''}
        ]
    }
}