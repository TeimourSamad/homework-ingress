const slides = document.querySelectorAll('.image')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

const slideLength = slides.length

let slideIndex = 0

nextBtn.addEventListener('click', () => {
    for(let k = 0; k<=slideLength; k++) {
        slides[slideIndex].style.transform = `translateX(${100*slideIndex}%)`
    }
    if(slideIndex == 3) {
        slideIndex = 0
        return
    } 
    slideIndex = slideIndex + 1
    slides[slideIndex].style.transform = `translateX(-${100*slideIndex}%)`
    console.log(slideIndex)
})

// Geriye qaytarmaq buttonunda bug var. Deadlinei kecmesin deye undone sekilde submit eledim. Alqoritmi tamam ozum qurmaga calisiram. Bug hell olunduqdan sonra 
// yeniden submit edecem. Uzrlu sayin.

prevBtn.addEventListener('click', () => {
    for(let i = 0; i<=slideLength; i++) {
        slides[slideIndex].style.transform = `translateX(${100*slideIndex}%)`
    }
    if(slideIndex == 0) {
        slideIndex = 3
        return
    } 
    
    slideIndex = slideIndex - 1
    slides[slideIndex].style.transform = `translateX(-${100*slideIndex}%)`
    console.log(slideIndex)
})


