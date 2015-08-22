module.exports = {
    js: {
        files: [{
            preserveComments: false,
            expand: true,     // Enable dynamic expansion.
            cwd: 'dist',      // Src matches are relative to this path.
            src: ['app.js'], // Actual pattern(s) to match.
            dest: 'dist',   // Destination path prefix.
            ext: '.min.js',   // Dest filepaths will have this extension.
            extDot: 'first'
        }],
        options: {
            mangle: false
        }
    }
}