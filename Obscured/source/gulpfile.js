const pug = require('gulp-pug')
const gulp = require('gulp')

const PATHS = {
  dist: '../',
  pug: './app/Obscured.pug',
  translation: '../translation.json'
};
 
gulp.task('html', () => {
  return gulp
  .src(PATHS.pug)
    .pipe(pug({
      pretty: true,
      locals: require(PATHS.translation)
    }))
    .pipe(gulp.dest(PATHS.dist))
})

gulp.task('watch', gulp.series(['html'], () => {
  gulp.watch(['./app/**/*.pug','./app/**/*.js'], gulp.series(['html']))
}))

gulp.task('build',  gulp.series(['html']))
