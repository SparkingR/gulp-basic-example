const gulp      = require('gulp');
const config    = require('../gulpconfig');


gulp.task('watch', () => {
         gulp.watch(`${config.path.dev.app}/**/*.pug`, ['pug:watch']);
         gulp.watch(`${config.path.dev.app}/**/*.sass`, ['sass:watch']);
         gulp.watch(`${config.path.dev.app}/**/*.js`, ['babel:watch']);
         gulp.watch(`${config.path.dev.app}/assets/*.{jpg,jpeg,png,svg,ico}`, ['image:watch']);
         gulp.watch(`${config.path.dev.app}/assets/favicons/*.{jpg,jpeg,png,svg,ico}`, ['favicon:watch']);
    }
)