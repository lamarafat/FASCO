document.getElementById('productName').textContent = localStorage.getItem('productName');
document.getElementById('productImage').src = localStorage.getItem('productImage');
document.getElementById('productPrice').textContent = localStorage.getItem('productPrice');

const countDown = () => {
    const countDownDate = new Date("2024-12-31T00:00:00Z").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    if (distance < 0) {
        clearInterval(timerInterval);
        document.querySelector(".countdown-container").innerHTML = "<h2>Sale Ended!</h2>";
        return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector("#days").textContent = days < 10 ? "0" + days : days;
    document.querySelector("#hours").textContent = hours < 10 ? "0" + hours : hours;
    document.querySelector("#minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.querySelector("#seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
};
const timerInterval = setInterval(countDown, 1000);


const products = [
    { image: './assets/image/outfitFashionsec/1o.png', name: 'Rounded Red Hat', price1: 8.00,price2:'', color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/2o.png', name: 'Linen-blend Shirt', price1: 17.00,price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/3o.png', name: 'Long-sleeve Coat', price1: 106.00,price2:'', color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/4o.png', name: 'Boxy Denim Hat', price1: 25.00,price2:'', color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/5o.png', name: 'Linen Plain Top', price1: 25.00,price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/6o.png', name: 'Oversized T-shirt', price1: 11.00, price2: 14.00, color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/7o.png', name: 'Polarised Sunglasses', price1: 18.00, price2: 21.00,color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/8o.png', name: 'Dotted Black Dress', price1: 20.00,price2:'', color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/1o.png', name: 'Rounded Red Hat', price1: 8.00,price2:'', color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/2o.png', name: 'Linen-blend Shirt', price1: 17.00,price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/3o.png', name: 'Long-sleeve Coat', price1: 106.00, price2:'', color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/4o.png', name: 'Boxy Denim Hat', price1: 25.00, price2:'', color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/5o.png', name: 'Linen Plain Top', price1: 25.00,price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/6o.png', name: 'Oversized T-shirt', price1: 11.00,price2: 14.00, color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/7o.png', name: 'Polarised Sunglasses',price1: 18.00,price2: 21.00, color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/9o.png', name: 'Rockstar Jacket', price1: 22.00, price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/8o.png', name: 'Dotted Black Dress', price1: 20.00, price2:'', color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/9o.png', name: 'Rockstar Jacket', price1: 22.00,price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/8o.png', name: 'Dotted Black Dress', price1: 20.00,price2:'', color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/1o.png', name: 'Rounded Red Hat', price1: 8.00,price2:'', color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/2o.png', name: 'Linen-blend Shirt', price1: 17.00,price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/3o.png', name: 'Long-sleeve Coat', price1: 106.00,price2:'', color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/4o.png', name: 'Boxy Denim Hat', price1: 25.00,price2:'', color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/5o.png', name: 'Linen Plain Top', price1: 25.00,price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/6o.png', name: 'Oversized T-shirt', price1: 11.00, price2: 14.00, color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/7o.png', name: 'Polarised Sunglasses', price1: 18.00, price2: 21.00, color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/9o.png', name: 'Rockstar Jacket', price1: 22.00,price2:'', color1: 'bg-info', color2: 'bg-danger'},
    
];
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productIndex = urlParams.get('product');
    if (productIndex !== null && !isNaN(productIndex) && products[productIndex]) {
        const product = products[productIndex];
        document.getElementById("productImage").src = product.image;
        document.getElementById("productName").textContent = product.name;
        document.getElementById("productPrice").innerHTML = product.price1 + 
            (product.price2 ? ` <span class="text-decoration-line-through text-muted">${product.price2}</span>` : '');

        const addToCartButton = document.getElementById("addToCartButton");
        addToCartButton.addEventListener("click", () => {
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            let existingItem = cartItems.find(item => item.name === product.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartItems.push({
                    name: product.name,
                    image: product.image,
                    price: product.price1,
                    quantity: 1
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            alert("Product added to cart!");
        });
    } else {
        document.getElementById("product-details-container").innerHTML = "<p>Product not found.</p>";
    }
});


function addToCart(event) {
    event.preventDefault();
    
    const productName = document.getElementById('productName').innerText;
    const productImage = './assets/image/peaky/peaky2.png';
    
    const productPrice = parseFloat(document.getElementById('productPrice').innerText.replace('$', '').replace('&#36;', ''));

    const product = {
        name: productName,
        image: productImage,
        price: productPrice,
        quantity: 1 
    };
    
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    console.log('Product added to cart:', product);
    window.location.href = '../cart/cart.html';
}
document.querySelectorAll('.size-option').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('active', 'btn-dark', 'text-white'));
        button.classList.add('active', 'btn-dark', 'text-white');
        button.classList.remove('btn-outline-dark');
        const selectedSize = button.dataset.size;
        console.log(`Selected size: ${selectedSize}`);
    });
});

