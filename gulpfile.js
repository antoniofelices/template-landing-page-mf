const { src, dest, watch, series } = require('gulp')
const concat = require('gulp-concat')

function styles() {
    return src([
        'assets/css/mf/preflight.css',
        'assets/css/mf/fonts.css',
        'assets/css/mf/variables.css',
        'assets/css/mf/global.css',
        'assets/css/mf/type.css',
        'assets/css/mf/colors.css',
        'assets/css/mf/spacing.css',
        'assets/css/mf/utilities.css',
        'assets/css/mf/shapes.css',
        'assets/css/mf/grid.css',
        'assets/css/mf/flex.css',
        'assets/css/mf/borders.css',
        'assets/css/mf/border-radius.css',
        'assets/css/mf/shadows.css',
        'assets/css/custom.css',
    ])
        .pipe(concat('main.css'))
        .pipe(dest('assets/css'))
}

function watchFiles() {
    watch('assets/css/mf/*.css', styles)
}

exports.default = series(styles, watchFiles)
