console.log('JS Connected!')

let count = 0

// Step 1: Grab an HTML element

let addButton = document.querySelector('#plus-btn')
let mainCounter = document.querySelector('#counter')
let minusButton = document.querySelector('#minus-btn')
let resetButton = document.querySelector('#reset-btn')
let themes = document.querySelectorAll('.theme-buttons')
let allButtons = document.querySelectorAll('button')
let faveInput = document.querySelector('#faveInput')
let faveForm = document.querySelector('form')

// console.log(themes)

// Step 2: Write a function

const addOne = () => {
    count++
    mainCounter.textContent = count
    console.log(count)
}

const minusOne = () => {
    count--
    mainCounter.textContent = count
    console.log(count)
}

const resetCounter = () => {
    count = 0
    mainCounter.textContent = count
    console.log(count)
}

const selectTheme = (event) => {
    console.log(event.target)

    let theme = event.target.textContent

    document.querySelector('body').className = event.target.textContent
    document.querySelector('main').className = event.target.textContent

    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].className = theme
    }
}

const addFaveToList = (e) => {
    e.preventDefault() // dont refresh page when we go through this
    console.log(faveInput.value)

    let newFave = document.createElement('li')

    newFave.textContent = faveInput.value

    let faveList = document.querySelector('ul')

    faveList.appendChild(newFave)

    faveInput.value = '' // resets placeholder text after submission


}


// Step 3: Combine steps 1 and 2 with an event listner

addButton.addEventListener('click', addOne)
minusButton.addEventListener('click', minusOne)
resetButton.addEventListener('dblclick', resetCounter)

for(let i = 0; i < themes.length; i++){
    console.log(themes[i].textContent)
    themes[i].addEventListener('click', selectTheme)

}

faveForm.addEventListener('submit', addFaveToList) // submit for forms