const image1 = document.querySelector('.first-image')
const image2 = document.querySelector('.second-image')
const image3 = document.querySelector('.third-image')

image1.addEventListener('mouseover', () => {
    image1.style.width = '80%'
    image2.style.width = '30%'
    image3.style.width = '30%'
})

image1.addEventListener('mouseout', () => {
    image1.style.width = '80%'
    image2.style.width = '30%'
    image3.style.width = '30%'
})

image2.addEventListener('mouseover', () => {
    image1.style.width = '30%'
    image2.style.width = '80%'
    image3.style.width = '30%'
})

image2.addEventListener('mouseout', () => {
    image1.style.width = '80%'
    image2.style.width = '30%'
    image3.style.width = '30%'
})

image3.addEventListener('mouseover', () => {
    image1.style.width = '30%'
    image2.style.width = '30%'
    image3.style.width = '80%'
})

image3.addEventListener('mouseout', () => {
    image1.style.width = '80%'
    image2.style.width = '30%'
    image3.style.width = '30%'
})