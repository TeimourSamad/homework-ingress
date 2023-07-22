const form = document.querySelector('.main-container')
const username = document.querySelector('.username-input')
const password = document.querySelector('.password-input')
const label = document.querySelector('.label-input')
const remember = document.querySelector('.remember-input')
const dropdown = document.querySelector('#drop')
const errorIcons = document.querySelectorAll('.icon-error')
const successIcons = document.querySelectorAll('.icon-success')
const errorMessages = document.querySelectorAll('.error-message')
const submitButton = document.querySelector('#create-button')
const resetButton = document.querySelector('#reset-button')
const inputFields = document.querySelectorAll('.input-container')

let data = {}

const validator = () => {
   username.addEventListener('input', () => {
    if(username.value.length > 0) {
        successIcons[0].style.display = 'block'
        errorIcons[0].style.display = 'none'
        username.style.borderColor = '#ccc'
        errorMessages[0].style.display = 'none'
    }  else {
        errorIcons[0].style.display = 'block'
        successIcons[0].style.display = 'none'
        username.style.borderColor = 'red'
        errorMessages[0].style.display = 'block'
    }
   })
   password.addEventListener('input', () => {
    if(password.value.length > 7) {
        successIcons[1].style.display = 'block'
        errorIcons[1].style.display = 'none'
        password.style.borderColor = '#ccc'
        errorMessages[1].style.display = 'none'
    }  else if(password.value.length < 7 && password.value.length !== 0)  {
        errorIcons[1].style.display = 'block'
        successIcons[1].style.display = 'none'
        password.style.borderColor = 'red'
        errorMessages[1].style.display = 'block'
        errorMessages[1].innerHTML = 'Password must be at least 8 characters or longer'
    } else if(password.value.length == 0) {
        errorIcons[1].style.display = 'block'
        successIcons[1].style.display = 'none'
        password.style.borderColor = 'red'
        errorMessages[1].style.display = 'block'
        errorMessages[1].innerHTML = 'Please enter a password'
    }
   })
   label.addEventListener('input', () => {
    if(label.value.length > 0) {
        successIcons[2].style.display = 'block'
        errorIcons[2].style.display = 'none'
        label.style.borderColor = '#ccc'
        errorMessages[2].style.display = 'none'
    }  else {
        errorIcons[2].style.display = 'block'
        successIcons[2].style.display = 'none'
        label.style.borderColor = 'red'
        errorMessages[2].style.display = 'block'
    }
   })
}

validator()

form.addEventListener('submit', (e) => {
    e.preventDefault()
    data = {
        username: username.value,
        password: password.value,
        label: label.value,
        isChecked: remember.checked,
        option: dropdown.value
    }

    
    console.log(data)
})

resetButton.addEventListener('click', () => {
    form.reset()
    successIcons.forEach(icon => {
        icon.style.display = 'none'
    })
    errorIcons.forEach(icon => {
        icon.style.display = 'none'
    })
    username.style.borderColor = '#ccc'
    password.style.borderColor = '#ccc'
    label.style.borderColor = '#ccc'
})




