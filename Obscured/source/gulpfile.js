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
 
gulp.task('preview', () => {
  return gulp
  .src(PATHS.dev)
    .pipe(pug({
      pretty: true,
      locals: require(PATHS.translation)
    }))
    .pipe(gulp.dest(PATHS.preview))
})

gulp.task('build',  gulp.series(['html']))

gulp.task('dev',  gulp.series(['preview']))

gulp.task('watch', gulp.series(['preview'], () => {
  gulp.watch(['./app/**/*.pug','./app/**/*.js'], gulp.series(['preview']))
}))
