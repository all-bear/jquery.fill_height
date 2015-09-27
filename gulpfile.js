/* buildfile for jquery.fill_height plugin */
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify');

gulp.task('default', function() {
  gulp.src(['jquery.fill_height.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify({ preserveComments: 'some' }))
    .pipe(concat('jquery.fill_height.min.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
  gulp.watch('jquery.fill_height.js', ['default']);
});