'use strict';

/**
 * Gulp
 * @author Marcus Vinícius da R G Cardoso <marcusvy@gmail.com>
 */
var gulp = require('gulp');

var madeira = require('./gulp/index');
madeira.init();

//Default
gulp.task('default', [
  //'server',
  'watch'
]);
