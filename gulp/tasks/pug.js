const gulp          = require('gulp');
const plumber       = require('gulp-plumber')
const pug           = require('gulp-pug');
const config        = require('../gulpconfig');
const browserSync   = require('./browserSync');

// failed when build due to real-time change global.isPordMode in task "set-prodmode"
// const pugOption = {
//     pretty: !global.isProdMode
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