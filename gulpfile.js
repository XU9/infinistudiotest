var gulp = require('gulp'), 
    less = require('gulp-less'),
    htmlmin = require('gulp-htmlmin'),
    uglify= require('gulp-uglify'),
	browserSync = require('browser-sync').create(),
	reload=browserSync.reload,
    imagemin = require('gulp-imagemin');
 
gulp.task('testLess', function () {
    gulp.src('src/less/*.less') 
        .pipe(less()) 
        .pipe(gulp.dest('dist/css'))
        .pipe(reload({stream:true}));
});
    
gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
    gulp.src('src/html/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
});

gulp.task('testjsmin', function () {
    gulp.src(['src/js/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(reload({stream:true}));
});

gulp.task('testImagemin', function () {
    gulp.src('src/imgs/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5, 
            progressive: true,
            interlaced: true, 
            multipass: true 
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
    gulp.watch('src/less/*.less',['testLess']);
    gulp.watch('src/js/*.js',['testjsmin']);
    gulp.watch('src/imgs/*.{png,jpg,gif,ico}',['testImagemin']);
    gulp.watch('src/html/*.html',['testHtmlmin']).on('change',reload);
});
 
gulp.task('default',['testLess','testHtmlmin','testjsmin','testImagemin','browser-sync']);
