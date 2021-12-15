const sendAlert = (message, type="main", timer=5000) => {
  let div = document.createElement('div')
  let paragraph = document.createElement('p')
  paragraph.innerHTML = message
  div.appendChild(paragraph)
  div.classList.add('alert-message-box')
  div.classList.add(`alert-${type}`)
  document.body.appendChild(div)
  div.addEventListener('click', (e) => { div.remove()})
  setTimeout( () => {div.remove()}, timer)
}

export default sendAlert