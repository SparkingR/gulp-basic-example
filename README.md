# gulp-basic-example
A simple example for getting start with gulp.

## Installation
```shell=
npm install
```

## Usage
```shell=
# for development
# include starting server and watching files
gulp

# for production
# html, css and js are minified
gulp build
```

## Packages Used
| Feature | Packages Used |
| :-----: | :-----------: |
| HTML | gulp-pug |
| CSS | gulp-sass,<br>gulp-postcss(autoprefixer, cssnano) |
| JavaScript | gulp-babel(babel-preset-es2015),<br>gulp-concat, gulp-order, gulp-uglify |
| Server | browser-sync |
| Other Utils | gulp-clean, gulp-if, gulp-plumber, gulp-sequence,<br>gulp-sourcemaps, minimist, require-dir |

