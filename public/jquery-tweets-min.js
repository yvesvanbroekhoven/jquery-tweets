/*

 jquery-tweets

 Created at: 2012-10-30 16:53:39 +0100
 Updated at: 2012-10-31 10:30:09 +0100

 Author: @ivow
 Version: 1.0.0

*/
(function(b){function e(a,c,i){this.element=a;this.url=c;this.id=this.url.hashCode();this.options=b.extend({},g,i);this.cache=window.sessionStorage[d+this.id];this.init()}var d="jquery-tweets",g={};e.prototype.init=function(){var a=this;window.JSON&&window.Storage&&void 0!==this.cache?this.output(b.parseJSON(this.cache)):b.ajax({dataType:"jsonp",success:function(c){window.JSON&&window.Storage&&(window.sessionStorage[d+a.id]=JSON.stringify(c));a.output(c)},url:a.url})};e.prototype.output=function(a){var c=
b("<ul />");b.each(a,function(a,d){var e=b("<li />"),h=b("<a />"),g=b("<span />"),j=b("<time />"),f=new Date(d.created_at);created_at_formated=f.getFullYear()+"-"+(f.getMonth()+1)+"-"+f.getDate();h.attr("href","https://twitter.com/"+d.user.screen_name+"/status/"+d.id_str).appendTo(e);g.html(d.text).appendTo(h);j.attr("datetime",f.toISOString()).text(created_at_formated).appendTo(h);e.appendTo(c)});c.appendTo(b(this.element))};b.fn.tweets=function(a,c){return this.each(function(){b.data(this,"plugin_"+
d)||(b.data(this,"plugin_"+d,!0),new e(this,a,c))})};String.prototype.hashCode=function(){var a=0,c,b;if(0==this.length)return a;for(c=0;c<this.length;c++)b=this.charCodeAt(c),a=(a<<5)-a+b,a&=a;return window.Math.abs(a)}})(jQuery);
