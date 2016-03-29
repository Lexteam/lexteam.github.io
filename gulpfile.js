var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    shell = require('gulp-shell'),
    uglify = require('gulp-uglify');

gulp.task('watch', ['build'], function () {
    gulp.watch('./violet/src/scss/**/*.scss', ['build:scss']);
    gulp.watch('./violet/src/js/**/*.js', ['build:js']);
});

gulp.task('scss', function () {
    return gulp.src('./violet/src/scss/violet.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./violet/dist'));
});

gulp.task('js', function () {
    return gulp.src('./violet/src/js/violet.js')
        .pipe(gulp.dest('./violet/dist'));
})

gulp.task('build:scss', ['scss'], function () {
    return gulp.src('./violet/dist/violet.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./violet/dist'));
});

gulp.task('build:js', ['js'], function () {
    return gulp.src('./violet/dist/violet.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./violet/dist'));
});

gulp.task('build', ['build:js', 'build:scss'], function () {

});

gulp.task('serve', ['watch'], shell.task([
    'jekyll serve'
]));

gulp.task('default', ['build']);
