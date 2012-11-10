/*

 jquery-tweets

 Created at: 2012-10-30 16:53:39 +0100
 Updated at: 2012-11-10 14:06:39 +0100

 Author: @ivow
 Version: 1.0.5

*/
(function(c,d){function h(a,b,i){this.element=a;this.url=b;this.id=this.url.hashCode();this.options=c.extend({},k,i);this.cache=d.sessionStorage[e+this.id];this.init()}var e="jquery-tweets",k={doneCallback:null,tmpl_tweet:'<a href="{{tweet_url}}"><span>{{tweet}}</span><time datetime="{{created_at_iso}}" title="{{created_at_formatted}}">{{created_at_formatted}}</time></a>'},j;h.prototype.init=function(){var a=this;d.JSON&&d.Storage&&void 0!==this.cache?this.output(c.parseJSON(this.cache)):c.ajax({dataType:"jsonp",
success:function(b){d.JSON&&d.Storage&&(d.sessionStorage[e+a.id]=JSON.stringify(b));a.output(b)},url:a.url})};h.prototype.output=function(a){var b=this,i=c("<ul />");c.each(a,function(a,f){var d=c("<li />"),e=b.options.tmpl_tweet,g=new Date(Date.parse(f.created_at.replace(/(\+\S+) (.*)/,"$2 $1"))),h=g.getFullYear()+"-"+(g.getMonth()+1)+"-"+g.getDate(),g=j(g),e=e.replace(/\{\{tweet_url\}\}/g,"https://twitter.com/"+f.user.screen_name+"/status/"+f.id_str).replace(/\{\{tweet\}\}/g,f.text).replace(/\{\{created_at\}\}/g,
f.created_at).replace(/\{\{created_at_iso\}\}/g,g).replace(/\{\{created_at_formatted\}\}/g,h).replace(/\{\{profile_image_url\}\}/g,f.user.profile_image_url).replace(/\{\{screen_name\}\}/g,f.user.screen_name).replace(/\{\{profile_image_url\}\}/g,f.user.profile_image_url);d.append(c(e)).appendTo(i)});i.appendTo(c(this.element));c.isFunction(this.options.doneCallback)&&this.options.doneCallback.call(this.element)};c.fn.tweets=function(a,b){return this.each(function(){c.data(this,"plugin_"+e)||(c.data(this,
"plugin_"+e,!0),new h(this,a,b))})};String.prototype.hashCode=function(){var a=0,b,c;if(0===this.length)return a;for(b=0;b<this.length;b++)c=this.charCodeAt(b),a=(a<<5)-a+c,a&=a;return Math.abs(a)};j=function(a){function b(a){return 10>a?"0"+a:a}return a.getUTCFullYear()+"-"+b(a.getUTCMonth()+1)+"-"+b(a.getUTCDate())+"T"+b(a.getUTCHours())+":"+b(a.getUTCMinutes())+":"+b(a.getUTCSeconds())+"Z"}})(jQuery,window);
