---
layout: page
title: false
date: 2013-03-29 17:13
comments: false
sharing: false
footer: false
---

{% img left https://dl.dropbox.com/u/242501/yeahtotally.org/flippyhead.jpg 300 400 %} Hi, I'm Peter T. Brown, a technology entrepreneur, artist and intellectual. I started out in college studying Japanese and computer science but that was in the late 90's and hey, everyone was doing it, so I dropped out and started a series of technology companies. Some did better than others; mostly the best are yet to come.

I'm currently the CTO and co-founder of [Pathable, Inc.](http://pathable.com), where we make conferences better for organizers and their attendees. I worked with some friends to develop large scale [interactive musical instrument](/heaid/) for Burning Man a few years back. For fun, I made a [small tool](/mebe/) to help one talk in pictures, and an [experiment in community sharing](/sharewall/).

You can find me partially engaged on [Facebook](http://www.facebook.com/flippyhead) and [Twitter](https://twitter.com/flippyhead). I've got a few places listed on [AirBnb](https://www.airbnb.com/users/show/1635606) too. Feel free to email me. I'm p at ptb dot io.

<div class="stuff">Books I'm currently reading include <div class="softLinks" id="ShelfariWidget241673"><script src="http://www.shelfari.com/ws/241673/widget.js?r=82586" type="text/javascript" language="javascript"></script></div> and <a href="http://www.shelfari.com/o1514890215/lists/NowReading">a few others</a>.</div>

<div class="stuff">Books I've read recently include <div class="softLinks" id="ShelfariWidget241675"><script src="http://www.shelfari.com/ws/241675/widget.js?r=24603" type="text/javascript" language="javascript"></script></div> and <a href="http://www.shelfari.com/o1514890215/lists/IsRead">many more</a>.</div>

<div class="stuff" id="pinboard">
  I've flagged a few interesting sites recently including: <ul class="softLinks" id="pinboard_linkroll"></ul>
  <script type="text/javascript">
    var linkroll = 'pinboard_linkroll'; //id target for pinboard list
    var pinboard_user = "{{ site.pinboard_user }}"; //id target for pinboard list
    var pinboard_count = {{ site.pinboard_count }}; //id target for pinboard list
    (function(){
      var pinboardInit = document.createElement('script');
      pinboardInit.type = 'text/javascript';
      pinboardInit.async = true;
      pinboardInit.src = '{{ root_url }}/javascripts/pinboard.js';
      document.getElementsByTagName('head')[0].appendChild(pinboardInit);
    })();
  </script> and <a href="http://pinboard.in/u:flippyhead">tons more</a>.
</div>

<div class="stuff lastfm" id="listeningNow">I am, at this very moment, listening to <ul class="softLinks inline"><li><span></span></il></ul>.</div>
<div class="stuff lastfm">Recently, I've listened to <ul class="softLinks inline" id="music"></ul> and <a href="http://www.last.fm/user/flippyheads/tracks">a bunch of other great music</a>.</div>
<script type="text/javascript">
  $.ajax({
    url: "http://pipes.yahoo.com/pipes/pipe.run?_id=742434553059f87cf661b2fccb472dcf&_render=json",
    success: function(feed) {
      $now = $('#listeningNow');
      $music = $('#music');
      start = 0;
      songs = feed.value.items;
      now = songs[0];
      if ( now && (new Date() - new Date(now.pubDate) < 999999) ) {
        start = 1;
        $now.show().find('span').html('<a href="' + now.link + '">'+ now.title +'</a>');
      } else {
        $now.hide()
      }
      for (var i = start; i < songs.length; i++) {
        var song = songs[i];
        $music.append('<li><a href="' + song.link + '">' + song.title + '</a>, </li>');
      };
    }
  });
</script>