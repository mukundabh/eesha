/* 
* @Author: bmdarshan
* @Date:   2015-12-24 23:39:59
* @Last Modified by:   bmdarshan
* @Last Modified time: 2015-12-29 14:22:57
*/

var gulp = require('gulp');
var less = require('gulp-less');
var del = require('del');
var babel = require('gulp-babel');

var LESSFILES = 'app/less/*.less';
var JSXFILES = 'app/{components,pages}/*.jsx';
var VENDORFILES = ['public/lib/react-bootstrap/lib/*.js', 'public/lib/react-bootstrap/lib/**/*.js']

gulp.task('less', function () {
  return gulp.src(LESSFILES)
    .pipe(less())
    .pipe(gulp.dest('public/app/css/'));
});

gulp.task('clean', function () {
  del.sync([
    'public/app/**'
  ]);
});

gulp.task('transpile', function () {
  return gulp.src(JSXFILES)
    .pipe(babel({
      presets: ['es2015','react']
    }))
    .pipe(gulp.dest('public/app/'));
});

gulp.task('default', ['clean','less','transpile']);