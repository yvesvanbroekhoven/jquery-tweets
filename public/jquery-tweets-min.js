/*

 jquery-tweets

 Created at: 2012-10-30 16:53:39 +0100
 Updated at: 2012-11-12 19:58:24 +0100

 Author: @ivow
 Version: 1.0.6

*/
(function(c,e){function d(a,b,i){this.element=a;this.url=b;this.id=this.url.hashCode();this.options=c.extend({},j,i);this.cache=e.sessionStorage[g+this.id];this.init()}var g="jquery-tweets",j={doneCallback:null,tmpl_tweet:'<a href="{{tweet_url}}"><span>{{tweet}}</span><time datetime="{{created_at_iso}}" title="{{created_at_formatted}}">{{created_at_formatted}}</time></a>'};d.prototype.init=function(){var a=this;e.JSON&&e.Storage&&void 0!==this.cache?this.output(c.parseJSON(this.cache)):c.ajax({dataType:"jsonp",
success:function(b){e.JSON&&e.Storage&&(e.sessionStorage[g+a.id]=JSON.stringify(b));a.output(b)},url:a.url})};d.prototype.output=function(a){var b=this,i=c("<ul />");c.each(a,function(a,f){var e=c("<li />"),d=b.options.tmpl_tweet,h=b.createdAt(f.created_at),g=h.getFullYear()+"-"+(h.getMonth()+1)+"-"+h.getDate(),h=b.createdAtISO(h),d=d.replace(/\{\{tweet_url\}\}/g,"https://twitter.com/"+f.user.screen_name+"/status/"+f.id_str).replace(/\{\{tweet\}\}/g,f.text).replace(/\{\{created_at\}\}/g,f.created_at).replace(/\{\{created_at_iso\}\}/g,
h).replace(/\{\{created_at_formatted\}\}/g,g).replace(/\{\{profile_image_url\}\}/g,f.user.profile_image_url).replace(/\{\{screen_name\}\}/g,f.user.screen_name).replace(/\{\{profile_image_url\}\}/g,f.user.profile_image_url);e.append(c(d)).appendTo(i)});i.appendTo(c(this.element));c.isFunction(this.options.doneCallback)&&this.options.doneCallback.call(this.element)};d.prototype.createdAt=function(a){a=a.split(" ");return new Date(a[1]+" "+a[2]+", "+a[5]+" "+a[3])};d.prototype.createdAtISO=function(a){function b(a){return 10>
a?"0"+a:a}return a.getUTCFullYear()+"-"+b(a.getUTCMonth()+1)+"-"+b(a.getUTCDate())+"T"+b(a.getUTCHours())+":"+b(a.getUTCMinutes())+":"+b(a.getUTCSeconds())+"Z"};c.fn.tweets=function(a,b){return this.each(function(){c.data(this,"plugin_"+g)||(c.data(this,"plugin_"+g,!0),new d(this,a,b))})};String.prototype.hashCode=function(){var a=0,b,c;if(0===this.length)return a;for(b=0;b<this.length;b++)c=this.charCodeAt(b),a=(a<<5)-a+c,a&=a;return Math.abs(a)}})(jQuery,window);
