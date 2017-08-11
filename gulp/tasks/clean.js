const gulp      = require('gulp');
const clean     = require('gulp-clean');
const config    = require('../gulpconfig');


gulp.task('clean', () => 
    gulp.src(config.path.dist.app, { read: false })
        .pipe(clean())
);