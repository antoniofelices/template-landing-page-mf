const { dest, watch, src, series } = require('gulp');
// const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return src('./assets/scss/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(dest('assets/css'));
}

function watchFiles() {
    watch('assets/scss/plugins/*.scss', styles);
}

exports.default = series(styles, watchFiles);