const gulp          = require('gulp');
const requireDir    = require('require-dir');
const browserSync   = require('browser-sync').create();
const sequence      = require('gulp-sequence');


global.browserSync = browserSync;
requireDir('./gulp/tasks', { recurse: false });

gulp.task('default', sequence('clean','sass','pug','babel'));