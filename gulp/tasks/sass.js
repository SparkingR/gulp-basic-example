const gulp          = require('gulp');
const plumber       = require('gulp-plumber')
const sourcemaps    = require('gulp-sourcemaps');
const sass          = require('gulp-sass');
const postcss       = require('gulp-postcss');
const autoprefixer  = require('autoprefixer');
const cssnano       = require('cssnano');
const gulpIf        = require('gulp-if');
const config        = require('../gulpconfig');
const browserSync = require('./browserSync');


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
        .pipe(gulpIf(!global.isProdMode, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(global.isProdMode ? prodPlugins : devPlugins))
        .pipe(gulpIf(!global.isProdMode, sourcemaps.write()))
        .pipe(gulp.dest(config.path.dist.styles))
);

gulp.task('sass:watch', ['sass'], () => 
    browserSync.reload('*.css')
);
