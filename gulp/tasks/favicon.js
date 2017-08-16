const gulp          = require('gulp');
const imagemin      = require('gulp-imagemin');
const favicons      = require('gulp-favicons');
const gulpUtil      = require('gulp-util');
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

const faviconOption = {
    html: `${config.path.dist.views}/index.html`,
    replace: true,
    path: "../assets/favicons/",
    background: "#fff",
    display: "browser",
    orientation: "portrait",
    logging: false,
    icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        windows: true,
        yandex: false
    }
};

gulp.task('favicon', () =>
    gulp.src(`${config.path.dev.assets}/favicons/*.{jpg,jpeg,png,svg,ico}`)
        .pipe(favicons(faviconOption).on('error', gulpUtil.log))
        .pipe(gulpIf(global.isProdMode, imagemin(imageminOption)))
        .pipe(gulp.dest(`${config.path.dist.assets}/favicons`))
)

gulp.task('favicon:watch', ['favicon'], () =>
    browserSync.reload('*.{jpg,jpeg,png,svg,ico}')
)
