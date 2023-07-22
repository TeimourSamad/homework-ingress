const button = document.getElementById('btn')
const display = document.querySelector('.counter-display')

const increment = () => {
    let counter = 0
    button.addEventListener('click', () => {
        display.innerText = counter
        counter++
    })
}

increment()


