const bgChangeBtn = document.getElementById('btn')
const body = document.getElementsByTagName('body')[0]


const bgChanger = () => {
        bgChangeBtn.addEventListener('click', () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        body.style.backgroundColor = `#${randomColor}`
    })
}

bgChanger()