const body = document.querySelector('body')

const header = document.createElement('header')
const title = document.createElement('h1')
title.textContent = 'Etch A Sketch'
header.appendChild(title)
body.appendChild(header)

const container = document.createElement('div')
container.classList.add('container')
body.appendChild(container)

let pixels = 64
container.style.gridTemplateColumns = `repeat(${pixels}, 1fr)`

let gridSize = pixels * pixels
let count = 0
let newDiv
while (count < gridSize) {
  newDiv = document.createElement('div')
  newDiv.classList.add('grid')
  container.appendChild(newDiv)
  count++
}

const grid = document.querySelectorAll('.grid')

grid.forEach((div) => {
  div.addEventListener('mouseenter', () => {
    div.style.backgroundColor = 'rgb(0, 0, 0, 0.3)'
  })
})

const buttonsContainer = document.createElement('div')
buttonsContainer.classList.add('buttons-container')
body.appendChild(buttonsContainer)

const resetButton = document.createElement('button')
resetButton.textContent = 'Reset'
buttonsContainer.appendChild(resetButton)

// reset function
function reset() {
  grid.forEach((div) => {
    div.style.backgroundColor = 'rgb(203, 203, 203)'
  })
}

resetButton.addEventListener('click', reset)
