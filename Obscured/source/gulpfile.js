const pug = require('gulp-pug')
const gulp = require('gulp')

const PATHS = {
  dist: '../',
  pug: './app/obscured.pug',
  translation: '../translation.json',
  preview: './dev',
  dev: './app/dev.pug'
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


gulp.task('build',  gulp.series(['html']))

gulp.task('watch', gulp.series(['html'], () => {
  gulp.watch(['./app/**/*.pug','./app/**/*.js'], gulp.series(['html']))
}))
