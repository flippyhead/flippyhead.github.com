---
---

$span = $(document.createElement 'span')
data = $('#gr_grid_widget_1431821457 a')
{length} = data

data.each (index, a) ->
  comma = if length - 1 is index
    '.'
  else if length - 2 is index
    ' and '
  else
    ', '

  $span.append "<a href=\"#{a.href}\">#{a.title}</a>#{comma}"

$('#goodreads').append $span