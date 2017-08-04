// require dependencies
var html = require('choo/html')
var css = require('sheetify')

// export module
module.exports = home

// declare template
function home (state, emit) {
  var style = css`
    :host {
      color: white;
      background-color: pink;
    }
  `

  return html`
    <div class=${style}>
      <div>Hello Georgia</div>
      <button onclick=${onclick}>Update name!</button>
    </div>
  `

  function onclick () {
    emit('updateName', 'Dana')
  }
}
