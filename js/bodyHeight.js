// Get the total height of the document. Cross browser.
var body   = document.body,
    html   = document.documentElement,
    height = Math.max( body.scrollHeight,
                       body.offsetHeight, 
                       html.clientHeight,
                       html.scrollHeight,
                       html.offsetHeight );