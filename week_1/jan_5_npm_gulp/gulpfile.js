var gulp = require('gulp');
var eslint = require('gulp-eslint');

var files = ['gulpfile.js', './lib/greet.js', 'hello.js', './test/hello_test.js'];
gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(eslint()) 
    .pipe(eslint.format());
});

gulp.task('default', ['lint']);
