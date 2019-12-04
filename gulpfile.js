'use strict';

const path_to_main_scss_file = 'styles/main.scss'; // путь до главного scss файла
const scss_path_to_watch = 'styles/**/*.scss'; // наблюдать за изменениями во всех папках в папке 'styles', scss с любым именем файла
const destination_path = 'dist/'; // папка куда положить итоговый css
const final_css_name = 'styles.css'; // имя итоговогой файла


const gulp         = require('gulp');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat       = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const browser_list = ['last 2 versions', 'ie >= 10'];

function sync() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch(scss_path_to_watch, {ignoreInitial: false}, build_sass);
	gulp.watch("./*.html").on('change', browserSync.reload);
}

function build_sass() {
	return gulp.src(path_to_main_scss_file) // get scss file from path
	.pipe(sourcemaps.init()) // init sourcemaps (for resolving from which scss file your css selector was built) http://prntscr.com/m6rj2p
	.pipe(sass().on('error', sass.logError)) // compile scss to css
	.pipe(sourcemaps.write()) // write sourcemaps to css files
	.pipe(concat(final_css_name)) // concatenate all compiled css files to 1 file
	.pipe(autoprefixer({browsers: browser_list})) // add vendor prefixes
    .pipe(gulp.dest(destination_path)) // put final css to destination path
    .pipe(browserSync.stream()); // reload browser
}

exports.default = sync;