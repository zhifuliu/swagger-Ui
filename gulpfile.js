var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    browserSync = require('browser-sync').create();

gulp.task('develop', function() {
    livereload.listen();
    nodemon({
        script: 'www',
        ext: 'js jade coffee',
        stdout: false
    }).on('readable', function() {
        this.stdout.on('data', function(chunk) {
            if (/^Express server listening on port/.test(chunk)) {
                livereload.changed(__dirname);
            }
        });
        this.stdout.pipe(process.stdout);
        this.stderr.pipe(process.stderr);
    });

    browserSync.init({
        port: 9001,
        server: {
            baseDir: './public/'
        },
        index: './index.html',
        files: ['**/*.css', '**/*.js', '**/*.json', '**/*.html']
    });
});
gulp.task('default', ['develop']);
