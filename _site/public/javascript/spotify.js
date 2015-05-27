(function() {
  var $span, url;

  $span = $(document.createElement('span'));

  url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=flippyheads&api_key=b094d5020475474c4db04cd7686b4acb&format=json';

  $.getJSON(url, function(data) {
    var length;
    length = data.recenttracks.track.length;
    _.each(data.recenttracks.track, function(track, index) {
      var comma;
      comma = length - 1 === index ? '.' : length - 2 === index ? ' and ' : ', ';
      return $span.append("<a href=\"" + track.url + "\">" + track.name + " by " + track.artist['#text'] + "</a>" + comma);
    });
    return $('#spotify').append($span);
  });

}).call(this);
