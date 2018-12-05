const gulp = require( 'gulp' ),
    compass = require( 'gulp-compass' );

function compassBuild() {
    return gulp.src( 'scss/**/*.scss' )
        .pipe( compass({
            css: 'css',
            sass: 'scss',
            image: 'img',
            style: 'compressed'
        }) )
        .pipe( gulp.dest( 'css' ) );
}

function watchBuild() {
  gulp.watch( 'scss/**/*.scss', compassBuild );
}

gulp.task( 'default', compassBuild );
gulp.task( 'watch', watchBuild );