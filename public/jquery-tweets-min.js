/*

 jquery-tweets

 Created at: 2012-10-30 16:53:39 +0100
 Updated at: 2012-10-31 13:22:40 +0100

 Author: @ivow
 Version: 1.0.3

*/
(function(b,c){function e(a,h,j){this.element=a;this.url=h;this.id=this.url.hashCode();this.options=b.extend({},i,j);this.cache=c.sessionStorage[f+this.id];this.init()}var f="jquery-tweets",i={doneCallback:null};e.prototype.init=function(){var a=this;c.JSON&&c.Storage&&void 0!==this.cache?this.output(b.parseJSON(this.cache)):b.ajax({dataType:"jsonp",success:function(b){c.JSON&&c.Storage&&(c.sessionStorage[f+a.id]=JSON.stringify(b));a.output(b)},url:a.url})};e.prototype.output=function(a){var h=b("<ul />");
b.each(a,function(a,c){var f=b("<li />"),e=b("<a />"),i=b("<span />"),k=b("<time />"),d=new Date(Date.parse(c.created_at.replace(/(\+\S+) (.*)/,"$2 $1"))),l=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate(),g=function(a){return 10>a?"0"+a:a},d=d.getUTCFullYear()+"-"+g(d.getUTCMonth()+1)+"-"+g(d.getUTCDate())+"T"+g(d.getUTCHours())+":"+g(d.getUTCMinutes())+":"+g(d.getUTCSeconds())+"Z";e.attr("href","https://twitter.com/"+c.user.screen_name+"/status/"+c.id_str).appendTo(f);i.html(c.text).appendTo(e);
k.attr("datetime",d).text(l).appendTo(e);f.appendTo(h)});h.appendTo(b(this.element));b.isFunction(this.options.doneCallback)&&this.options.doneCallback.call(this.element)};b.fn.tweets=function(a,c){return this.each(function(){b.data(this,"plugin_"+f)||(b.data(this,"plugin_"+f,!0),new e(this,a,c))})};String.prototype.hashCode=function(){var a=0,b,c;if(0===this.length)return a;for(b=0;b<this.length;b++)c=this.charCodeAt(b),a=(a<<5)-a+c,a&=a;return Math.abs(a)}})(jQuery,window);
