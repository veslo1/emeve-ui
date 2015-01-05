'use strict';

/**
 * Gulp
 * @author Marcus Vinícius da R G Cardoso <marcusvy@gmail.com>
 */

var mvApp = require('./gulp/index');
mvApp.init();
mvApp.loadTasks();

mvApp.gulp.task('default', [
  //'server',
  'watch'
]);
