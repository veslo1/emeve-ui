'use strict';

exports.error = {
  'handleError': function(err){
      console.error(err.toString());
      this.emit('end');
  }
}
