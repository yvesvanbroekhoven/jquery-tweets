/** @preserve
 * jquery-tweets
 *
 * Created at: 2012-10-30 16:53:39 +0100
 * Updated at: 2012-10-30 17:31:44 +0100
 *
 * Author: @ivow
 * Version: 0.0.0
 *
 */

/*global jQuery:false*/

(function($) {
  "use strict";

  var plugin_name = 'jquery-tweets',
      defaults    = {};

  function Tweets( element, url, options ) {
    this.element = element;
    this.url     = url;
    this.options = $.extend( {}, defaults, options );

    this.init();
  };

  Tweets.prototype.init = function() {
    $.ajax({
      dataType: 'jsonp',
      success: this.output,
      url: this.url
    });
  };

  Tweets.prototype.output = function( response_data ) {
    $.each( response_data, function(idx, value) {
      console.log( value.text );
    });
  };

  $.fn.tweets = function(url, options ) {
    return this.each(function() {
      if ( !$.data(this, 'plugin_' + plugin_name) ) {
        $.data(this, 'plugin_' + plugin_name, true);
        new Tweets( this, url, options );
      }
    });
  };

}(jQuery));
