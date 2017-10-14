'use strict';

// Require packages
let gulp       = require('gulp'),
    print      = require('gulp-print'),
    rename     = require("gulp-rename"),
    fontgen    = require('gulp-fontgen');

gulp.task('font', function() {
  // console.log(gulp.src("./in/*.{ttf,otf}"))
  return gulp.src("./in/*.{ttf,otf}")
  .pipe(rename(function(path){
    path.dirname == '/outttt'
  }))
  .pipe(fontgen({
    dest: "./out/"
  }));
});

// Configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('./in/*.{ttf|otf}', ['font']);
});

// Define the default task that's run on `gulp`
gulp.task('default', ['font', 'watch']);
