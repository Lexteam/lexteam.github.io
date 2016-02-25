var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var shell = require('gulp-shell');

gulp.task('watch', ['build'], function () {
    gulp.watch('violet/source/**/*.scss', ['build']);
});

gulp.task('scss', function () {
    return gulp.src('./violet/source/violet.scss')
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
