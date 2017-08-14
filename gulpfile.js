const gulp          = require('gulp');
const requireDir    = require('require-dir');
const minimist      = require('minimist');
const sequence      = require('gulp-sequence');


requireDir('./gulp/tasks', { recurse: false });

const envOption = {
    default: {
        env: "dev"
    }
}
const option = minimist(process.argv.slice(2), envOption);
console.log(`Mode : ${option.env} `);
global.isProdMode = (option.env === "prod" || option.env === "production");

gulp.task('default', sequence('clean', 'sass', 'pug', 'babel', 'browser-sync', 'watch'));

gulp.task('set-prodmode', () => global.isProdMode = true);
gulp.task('build', sequence('set-prodmode','clean', 'sass', 'pug', 'babel'));