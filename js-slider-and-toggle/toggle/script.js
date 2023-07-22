const button = document.querySelector('.button-first')
const circle = document.querySelector('.button-second')

let toggle = false

button.addEventListener('click', () => {
    toggle = !toggle
    document.body.style.background = toggle ? 'black' : 'white'
    button.style.background = toggle ? 'white' : 'lightgray'
    circle.classList.toggle('active')
})
