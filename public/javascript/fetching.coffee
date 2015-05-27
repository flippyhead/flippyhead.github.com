---
---
$span = $(document.createElement 'span')

url = 'https://app.fetching.io/api/v1/documents?token=E031EIDrgUXMmJtxE4dfrHN_8kHx3w_Cot3tlspMJoa'
$.getJSON url, (bookmarks) ->
  {length} = bookmarks
  _.each bookmarks, (bookmark, index) ->
    comma = if length - 1 is index
      '.'
    else if length - 2 is index
      ' and '
    else
      ', '

    if bookmark.url and bookmark.title
      $span.append "<a href=\"#{bookmark.url}\">#{bookmark.title}</a>#{comma}"

  $('#fetching').append $span