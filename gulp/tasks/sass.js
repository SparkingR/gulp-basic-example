const gulp          = require('gulp');
const plumber       = require('gulp-plumber')
const sourcemaps    = require('gulp-sourcemaps');
const sass          = require('gulp-sass');
const postcss       = require('gulp-postcss');
const autoprefixer  = require('autoprefixer');
const cssnano       = require('cssnano');
const config        = require('../gulpconfig');


const plugins = [
    autoprefixer({ browsers: ['last 2 versions'] }),
    cssnano()
];

gulp.task('sass', () =>
    gulp.src(`${config.path.dev.styles}/*.{scss,sass}`)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.path.dist.styles))
);

