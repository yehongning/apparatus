'use strict'

// prints text formatted
module.exports = function printChatText (toPrint) {
  const htmlElement = document.getElementById('info-nodes-id')
  const span = document.createElement('span')
  // if (from === 'user') {
  //   span.className = 'bubble user'
  // } else {
  //   span.className = 'bubble tool'
  // }
  span.className = 'bubble'
  const result = document.createTextNode(toPrint)
  span.appendChild(result)
  htmlElement.appendChild(span)
  htmlElement.lastChild.scrollIntoView(false)
}
