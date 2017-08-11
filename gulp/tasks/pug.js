const gulp      = require('gulp');
const plumber   = require('gulp-plumber')
const pug       = require('gulp-pug');
const config    = require('../gulpconfig');


const option = {
    pretty: true
}

gulp.task('pug', () =>
    gulp.src(`${config.path.dev.views}/*.pug`)
        .pipe(plumber())
        .pipe(pug(option))
        .pipe(gulp.dest(config.path.dist.views))
);

