var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var shell = require('gulp-shell');

gulp.task('watch', ['violet:build'], function () {
    gulp.watch('violet/source/**/*.scss', ['violet:build']);
    gulp.watch('indigo/src/**/*.*', ['indigo:build']);
});

gulp.task('violet:scss', function () {
    return gulp.src('./violet/source/violet.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./violet/dist'));
});

gulp.task('indigo:scss', function () {
    return gulp.src('./indigo/src/scss/indigo.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./indigo/dist'));
});

gulp.task('violet:build', ['violet:scss'], function () {
    return gulp.src('./violet/dist/violet.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./violet/dist'));
});

gulp.task('indigo:build', ['indigo:scss'], function () {
    return gulp.src('./indigo/dist/indigo.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./indigo/dist'));
});

gulp.task('serve', ['watch'], shell.task([
    'jekyll serve'
]));

gulp.task('default', ['violet:build', 'indigo:build']);
