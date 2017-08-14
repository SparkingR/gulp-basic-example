const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const config = require('../gulpconfig');


// https://browsersync.io/docs/options#option-minify
const browserSyncOption = {
    server: {
        port: 3000,
        baseDir: config.path.dist.app,
        routes: {
            "/": config.path.dist.views
        }
    }
}

gulp.task('browser-sync', () =>
    browserSync.init(browserSyncOption)
);

module.exports = browserSync;
