const gulp = require('gulp')
const del = require('del')
const minify = require('gulp-minify')

gulp.task('clean', function () {
  return del(['quotes/quotes.min.js'])
})

gulp.task('minify', function() {
  return gulp.src(['quotes/quotes.js'])
    .pipe(minify())
    .pipe(gulp.dest('quotes'))
})

gulp.task('default', gulp.series(['clean', 'minify']))

module.exports = gulp;