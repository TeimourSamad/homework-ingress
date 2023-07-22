const button = document.getElementById('btn')

const image = document.querySelector('.image')

const changeImage = () => {
    button.addEventListener('click', () => {
        const img2 = 'https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?itok=D8qgVwxb'
        image.src = img2
    })
}

changeImage()