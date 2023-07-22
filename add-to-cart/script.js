const data = [
    {
        id: 1,
        itemName: 'Iphone 14 Pro Max',
        price: 1499,
        image: 'https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-14-pro-max/carousel/deeppurple/deeppurple-1.png'
    },
    {
        id: 2,
        itemName:'Air Jordan',
        price: 199,
        image:'https://cdn-images.farfetch-contents.com/14/43/69/43/14436943_21290505_600.jpg'
    },
    {
        id: 3,
        itemName:'Macbook Pro',
        price:1999,
        image: 'https://images.macrumors.com/article-new/2020/11/macbook-pro-touch-bar-m1.jpg'
    },
    {
        id: 4,
        itemName:'Lindt Chocolate',
        price: 6.99,
        image:'https://kaffekapslen.media/media/catalog/product/cache/874cc1dc39844d26ad7be3d843259d32/l/i/lindt-100g-mint-intense-0001.jpg'
    },
    {
        id: 5,
        itemName: 'Marshall Major IV',
        price: 149.99,
        image:'https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw62d24113/images/marshall/headphones/major-iv/large/pos-marshall-major-iv-black-03.png?sw=1120&sh=1120&sm=fit',
    },
    {
        id: 6,
        itemName: 'Versace Eros',
        price: 112,
        image: 'https://m.media-amazon.com/images/I/514XMzb3cvL.jpg'
    }
]


const productContainer = document.querySelector('.product-container')
const cartButton = document.querySelector('.fa-cart-shopping')
const cartCloseButton = document.querySelector('.fa-xmark')
const cartMenu = document.querySelector('.cart-menu')
const productCard = document.querySelectorAll('.product-card')
const addToCartButton = document.querySelectorAll('.add-to-cart-button')



let addedProducts = []

data.map(product => {
    productContainer.innerHTML += `<div  class="product-card">
    <div class="image-container">
        <img src="${product.image}" />
    </div>
    <h3>${product.itemName}</h3>
    <span>$${product.price}</span>
    <button id=${product.id} class="add-to-cart-button">ADD TO CART</button>
</div>`
})



cartButton.addEventListener('click', () => {
    cartMenu.style.transform = "translateX(0)"
})

cartCloseButton.addEventListener('click', () => {
    cartMenu.style.transform = "translateX(400px)"
})



let x = []

for(let i = 3; i<=8;i++) {
   x.push(productContainer.childNodes[i].childNodes[7])
}

let localStorageItems = JSON.parse(localStorage.getItem('products'))


x.forEach(button => {
    button.addEventListener('click', () => {
       addedProducts.push(data[button.id-1])
       localStorage.setItem('products', JSON.stringify(addedProducts))

       if(addedProducts.length == 0) addedProducts == localStorageItems
        cartMenu.innerHTML = ''
         addedProducts.map(product => {
            cartMenu.innerHTML += `${closeButton}<div id='${product.id}' style="flex-direction: row; height: 200px; justify-content: center; align-items: center;" class="product-card">
            <div class="image-container">
                <img src="${product.image}" />
            </div>
            <div style="margin-right: 50px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
                <h3>${product.itemName}</h3>
                <span>${product.price}</span>
            </div>
        </div>`
        })

        console.log(addedProducts)

        
        
    })
})


localStorageItems.map(product => {
    cartMenu.innerHTML += `<div id='${product.id}' style="flex-direction: row; height: 200px; justify-content: center; align-items: center;" class="product-card">
    <div class="image-container">
        <img src="${product.image}" />
    </div>
    <div style="margin-right: 50px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
        <h3>${product.itemName}</h3>
        <span>${product.price}</span>
    </div>
</div>`
})