const gulp = require('gulp');
const clean = require('gulp-clean');
const config = require('../gulpconfig');

const cleanPublic = () => {
    return gulp.src(config.path.dist.app, { read: false })
        .pipe(clean());
}

gulp.task('clean', () =>
    cleanPublic()
);