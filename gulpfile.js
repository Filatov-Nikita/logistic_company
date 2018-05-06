var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var gcmq = require('gulp-group-css-media-queries');

var config = {
	src: './src/',
	html: {
		src: '*.html', 
	},
	css: {
		watch: 'precss/**/*.less',
		src: 'precss/style.less',
		dest: 'css'
	}
};

gulp.task('html', function(){
	gulp.src(config.src + config.html.src)
		.pipe(browserSync.reload({
			stream: true
		}));
		
});
		
gulp.task('css', function(){
	gulp.src(config.src + config.css.src)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(gcmq())
		/*
		.pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
		.pipe(cleanCSS({
			level: 2
		}))*/
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.src + config.css.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch(config.src + config.css.watch, ['css']);
	gulp.watch(config.src + config.html.src, ['html']);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: config.src
        },
		//tunnel: true
    });

	/*
		browserSync.init({
			proxy: "location/php1"
		});
	*/
	
});