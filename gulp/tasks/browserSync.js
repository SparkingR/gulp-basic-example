const gulp          = require('gulp');
const browserSync   = require('browser-sync').create();
const config        = require('../gulpconfig');


// https://browsersync.io/docs/options
const browserSyncOption = {
    port: 3000,
    reloadThrottle: 2000,
    server: {
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
