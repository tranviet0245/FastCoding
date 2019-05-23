const gulp = require('gulp');
const sass = require('gulp-sass');
const sassUnicode = require('gulp-sass-unicode');
const autoprefixer = require('gulp-autoprefixer');

const sassOpts = require('../config/sass');

const {
  browserSync
} = require('../utils/browser-sync');

const {
  filesScssLibs,
  distStyle
} = require('../config/directories');

const {
  handleError
} = require('../utils/errors');

gulp.task('build:styles-libs', () => {
  return gulp
    .src(filesScssLibs)
    .pipe(sass(sassOpts))
    .on('error', handleError)
    .pipe(sassUnicode())
    .on('error', handleError)
    .pipe(autoprefixer())
    .on('error', handleError)
    .pipe(gulp.dest(distStyle))
    .pipe(browserSync.stream());
});
