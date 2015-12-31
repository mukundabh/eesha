/* 
* @Author: bmdarshan
* @Date:   2015-12-24 23:39:59
* @Last Modified by:   bmdarshan
* @Last Modified time: 2015-12-31 12:15:17
*/

var gulp = require('gulp');
var less = require('gulp-less');
var del = require('del');
var babel = require('gulp-babel');
var shell = require('gulp-shell');

var LESSFILES = 'app/less/*.less';
var JSXFILES = 'app/{components,pages}/*.jsx';

gulp.task('less', function () {
  return gulp.src(LESSFILES)
    .pipe(less())
    .pipe(gulp.dest('public/app/css/'));
});

gulp.task('clean', function () {
  del.sync([
    'js/app/**',
    'public/main-built.js'
  ]);
});

gulp.task('transpile', function () {
  return gulp.src(JSXFILES)
    .pipe(babel({
      presets: ['es2015','react']
    }))
    .pipe(gulp.dest('js/app/'));
});

gulp.task('build-page', function () {
  return gulp.src('')
    .pipe(shell([
      ('r.js -o build.js'),
      'echo `date "+[%H:%M:%S]"` r.js built main-built.js'
    ]));
});

gulp.task('default', ['clean', 'less', 'transpile']);