const { src, dest, watch, series } = require('gulp');
const concat = require('gulp-concat');

function styles() {
    return src([
        'assets/css/plugins/preflight.css',
        'assets/css/plugins/fonts.css',
        'assets/css/plugins/variables.css',
        'assets/css/plugins/global.css',
        'assets/css/plugins/typography.css',
        'assets/css/plugins/colors.css',
        'assets/css/plugins/spacing.css',
        'assets/css/plugins/utilities.css',
        'assets/css/plugins/screen-visibility.css',
        'assets/css/plugins/shapes.css',
        'assets/css/plugins/grid.css',
        'assets/css/plugins/flex.css',
        'assets/css/plugins/borders.css',
        'assets/css/plugins/border-radius.css',
        'assets/css/plugins/shadows.css'
    ])
    .pipe(concat('main.css'))
    .pipe(dest('assets/css'));
}

function watchFiles() {
    watch('assets/css/plugins/*.css', styles);
}

exports.default = series(styles, watchFiles);