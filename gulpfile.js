'use strict';
 
var gulp = require('gulp');
var sass =  require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/v1/css'));
});

gulp.task('concat', function () {
  return gulp.src('./js/**/*.js')
    .pipe(concat("./dist/v1/all.js"))
    .pipe(gulp.dest('.'));
});