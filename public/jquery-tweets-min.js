/*

 jquery-tweets

 Created at: 2012-10-30 16:53:39 +0100
 Updated at: 2012-10-31 10:38:55 +0100

 Author: @ivow
 Version: 1.0.1

*/
(function(a){function d(b,e,i){this.element=b;this.url=e;this.id=this.url.hashCode();this.options=a.extend({},g,i);this.cache=window.sessionStorage[c+this.id];this.init()}var c="jquery-tweets",g={doneCallback:null};d.prototype.init=function(){var b=this;window.JSON&&window.Storage&&void 0!==this.cache?this.output(a.parseJSON(this.cache)):a.ajax({dataType:"jsonp",success:function(a){window.JSON&&window.Storage&&(window.sessionStorage[c+b.id]=JSON.stringify(a));b.output(a)},url:b.url})};d.prototype.output=
function(b){var e=a("<ul />");a.each(b,function(b,c){var d=a("<li />"),h=a("<a />"),g=a("<span />"),j=a("<time />"),f=new Date(c.created_at);created_at_formated=f.getFullYear()+"-"+(f.getMonth()+1)+"-"+f.getDate();h.attr("href","https://twitter.com/"+c.user.screen_name+"/status/"+c.id_str).appendTo(d);g.html(c.text).appendTo(h);j.attr("datetime",f.toISOString()).text(created_at_formated).appendTo(h);d.appendTo(e)});e.appendTo(a(this.element));a.isFunction(this.options.doneCallback)&&this.options.doneCallback.call(this.element)};
a.fn.tweets=function(b,e){return this.each(function(){a.data(this,"plugin_"+c)||(a.data(this,"plugin_"+c,!0),new d(this,b,e))})};String.prototype.hashCode=function(){var b=0,a,c;if(0==this.length)return b;for(a=0;a<this.length;a++)c=this.charCodeAt(a),b=(b<<5)-b+c,b&=b;return window.Math.abs(b)}})(jQuery);
