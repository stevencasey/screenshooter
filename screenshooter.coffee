page = new WebPage()

if phantom.args.length isnt 2
  console.log 'Usage: screenshot.js URL filename'
  phantom.exit()


[url, filename] = phantom.args

renderFunction = ->
  page.render filename
  console.log filename
  phantom.exit()

page.open(url, (status) ->
  if status isnt 'success'
    console.log "An error occurred. Status: #{status}"

  window.setTimeout(renderFunction, 5000)
)
