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


gulp.task('styles', function () {
  return gulp.src(dirDev + 'styles/*.css')
    .pipe($.autoprefixer('last 1 version'))
    .pipe($.minifyCss({keepSpecialComments: 0}))
    .pipe(gulp.dest(dirApp + 'styles/'))
    .pipe(reload({stream: true}))
    .pipe($.size());
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

//== Usemin : compila o assets usados
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

gulp.task('build', ['tool:bower', 'styles', 'inject', 'html', 'tool:images', 'font']);
