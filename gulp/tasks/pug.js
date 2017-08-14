const gulp      = require('gulp');
const plumber   = require('gulp-plumber')
const pug       = require('gulp-pug');
const config    = require('../gulpconfig');
const browserSync = require('./browserSync');


// const pugOption = {
//     pretty: true
// };

gulp.task('pug', () =>
    gulp.src(`${config.path.dev.views}/*.pug`)
        .pipe(plumber())
        .pipe(pug({
            pretty: !global.isProdMode
        }))
        .pipe(gulp.dest(config.path.dist.views))
);

gulp.task('pug:watch', ['pug'], () =>
    browserSync.reload()
);