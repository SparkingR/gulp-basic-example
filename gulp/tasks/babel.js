const gulp          = require('gulp');
const plumber       = require('gulp-plumber');
const sourcemaps    = require('gulp-sourcemaps');
const babel         = require('gulp-babel');
const order         = require('gulp-order');
const concat        = require('gulp-concat');
const config        = require('../gulpconfig');


const plugins = {
    presets: ['es2015']
}

const fileOrder = [
    `${config.path.dev.js}/b.js`,
    `${config.path.dev.js}/a.js`
]

gulp.task('babel', () =>
    gulp.src(`${config.path.dev.js}/*.js`)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel(plugins))
        .pipe(order(fileOrder, {base: './'}))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.path.dist.js))
)