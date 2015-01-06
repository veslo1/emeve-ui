'use strict';

/**
 *  Delete direcory
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;

//== Inicialização
gulp.task('core:init', function () {
    mvApp.assertRepositoriesMetadata();
});
