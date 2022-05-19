const gulp = require('gulp')
const del = require('del')
const minify = require('gulp-json-minify')
const rename = require('gulp-rename')

gulp.task('clean', function () {
  return del(['quotes/quotes.min.json'])
})

gulp.task('minify', function() {
  return gulp.src(['quotes/quotes.json'])
    .pipe(minify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('quotes'))
})

gulp.task('default', gulp.series(['clean', 'minify']))

module.exports = gulp;