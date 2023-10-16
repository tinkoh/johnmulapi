import gulp from 'gulp'
import { deleteAsync } from 'del'
import minify from 'gulp-json-minify'
import rename from 'gulp-rename'

gulp.task('clean', async function () {
  return await deleteAsync(['quotes/quotes.min.json'])
})

gulp.task('minify', async function() {
  return gulp.src(['quotes/quotes.json'])
    .pipe(minify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('quotes'))
})

gulp.task('default', gulp.series(['clean', 'minify']))