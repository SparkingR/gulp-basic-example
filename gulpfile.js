const gulp = require('gulp');
const requireDir = require('require-dir');
const browserSync = require('browser-sync').create();

global.browserSync = browserSync;
requireDir('./gulp/tasks', { recurse: false });

gulp.task('default', ['clean','pug']);