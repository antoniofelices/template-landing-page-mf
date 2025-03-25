const { src, dest, watch, series, parallel } = require('gulp');
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
        'assets/css/plugins/grid.css',
        'assets/css/plugins/flex.css',
        'assets/css/plugins/buttons.css',
        'assets/css/plugins/borders.css',
        'assets/css/plugins/border-radius.css',
        'assets/css/plugins/shadows.css',
        'assets/css/plugins/tabs.css',
        'assets/css/plugins/header.css',
        'assets/css/plugins/footer.css'
    ])
    .pipe(concat('main.css'))
    .pipe(dest('assets/css'));
}

function scripts() {
    return src([
        'assets/js/plugins/mobile-menu.js',
        'assets/js/plugins/tabs.js'
    ])
    .pipe(concat('main.js'))
    .pipe(dest('assets/js'));
}

function watchFiles() {
    watch('assets/css/plugins/*.css', styles);
    watch('assets/js/plugins/*.js', scripts);
}

exports.default = series(parallel(styles, scripts), watchFiles);