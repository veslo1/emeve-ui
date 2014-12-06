'use strict';

/**
 *  Tarefas comuns
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var wiredep = require('wiredep').stream;

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'del', 'main-bower-files', 'favicons']
});

var appSettings = require('./config.json').appSettings;
var dirDev = appSettings.directory.dev; //app
var dirApp = appSettings.directory.app; //www/app
var dirDemo = appSettings.directory.demo;
//var buildPhp = appSettings.buildPhp;

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

//== Limpeza
gulp.task('clean', function () {
  $.del(['.tmp', '.sass-cache']);
});

gulp.task('clean:core', function () {
  $.del([dirApp]);
});

//== Ruby Sass
gulp.task('sass', function () {
  return gulp.src(dirDev + 'styles/**/*.scss')
    .pipe($.sass())
    .on('error', handleError)
    .pipe(gulp.dest(dirDev + 'styles/'))
    .pipe($.size());
});

gulp.task('styles', function () {
  return gulp.src(dirDev + 'styles/*.css')
    .pipe($.autoprefixer('last 1 version'))
    .pipe($.minifyCss({keepSpecialComments: 0}))
    .pipe(gulp.dest(dirApp + 'styles/'))
    .pipe(reload({stream: true}))
    .pipe($.size());
});

//== Wiredep
gulp.task('bower', function () {
  return gulp.src(dirDev + 'index.html')
    .pipe(wiredep({
      directory: dirDev + 'bower_components',
      ignorePath: dirDev
    }))
    .pipe(gulp.dest(dirDev))
    .pipe(reload({stream: true}));
});

//== JSHint e Scripts
gulp.task('scripts', function () {

  gulp.src([
    dirDev + 'scripts/**/!(app)*.js',
    dirDev + 'scripts/app.js'
  ])
    .pipe($.concat('mv-ui.js'))
    // .pipe($.ngAnnotate())
    //.pipe($.uglify())
    .pipe(gulp.dest(dirApp))
    .pipe(reload({stream: true}))
    .pipe($.size());

  gulp.src(dirDemo + 'scripts/**/*.js')
    .pipe($.concat('demo-app.js'))
    //.pipe($.ngAnnotate())
    //.pipe($.uglify())
    .pipe(gulp.dest(dirDemo))
    .pipe(reload({stream: true}))
    .pipe($.size());

});

gulp.task('jsHint', function () {
  return gulp.src(dirDev + 'scripts/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.size());
});

gulp.task('jsHint:core', function () {
  return gulp.src('gulp/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.size());
});

//== partials
gulp.task('partials', function () {
  return gulp.src(dirDev + 'partials/**/*.html')
    .pipe($.angularHtmlify())
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.ngHtml2js({
      moduleName: appSettings.moduleName,
      prefix: 'partials/'
    }))
    .pipe($.concat('scripts/templates.js'))
    .pipe($.ngAnnotate())
    // .pipe($.uglify())
    .pipe(gulp.dest(dirDev))
    .pipe($.size());
});


gulp.task('ngDirectives', function () {
  var tcOptions = {
    module: 'mvUi.Template',
    standalone:true
  };
  gulp.src(dirDev + 'partials/directives/**/*.html')
    .pipe($.angularTemplatecache(tcOptions))
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(gulp.dest(dirDev + 'scripts/'))
    .pipe(browserSync.reload({stream: true}));
});

//== Injeção do aplicativo no index.html
gulp.task('inject', ['partials'], function () {
  var optionsApp = {
    name: 'mvApp',
    addRootSlash: false,
    ignorePath: [dirDev]
  };
  var sourcesApp = gulp.src(dirDev + 'scripts/**/*.js', {
    read: false
  }).pipe($.print());


  gulp.src(dirDev + 'index.html')
    .pipe($.inject(sourcesApp, optionsApp))
    .pipe(gulp.dest(dirDev))
    .pipe(reload({stream: true}));
});

//== Usemin : gera diretório www/core
gulp.task('html', function () {
  return gulp.src('./' + dirDev + 'index.html')
    .pipe($.usemin({
      css: [$.minifyCss(), $.autoprefixer('last 1 version'), $.csso()],
      //html: [minifyHtml({empty: true})],
      js: [$.ngAnnotate(), $.uglify()]
    }))
    .pipe(gulp.dest(dirApp))
    .pipe(reload({stream: true}));
});

//== Imagens: otimização
gulp.task('images', function () {
  return gulp.src(dirDev + 'images/**/*.{png,jpg,gif}')
    .pipe($.cache.clear())
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest(dirApp + 'images'))
    .pipe($.size());
});

gulp.task('favicon', function (callbackFnc) {
  $.favicons({
    // I/O
    source: {
      small: dirDev + 'favicon/64x64.png',    // Should be 64x64px or smaller
      medium: dirDev + 'favicon/256x256.png',  // Should be between 65x65px to 310x310px
      large: dirDev + 'favicon/500x500.png'     // Should be 311x311px or larger
    },
    dest: dirApp + 'favicon/images',

    // Icon Types
    android: true,
    apple: true,
    coast: true,
    favicons: true,
    firefox: true,
    opengraph: true,
    windows: true,

    // Miscellaneous
    html: null,
    background: 'transparent',
    tileBlackWhite: false,
    manifest: null,
    trueColor: false,
    url: null,
    logging: true,
    callback: callbackFnc
  });
});

//== Bower Fonts
gulp.task('fontsBower', function () {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest(dirApp + 'fonts/bower'))
    .pipe($.size());
});

//== Fontes normais
gulp.task('fontsApp', function () {
  return gulp.src(dirDev + 'fonts/**/*.{eot,svg,ttf,woff}')
    .pipe(gulp.dest(dirApp + 'fonts'))
    .pipe($.size());
});

gulp.task('fonts', ['fontsBower', 'fontsApp']);

gulp.task('build', ['bower', 'styles', 'inject', 'html', 'images', 'fonts']);
