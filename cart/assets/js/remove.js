document.addEventListener('DOMContentLoaded', function() {
    const removeLink = document.getElementById('remove-item');
    const removeModal = new bootstrap.Modal(document.getElementById('removeModal')); 
    let productToRemove = null; 

    removeLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        productToRemove = event.target.closest('.row');

        removeModal.show();
    });

    const confirmRemoveButton = document.getElementById('confirm-remove');
    confirmRemoveButton.addEventListener('click', function() {
        if (productToRemove) {
            
            productToRemove.remove();
        }
       
        removeModal.hide();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const productName = localStorage.getItem('productName');
    const productImage = localStorage.getItem('productImage');
    const productPrice = localStorage.getItem('productPrice');

    if (productName && productImage && !isNaN(productPrice)) { 
        const cartItemsContainer = document.getElementById('cart-items-container');
        cartItemsContainer.innerHTML = ''; 
        const productId = `product-${Date.now()}`;
        const productRow = document.createElement('div');
        productRow.className = 'row d-flex align-items-center justify-content-between';
        productRow.id = productId;
        const productImageDiv = document.createElement('div');
        productImageDiv.className = 'col-md-3 d-flex align-items-center';
        productImageDiv.innerHTML = `
            <img src="${productImage}" alt="Product image" class="img-fluid rounded" />
            <div class="ms-3">
                <p class="text-dark fs-6">${productName}</p>
                <p class="text-muted fs-6">Color: Red</p> <!-- Color can be dynamic -->
                <a href="#" class="text-muted fs-6" data-bs-toggle="modal" data-bs-target="#removeModal" class="remove-item" data-product-id="${productId}">Remove</a>
            </div>
        `;
        let price = parseFloat(productPrice) || 0;

        const productPriceDiv = document.createElement('div');
        productPriceDiv.className = 'col-md-2 text-start';
        productPriceDiv.innerHTML = `<p class="text-dark fs-6" id="product-price" data-price="${price}">${price.toFixed(2)}</p>`;
        const quantityDiv = document.createElement('div');
        quantityDiv.className = 'col-md-2 d-flex align-items-center justify-content-center';
        quantityDiv.innerHTML = `
            <div class="counter">
                <div class="btn-group">
                    <button class="btn btn-secondary" type="button" id="subtract-${productId}">-</button>
                    <button class="btn btn-secondary" type="button" id="count-${productId}">1</button>
                    <button class="btn btn-secondary" type="button" id="add-${productId}">+</button>
                </div>
            </div>
        `;
        const totalPriceDiv = document.createElement('div');
        totalPriceDiv.className = 'col-md-2 text-end';
        totalPriceDiv.innerHTML = `<p class="total text-dark fs-6" id="total-price" data-price="${price}">${price.toFixed(2)}</p>`;
        productRow.appendChild(productImageDiv);
        productRow.appendChild(productPriceDiv);
        productRow.appendChild(quantityDiv);
        productRow.appendChild(totalPriceDiv);
        cartItemsContainer.appendChild(productRow);
        let quantity = 1;
        const countButton = document.getElementById(`count-${productId}`);
        const addButton = document.getElementById(`add-${productId}`);
        const subtractButton = document.getElementById(`subtract-${productId}`);
        const totalPriceElement = document.getElementById(`total-price-${productId}`);
        const subtotal = document.getElementById('subtotal');
        updateSubtotal();
        addButton.addEventListener('click', () => {
            quantity++;
            countButton.innerText = quantity;
            updateTotal();
        });
        subtractButton.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                countButton.innerText = quantity;
                updateTotal();
            }
        });
        function updateTotal() {
            const totalProductPrice = (price1 * quantity).toFixed(2);
            totalPriceElement.innerText = `${totalProductPrice}`;
            updateSubtotal();
        }
        function updateSubtotal() {
            let total = 0;
            document.querySelectorAll('.total').forEach(priceElement => {
                total += parseFloat(priceElement.innerText.replace('$', ''));
            });
            if (subtotal) {
                subtotal.innerText = `$${total.toFixed(2)}`;
            }
        }
        const removeLink = productImageDiv.querySelector('.remove-item');
        removeLink.addEventListener('click', (event) => {
            event.preventDefault();
            const productIdToRemove = removeLink.getAttribute('data-product-id');
            const productRowToRemove = document.getElementById(productIdToRemove);
            productRowToRemove.remove();

            updateSubtotal(); 
        });
    } else {
        console.log("No product data found in localStorage.");
    }
});
window.onload = function() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items-container');
    let subtotal = 0; 
    cartItemsContainer.innerHTML = '';

    if (cartItems.length > 0) {
        cartItems.forEach((item, index) => {
            const productTotal = item.price * item.quantity; 
            subtotal += productTotal; 
            const cartItemHTML = `
                <div class="row d-flex align-items-center justify-content-between" id="cart-item-${index}">
                    <div class="col-md-3 d-flex align-items-center">
                        <img src="${item.image}" alt="${item.name}" class="img-fluid rounded" />
                        <div class="ms-3">
                            <p class="text-dark fs-6">${item.name}</p>
                            <a href="#" class="text-muted fs-6" onclick="removeItem(${index})">Remove</a>
                        </div>
                    </div>

                    <div class="col-md-2 text-start">
                        <p class="text-dark fs-6">$${item.price}</p>
                    </div>

                    <div class="col-md-2 d-flex align-items-center justify-content-center">
                        <div class="counter">
                            <div class="btn-group">
                                <button class="btn btn-secondary" type="button" onclick="updateQuantity(${index}, 'subtract')">-</button>
                                <button class="btn btn-secondary" type="button" id="count-${index}">${item.quantity}</button>
                                <button class="btn btn-secondary" type="button" onclick="updateQuantity(${index}, 'add')">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-2 text-end">
                        <p class="total text-dark fs-6" id="total-price-${index}">$${productTotal.toFixed(2)}</p>
                    </div>
                </div>
                <hr class="text-muted" />
            `;
            cartItemsContainer.innerHTML += cartItemHTML;
        });
        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    } else {
        cartItemsContainer.innerHTML = `<p class="text-muted text-center">Your cart is empty.</p>`;
    }
};
function updateQuantity(index, action) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const item = cartItems[index];
    
    if (action === 'add') {
        item.quantity++;
    } else if (action === 'subtract' && item.quantity > 1) {
        item.quantity--;
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    document.getElementById(`count-${index}`).textContent = item.quantity;
    const productTotal = item.price * item.quantity;
    document.getElementById(`total-price-${index}`).textContent = `$${productTotal.toFixed(2)}`;
    updateSubtotal();
}
function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1); 
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    const itemRow = document.getElementById(`cart-item-${index}`);
    itemRow.remove();
    updateSubtotal();
}
function updateSubtotal() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let subtotal = 0;
    cartItems.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
}

function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1); 
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.reload();
}
function updateQuantity(index, action) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const item = cartItems[index];

    if (action === 'add') {
        item.quantity++;
    } else if (action === 'subtract' && item.quantity > 1) {
        item.quantity--;
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    document.getElementById(`count-${index}`).textContent = item.quantity;
    document.getElementById(`total-price-${index}`).textContent = `$${(item.price * item.quantity).toFixed(2)}`;
    let subtotal = 0;
    cartItems.forEach(item => subtotal += item.price * item.quantity);
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
}
document.getElementById('wrapProduct').addEventListener('change', function () {
    let wrapFee = 10; 
    let subtotalElement = document.getElementById('subtotal');
    let currentSubtotal = parseFloat(subtotalElement.textContent.replace('$', ''));

    if (this.checked) {
        currentSubtotal += wrapFee;
    } else {
        currentSubtotal -= wrapFee;
    }

    subtotalElement.textContent = `$${currentSubtotal.toFixed(2)}`;
});
