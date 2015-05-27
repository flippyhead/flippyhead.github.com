(function() {
  var $span, url;

  $span = $(document.createElement('span'));

  url = 'https://app.fetching.io/api/v1/documents?token=E031EIDrgUXMmJtxE4dfrHN_8kHx3w_Cot3tlspMJoa';

  $.getJSON(url, function(bookmarks) {
    var length;
    length = bookmarks.length;
    _.each(bookmarks, function(bookmark, index) {
      var comma;
      comma = length - 1 === index ? '.' : length - 2 === index ? ' and ' : ', ';
      if (bookmark.url && bookmark.title) {
        return $span.append("<a href=\"" + bookmark.url + "\">" + bookmark.title + "</a>" + comma);
      }
    });
    return $('#fetching').append($span);
  });

}).call(this);
