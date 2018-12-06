var gulp = require('gulp');
var copy = require('gulp-copy');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var moduleImporter = require('sass-module-importer');
var watch = require('gulp-watch');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp.src('./sass/stencila.sass')
    .pipe(sass({
        importer: moduleImporter(),
        outputStyle: 'nested'
    }))
    .pipe(rename('stencila.min.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass-compress', function() {
  return gulp.src('./sass/stencila.sass')
    .pipe(sass({
        importer: moduleImporter(),
        outputStyle: 'compressed'
    }))
    .pipe(rename('stencila.min.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy-images', function() {
  return gulp.src('./images/*')
    .pipe(copy('./'))
    .pipe(gulp.dest('./dist/images'));
})

gulp.task('watch', function () {
    gulp.watch('sass/**/*.sass', { ignoreInitial: false }, gulp.series('sass', 'copy-images'))
    // When there is a change,
    // log a message in the console
    .on('change', function(path, stats) {
        console.log('File ' + path + ' was changed, running tasks...');
    })
});

exports.build = gulp.series('sass-compress', 'copy-images');
exports.default = gulp.series('sass', 'copy-images');
exports.watch = gulp.series('watch');
