const gulp      = require('gulp');
const babel     = require('gulp-babel');
const concat     = require('gulp-concat');
const sourcemaps    = require('gulp-sourcemaps');
const config    = require('../gulpconfig');

const plugins = {
    presets: ['es2015']
}

gulp.task('babel', () =>
    gulp.src(`${config.path.dev.js}/*.js`)
        .pipe(sourcemaps.init())
        .pipe(babel(plugins))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.path.dist.js))
)