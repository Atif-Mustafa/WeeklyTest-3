let decreaseQuantity = Array.from(document.querySelectorAll('#decreaseQuantity'));
let increaseQuantity = Array.from(document.querySelectorAll('#increaseQuantity'));
let quantity = document.querySelectorAll('#quantity');
const cartBody = document.getElementById('productAdded');
const totalPriceElement = document.getElementById('totalPrice');

let emptyCart = document.getElementById('emptyCart')

console.log(decreaseQuantity)

const products = [
    {name: 'Product-1', price: 100, quantity:2},
    {name: 'Product-2', price: 200, quantity:3},
    {name: 'Product-3', price: 300, quantity:0},
]

function updateCart(){
    cartBody.innerHTML = '';
    
   
     emptyCart.style.display = 'none';
    
     let total = 0;

    products.forEach((product) => {
        if(product.quantity > 0){
            const row = document.createElement('div');
            row.innerHTML = `
            <span>${product.name}</span>
            <span>${product.quantity} x ${product.price}<span>`
        
        cartBody.appendChild(row);
        row.classList.add('cartItem')
        cartBody.classList.add('productAdded')
        total += product.quantity * product.price;
    }
    });

    totalPriceElement.innerText = `${total}`

    if(cartBody.innerHTML === ''){
        emptyCart.style.display = 'block';
    }

}

function updateQuantity(index, change){
    products[index].quantity += change;

    if(products[index].quantity < 0)
        products[index].quantity = 0;
    
    quantity[index].innerText = products[index].quantity;
    updateCart();
}

decreaseQuantity.forEach((button, index) => {
    console.log(button);
       button.addEventListener('click', ()=> 
        updateQuantity(index, -1)
    )
})

increaseQuantity.forEach((button, index) => {
    button.addEventListener('click', ()=> 
        updateQuantity(index, 1)
)
    })


 updateCart();

