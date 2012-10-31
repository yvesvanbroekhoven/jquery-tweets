/*

 jquery-tweets

 Created at: 2012-10-30 16:53:39 +0100
 Updated at: 2012-10-31 11:07:53 +0100

 Author: @ivow
 Version: 1.0.3

*/
(function(a,c){function d(b,f,i){this.element=b;this.url=f;this.id=this.url.hashCode();this.options=a.extend({},h,i);this.cache=c.sessionStorage[e+this.id];this.init()}var e="jquery-tweets",h={doneCallback:null};d.prototype.init=function(){var b=this;c.JSON&&c.Storage&&void 0!==this.cache?this.output(a.parseJSON(this.cache)):a.ajax({dataType:"jsonp",success:function(a){c.JSON&&c.Storage&&(c.sessionStorage[e+b.id]=JSON.stringify(a));b.output(a)},url:b.url})};d.prototype.output=function(b){var f=a("<ul />");
a.each(b,function(b,c){var e=a("<li />"),d=a("<a />"),h=a("<span />"),j=a("<time />"),g=new Date(c.created_at),k=g.getFullYear()+"-"+(g.getMonth()+1)+"-"+g.getDate();d.attr("href","https://twitter.com/"+c.user.screen_name+"/status/"+c.id_str).appendTo(e);h.html(c.text).appendTo(d);j.attr("datetime",g.toISOString()).text(k).appendTo(d);e.appendTo(f)});f.appendTo(a(this.element));a.isFunction(this.options.doneCallback)&&this.options.doneCallback.call(this.element)};a.fn.tweets=function(b,c){return this.each(function(){a.data(this,
"plugin_"+e)||(a.data(this,"plugin_"+e,!0),new d(this,b,c))})};String.prototype.hashCode=function(){var b=0,a,c;if(0==this.length)return b;for(a=0;a<this.length;a++)c=this.charCodeAt(a),b=(b<<5)-b+c,b&=b;return Math.abs(b)}})(jQuery,window);
