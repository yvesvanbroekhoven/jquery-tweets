/*

 jquery-tweets

 Created at: 2012-10-30 16:53:39 +0100
 Updated at: 2012-10-30 20:15:57 +0100

 Author: @ivow
 Version: 0.0.0

*/
(function(c){function d(a,b,f){this.element=a;this.url=b;this.id=this.url.hashCode();this.options=c.extend({},g,f);this.cache=window.sessionStorage[e+this.id];console.log(this);this.init()}var e="jquery-tweets",g={};d.prototype.init=function(){var a=this;window.JSON&&window.Storage&&void 0!==this.cache?(console.log("it is in the cache yo!"),this.output(c.parseJSON(this.cache))):(console.log("not in the cache yo! "),c.ajax({dataType:"jsonp",success:function(b){window.sessionStorage[e+a.id]=JSON.stringify(b);
a.output(b)},url:a.url}))};d.prototype.output=function(a){var b=c("<ul />");c.each(a,function(a,e){var d=c("<li />");d.text(e.text);d.appendTo(b)});b.appendTo(c(this.element))};c.fn.tweets=function(a,b){return this.each(function(f){console.log(f);c.data(this,"plugin_"+e)||(c.data(this,"plugin_"+e,!0),new d(this,a,b))})};String.prototype.hashCode=function(){var a=0,b,c;if(0==this.length)return a;for(b=0;b<this.length;b++)c=this.charCodeAt(b),a=(a<<5)-a+c,a&=a;return window.Math.abs(a)}})(jQuery);
