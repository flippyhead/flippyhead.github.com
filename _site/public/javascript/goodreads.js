(function() {
  var $span, data, length;

  $span = $(document.createElement('span'));

  data = $('#gr_grid_widget_1431821457 a');

  length = data.length;

  data.each(function(index, a) {
    var comma;
    comma = length - 1 === index ? '.' : length - 2 === index ? ' and ' : ', ';
    return $span.append("<a href=\"" + a.href + "\">" + a.title + "</a>" + comma);
  });

  $('#goodreads').append($span);

}).call(this);
