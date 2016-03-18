// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    // this.on('ended', function() {
    //   alert(this.);
    // });
  },

  playFirst: function() {
    this.at(0).play();
  }

});