'use strict';

/**
 * Gulp
 * @author Marcus Vinícius da R G Cardoso <marcusvy@gmail.com>
 */
var gulp = require('gulp');

var mvCopaiba = require('./mv-copaiba/index');
mvCopaiba.init();

//Default
gulp.task('default', [
  //'server',
  'watch'
]);
