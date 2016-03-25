var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/scss/**/*.scss', ['build']);
});

gulp.task('scss', function () {
    return gulp.src('./src/scss/violet.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['scss'], function () {
    return gulp.src('./dist/violet.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build']);
