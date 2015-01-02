'use strict';

/**
 * Gulp
 * @author Marcus Vinícius da R G Cardoso <marcusvy@gmail.com>
 */
var gulp = require('gulp');

require('require-dir')('./gulp/tool');
require('require-dir')('./gulp/angular');
require('require-dir')('./gulp/font');
require('require-dir')('./gulp/deploy');
require('require-dir')('./gulp');

//Default
gulp.task('default', [
    'serve',
    'watch'
]);
