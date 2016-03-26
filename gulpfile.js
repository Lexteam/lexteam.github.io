var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    shell = require('gulp-shell');

gulp.task('watch', ['build'], function () {
    gulp.watch('./violet/src/scss/**/*.scss', ['build']);
});

gulp.task('scss', function () {
    return gulp.src('./violet/src/scss/violet.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./violet/dist'));
});

gulp.task('build', ['scss'], function () {
    return gulp.src('./violet/dist/violet.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./violet/dist'));
});

gulp.task('serve', ['watch'], shell.task([
    'jekyll serve'
]));

gulp.task('default', ['build']);
