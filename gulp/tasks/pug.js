const gulp = require('gulp');
const pug = require('gulp-pug');
const config = require('../gulpconfig');

const compilePug = () => {
    return gulp.src(`${config.path.dev.views}/*.pug`)
        .pipe(pug({
            pretty: true,
        }))
        .pipe(gulp.dest(config.path.dist.views));
}

gulp.task('pug', () =>
    compilePug()
);
