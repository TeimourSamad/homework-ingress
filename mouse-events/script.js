let imgCntnr1 = document.querySelector('.cntnr1')
let imgCntnr2 = document.querySelector('.cntnr2')
let imgCntnr3 = document.querySelector('.cntnr3')

imgCntnr1.addEventListener('mouseover',()=>{
    imgCntnr1.classList.remove("active")
    imgCntnr2.classList.add("active")
    imgCntnr3.classList.add("active")
    })
imgCntnr2.addEventListener('mouseover',()=>{
imgCntnr2.classList.remove("active")
imgCntnr1.classList.add("active")
imgCntnr3.classList.add("active")
})


 imgCntnr3.addEventListener('mouseover',()=>{
     imgCntnr3.classList.remove("active")
     imgCntnr1.classList.add("active")
     imgCntnr2.classList.add("active")
        })