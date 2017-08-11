const gulp          = require('gulp');
const sass          = require('gulp-sass');
const postcss       = require('gulp-postcss');
const autoprefixer  = require('autoprefixer');
const cssnano       = require('cssnano');
const sourcemaps    = require('gulp-sourcemaps');
const config        = require('../gulpconfig');


const plugins = [
    autoprefixer({ browsers: ['last 2 versions'] }),
    cssnano()
];

gulp.task('sass', () =>
    gulp.src(`${config.path.dev.styles}/*.{scss,sass}`)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.path.dist.styles))
);

