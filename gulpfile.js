
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const del = require('del');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');



gulp.task ('css', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename({
      suffix: ".min",
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('clean', () => {
  return del('css')
})


gulp.watch("./sass/**/*.scss", gulp.series("css"));
gulp.task("start", gulp.series("clean","pug", "css"));
