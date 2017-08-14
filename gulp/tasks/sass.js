const gulp          = require('gulp');
const plumber       = require('gulp-plumber')
const sourcemaps    = require('gulp-sourcemaps');
const sass          = require('gulp-sass');
const postcss       = require('gulp-postcss');
const autoprefixer  = require('autoprefixer');
const cssnano       = require('cssnano');
const gulpif        = require('gulp-if');
const config        = require('../gulpconfig');


const prodPlugins = [
    autoprefixer({ browsers: ['last 2 versions'] }),
    cssnano()
];

const devPlugins = [
    autoprefixer({ browsers: ['last 2 versions'] })
];

gulp.task('sass', () =>
    gulp.src(`${config.path.dev.styles}/*.{scss,sass}`)
        .pipe(plumber())
        .pipe(gulpif(!isProdMode, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(isProdMode ? prodPlugins : devPlugins))
        .pipe(gulpif(!isProdMode, sourcemaps.write()))
        .pipe(gulp.dest(config.path.dist.styles))
);

