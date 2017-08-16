const gulp          = require('gulp');
const imagemin      = require('gulp-imagemin');
const gulpIf        = require('gulp-if');
const config        = require('../gulpconfig');
const browserSync   = require('./browserSync');


const imageminOption = [
    imagemin.gifsicle({ interlaced: true }),
    imagemin.jpegtran({ progressive: true }),
    imagemin.optipng({ optimizationLevel: 3 }),
    imagemin.svgo({
        plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
    })
];

gulp.task('image', () =>
    gulp.src(`${config.path.dev.assets}/*.{jpg,jpeg,png,svg,ico}`)
        .pipe(gulpIf(global.isProdMode,imagemin(imageminOption)))
        .pipe(gulp.dest(config.path.dist.assets))
)

gulp.task('image:watch', ['image'], () => 
    browserSync.reload('*.{jpg,jpeg,png,svg,ico}')
)