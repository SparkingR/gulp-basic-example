const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const config = require('../gulpconfig');


gulp.task('browser-sync', () =>
    browserSync.init({
        server: {
            baseDir: config.path.dist.app,
            routes: {
                "/": config.path.dist.views
            }
        }
    })
);

module.exports = browserSync;
