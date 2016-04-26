var gulp = require('gulp');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');


gulp.task('copy_task', function() {
    gulp.src('*.html')
    .pipe(gulp.dest('../build/'));
    gulp.src('*.js')
    .pipe(gulp.dest('../build/'));
    gulp.src('*.json')
    .pipe(gulp.dest('../build/'));
    gulp.src('css/*.css')
    .pipe(gulp.dest('../build/css'));
    gulp.src('data/*.js')
    .pipe(gulp.dest('../build/data'));
    gulp.src('js/*.js')
    .pipe(gulp.dest('../build/js'));
    gulp.src('lib/*.js')
    .pipe(gulp.dest('../build/lib'));
    gulp.src('partials/*.html')
    .pipe(gulp.dest('../build/partials'));
});

gulp.task('build:dev', function() {
    gulp.src('*.html')
    .pipe(gulp.dest('../build/'));
    gulp.src('*.js')
    .pipe(gulp.dest('../build/'));
    gulp.src('*.json')
    .pipe(gulp.dest('../build/'));
    gulp.src('css/*.css')
    .pipe(gulp.dest('../build/css'));
    gulp.src('js/*.js')
    .pipe(gulp.dest('../build/js'));
    gulp.src('lib/*.js')
    .pipe(gulp.dest('../build/lib'));
});

gulp.task('build:prod', function() {
    gulp.src('*.html')
    .pipe(gulp.dest('../build/'));
    gulp.src('*.js')
    .pipe(gulp.dest('../build/'));
    gulp.src('*.json')
    .pipe(gulp.dest('../build/'));
    gulp.src('css/*.css')
    .pipe(gulp.dest('../build/css'));
    gulp.src('js/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('../build/js'));
    gulp.src('lib/*.js')
    .pipe(gulp.dest('../build/lib'));
});

gulp.task('jshint', function() {
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

