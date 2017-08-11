const gulp      = require('gulp');
const pug       = require('gulp-pug');
const config    = require('../gulpconfig');


const option = {
    pretty: true
}

gulp.task('pug', () =>
    gulp.src(`${config.path.dev.views}/*.pug`)
        .pipe(pug(option))
        .pipe(gulp.dest(config.path.dist.views))
);

