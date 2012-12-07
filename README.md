# jQuery tweets

The main idea behind this plugin was to be able to simple & flexible way to
show tweets on your website.

To avoid hitting the rate limit, the results will be session cached client side.

I'm aware of the Twitter API change coming in March 2013, but we're working
on a solution for that.

## How to use?

The only thing required for the plugin is an Twitter API endpoint json url.
Find the Twitter API endpoint you want to use:
[https://dev.twitter.com/docs/api/1](https://dev.twitter.com/docs/api/1)

The plugin will build a list of tweets from that JSON and appends it to your selector.

### Example: show last 5 tweets from account @ivow

```
var url = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=ivow&count=5&include_rts=1';

$('.selector').tweets( url );

```

## Options

One of the things I missed in other plugins, was an easy way to change to HTML output. There will be always something you want to add or remove, so it's possible to add your own HTML template code. The dynamic variables can be added with curly braces, for example {{tweet}} will display the tweet text.

Currently I've added the variables I came across using in projects. If you want something to be added, fork or create an issue and I will add.

### List of dynamic variables

* *tweet_url* - Permalink to the tweet
* *tweet* - The tweet text
* *created_at* - Tweet created at date in Twitter API format (Mon Dec 03 08:13:11 +0000 2012)
* *created_at_iso* - Tweet created at date in ISO format (2012-12-03T07:13:11Z)
* *created_at_formatted* - Tweet created at date in format YYYY-MM-DD (2012-12-03)
* *profile_image_url* - The author of the tweet's profile image URL
* *screen_name* - The author of the tweet's screen name

The default template:

```
<a href="{{tweet_url}}">
  <span>{{tweet}}</span>
  <time datetime="{{created_at_iso}}" title="{{created_at_formatted}}">{{created_at_formatted}}</time>
</a>
```

### Example: add a custom tweet template

```
var url = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=ivow&count=5&include_rts=1',
    tmpl_tweet = '<a href="{{tweet_url}}" target="_blank"><img src="{{profile_image_url}}" class="profile-image" alt="" /><span class="screen-name">{{screen_name}}</span><span class="body">{{tweet}}</span><time datetime="{{created_at_iso}}" title="{{created_at_formatted}}">{{created_at_formatted}}</time></a>';

$('.selector').tweets( url, {
  tmpl_tweet: tmpl_tweet
});
```

## Callbacks

* *doneCallback* - Triggered when tweets are appended. *this* is your selector.

### Example: add callback to add the timeago plugin

The timeago plugin transforms the twitter timestamps into a more human readable text. More info: [http://timeago.yarp.com/](http://timeago.yarp.com/)

Don't forget to include the timeago plugin in your HTML.

```
var url = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=ivow&count=5&include_rts=1';

$('.selector').tweets( url, {
  doneCallback: function() {
    $('.twitter-feed time').timeago();
  }
});

```
