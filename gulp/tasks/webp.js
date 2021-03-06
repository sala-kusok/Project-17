// Конвертирует картинки jpg,png,gif в формат webp и переносит в папку build/img

module.exports = function () {
    $.gulp.task('webp', function () {
        return $.gulp.src($.config.paths.webp + '**/*.{jpg,png}')
            .pipe($.gp.tinypngCompress({
                key: 'yPnptfy8hjVP6f0Y0vC7mbdwT4hPZfJs',
                parallel: true,
                parallelMax: 2
            }))
            .pipe($.gulp.dest($.config.output.pathImg))
            .pipe($.gulp.src($.config.paths.webp + '**/*.{jpg,png,gif}'))
            .pipe($.gp.webp({quality: 85}))
            .pipe($.gulp.dest($.config.output.pathImg))
            .pipe($.browserSync.reload({stream: true}));
    });
};