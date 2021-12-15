const sendAlert = (message, type="main") => {
  let div = document.createElement('div')
  let paragraph = document.createElement('p')
  paragraph.innerHTML = message
  div.appendChild(paragraph)
  div.classList.add('alert-message-box')
  div.classList.add(`alert-${type}`)
  document.body.appendChild(div)
  div.addEventListener('click', (e) => { div.remove()})
}

export default sendAlert