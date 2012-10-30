/*

 jquery-tweets

 Created at: 2012-10-30 16:53:39 +0100
 Updated at: 2012-10-30 17:31:44 +0100

 Author: @ivow
 Version: 0.0.0

*/
(function(a){function b(c,d,b){this.element=c;this.url=d;this.options=a.extend({},e,b);this.init()}var e={};b.prototype.init=function(){a.ajax({dataType:"jsonp",success:this.output,url:this.url})};b.prototype.output=function(b){a.each(b,function(b,a){console.log(a.text)})};a.fn.tweets=function(c,d){return this.each(function(){a.data(this,"plugin_jquery-tweets")||(a.data(this,"plugin_jquery-tweets",!0),new b(this,c,d))})}})(jQuery);
