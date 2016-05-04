var gulp = require('gulp'),
    inject = require('gulp-inject'),
    debug = require('gulp-debug'),
    mainBowerFiles = require('main-bower-files'),
    sassCompile = require("gulp-sass"),
    filter = require('gulp-filter'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCss = require('gulp-minify-css'),
    minifyJS = require('gulp-uglify'),
    minifyHTML = require('gulp-html-minifier'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync'),
    minifyImgs = require('gulp-imagemin'),
    reload = browserSync.reload,
    ngAnnotate = require('gulp-ng-annotate'),
    ngFilesort = require('gulp-angular-filesort'),
    templateCache = require('gulp-angular-templatecache'),
    plumber = require('gulp-plumber');


//variables
var paths = {
    app: __dirname + '/src/',
    prod: __dirname + '/www/',
    javascript: '**/*.js',
    styles: ['**/*.scss', '**/*.css'],
    index: './index.html',
    templates: './modules/**/*.html',
    images: './assets/imgs/**/*.{png,jpg,jpeg,gif}',
    fonts: './assets/fonts/**/*'
}

//definitions
gulp.task('serve', ['injectFiles'], serve);
gulp.task('clean', clean);
gulp.task('wiredep', wiredep);
gulp.task('injectFiles', ['minifyStyles', 'minifyScripts', 'minifyTemplates', 'wiredep', 'copyImgs', 'copyFonts'], injectFiles);
gulp.task('minifyStyles', minifyStyles);
gulp.task('minifyTemplates', minifyTemplates);
gulp.task('minifyScripts', minifyScripts);
gulp.task('copyImgs', copyImgs);
gulp.task('copyFonts', copyFonts);
gulp.task('bs-reload', function() {
    browserSync.reload();
});

function copyImgs() {
    return gulp.src(paths.images, {
            cwd: paths.app
        })
        .pipe(plumber())
        .pipe(minifyImgs())
        .pipe(gulp.dest('./assets/imgs/', {
            cwd: paths.prod
        }))
}

function copyFonts() {
    return gulp.src(paths.fonts, {
            cwd: paths.app
        })
        .pipe(plumber())
        .pipe(gulp.dest('./assets/fonts', {
            cwd: paths.prod
        }))
}

function injectFiles() {
    var sources = gulp.src(['lib/**', 'vendor/**', 'assets/**/*.css'], {
        cwd: paths.prod
    });
    return gulp.src('./index.html', {
            cwd: paths.prod
        })
        .pipe(plumber())
        .pipe(inject(sources, {
            addRootSlash: false
        }), {
            cwd: './www'
        })
        .pipe(gulp.dest(paths.prod));
}

function wiredep() {

    var filterJS = filter('**/*.js', {
        restore: true
    });
    var filterCSS = filter('**/*.css', {
        restore: true
    });

    return gulp.src(mainBowerFiles())
        .pipe(plumber())
        .pipe(filterJS)
        .pipe(minifyJS())
        .pipe(concat('lib.min.js'))
        .pipe(filterJS.restore)
        .pipe(filterCSS)
        .pipe(sourcemaps.init())
        .pipe(concat('lib.min.css'))
        .pipe(sassCompile({
            outputStyle: 'compressed'
        }).on('error', sassCompile.logError))
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(filterCSS.restore)
        .pipe(gulp.dest('./lib', {
            cwd: paths.prod
        }))
        .pipe(browserSync.stream())

}

function minifyTemplates() {
    return gulp.src([paths.index, "!./lib/**", "./index.html"], {
            cwd: paths.app
        })
        .pipe(plumber())
        .pipe(minifyHTML({
            removeComments: false,
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(paths.prod))
        .pipe(browserSync.stream());
}

function minifyScripts() {
    var filterHTML = filter("**/*.html", {
        restore: true
    });
    var filterJS = filter('**/*.js', {
        restore: true
    });

    return gulp.src([paths.javascript, '!./lib/**', paths.templates], {
            cwd: paths.app
        })
        .pipe(plumber())
        .pipe(filterHTML)
        .pipe(templateCache())
        .pipe(filterHTML.restore)
        .pipe(filterJS)
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(ngFilesort())
        .pipe(minifyJS())
        .pipe(concat('./vendor/vendor.min.js'))
        .pipe(sourcemaps.write())
        .pipe(filterJS.restore)
        .pipe(gulp.dest(paths.prod))
        .pipe(browserSync.stream());
}


function minifyStyles() {
    return gulp.src(paths.styles, {
            cwd: paths.app
        })
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sassCompile({
            outputStyle: 'compressed'
        }).on('error', sassCompile.logError))
        .pipe(minifyCss())
        .pipe(concat('./assets/css/vendor.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.prod))
        .pipe(browserSync.stream());
}

function serve() {
    browserSync.init(null, {
        server: {
            baseDir: "www",
            port: 9000
        },
        files: [paths.app + "**.*"],
        injectChanges: true,
        reloadDelay: 2000
    });

    gulp.watch([paths.app + './**/*.{scss,css}'], ['minifyStyles', "bs-reload"]);
    gulp.watch([paths.app + paths.javascript, paths.app + paths.templates], ["minifyScripts", "bs-reload"]);
    gulp.watch(paths.app + paths.index, ["injectFiles", "bs-reload"]);
    gulp.watch(paths.app + paths.images, ["copyImgs", "bs-reload"])

}
