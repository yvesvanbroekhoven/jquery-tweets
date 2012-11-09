/*

 jquery-tweets

 Created at: 2012-10-30 16:53:39 +0100
 Updated at: 2012-11-09 10:41:59 +0100

 Author: @ivow
 Version: 1.0.4

*/
(function(d,c){function e(a,b,h){this.element=a;this.url=b;this.id=this.url.hashCode();this.options=d.extend({},i,h);this.cache=c.sessionStorage[f+this.id];this.init()}var f="jquery-tweets",i={doneCallback:null,tmpl_tweet:'<a href="{{tweet_url}}"><span>{{tweet}}</span><time datetime="{{created_at_iso}}" title="{{created_at_formatted}}">{{created_at_formatted}}</time></a>'},j;e.prototype.init=function(){var a=this;c.JSON&&c.Storage&&void 0!==this.cache?this.output(d.parseJSON(this.cache)):d.ajax({dataType:"jsonp",
success:function(b){c.JSON&&c.Storage&&(c.sessionStorage[f+a.id]=JSON.stringify(b));a.output(b)},url:a.url})};e.prototype.output=function(a){var b=this,h=d("<ul />");d.each(a,function(a,c){var f=d("<li />"),e=b.options.tmpl_tweet,g=new Date(Date.parse(c.created_at.replace(/(\+\S+) (.*)/,"$2 $1"))),i=g.getFullYear()+"-"+(g.getMonth()+1)+"-"+g.getDate(),g=j(g),e=e.replace(/\{\{tweet_url\}\}/g,"https://twitter.com/"+c.user.screen_name+"/status/"+c.id_str).replace(/\{\{tweet\}\}/g,c.text).replace(/\{\{created_at\}\}/g,
c.created_at).replace(/\{\{created_at_iso\}\}/g,g).replace(/\{\{created_at_formatted\}\}/g,i).replace(/\{\{profile_image_url\}\}/g,c.user.profile_image_url);f.append(d(e));f.appendTo(h)});h.appendTo(d(this.element));d.isFunction(this.options.doneCallback)&&this.options.doneCallback.call(this.element)};d.fn.tweets=function(a,b){return this.each(function(){d.data(this,"plugin_"+f)||(d.data(this,"plugin_"+f,!0),new e(this,a,b))})};String.prototype.hashCode=function(){var a=0,b,c;if(0===this.length)return a;
for(b=0;b<this.length;b++)c=this.charCodeAt(b),a=(a<<5)-a+c,a&=a;return Math.abs(a)};j=function(a){function b(a){return 10>a?"0"+a:a}return a.getUTCFullYear()+"-"+b(a.getUTCMonth()+1)+"-"+b(a.getUTCDate())+"T"+b(a.getUTCHours())+":"+b(a.getUTCMinutes())+":"+b(a.getUTCSeconds())+"Z"}})(jQuery,window);
