const gulp          = require('gulp');
const requireDir    = require('require-dir');
const browserSync   = require('browser-sync').create();
const minimist      = require('minimist');
const sequence      = require('gulp-sequence');


global.browserSync = browserSync;
requireDir('./gulp/tasks', { recurse: false });


const envOption = {
    default: {
        env: "dev"
    }
}
const option = minimist(process.argv.slice(2), envOption);
global.isProdMode = (option.env === "prod" || option.env === "production");
console.log(`Mode : ${option.env} `);


gulp.task('default', sequence('clean', 'sass', 'pug', 'babel'));