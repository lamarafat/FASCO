
const products = [
    { image: './assets/image/outfitFashionsec/1o.png', name: 'Rounded Red Hat', price1: '$8.00',price2:'', color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/2o.png', name: 'Linen-blend Shirt', price1: '$17.00',price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/3o.png', name: 'Long-sleeve Coat', price1: '$106.00',price2:'', color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/4o.png', name: 'Boxy Denim Hat', price1: '$25.00',price2:'', color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/5o.png', name: 'Linen Plain Top', price1: '$25.00',price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/6o.png', name: 'Oversized T-shirt', price1: '$11.00', price2: '$14.00', color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/7o.png', name: 'Polarised Sunglasses', price1: '$18.00', price2: '$21.00',color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/8o.png', name: 'Dotted Black Dress', price1: '$20.00',price2:'', color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/1o.png', name: 'Rounded Red Hat', price1: '$8.00',price2:'', color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/2o.png', name: 'Linen-blend Shirt', price1: '$17.00',price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/3o.png', name: 'Long-sleeve Coat', price1: '$106.00', price2:'', color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/4o.png', name: 'Boxy Denim Hat', price1: '$25.00', price2:'', color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/5o.png', name: 'Linen Plain Top', price1: '$25.00',price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/6o.png', name: 'Oversized T-shirt', price1: '$11.00',price2: '$14.00', color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/7o.png', name: 'Polarised Sunglasses',price1: '$18.00',price2: '$21.00', color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/9o.png', name: 'Rockstar Jacket', price1: '$22.00', price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/8o.png', name: 'Dotted Black Dress', price1: '$20.00', price2:'', color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/9o.png', name: 'Rockstar Jacket', price1: '$22.00',price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/8o.png', name: 'Dotted Black Dress', price1: '$20.00',price2:'', color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/1o.png', name: 'Rounded Red Hat', price1: '$8.00',price2:'', color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/2o.png', name: 'Linen-blend Shirt', price1: '$17.00',price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/3o.png', name: 'Long-sleeve Coat', price1: '$106.00',price2:'', color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/4o.png', name: 'Boxy Denim Hat', price1: '$25.00',price2:'', color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/5o.png', name: 'Linen Plain Top', price1: '$25.00',price2:'', color1: 'bg-info', color2: 'bg-danger' },
    { image: './assets/image/outfitFashionsec/6o.png', name: 'Oversized T-shirt', price1: '$11.00', price2: '$14.00', color1: 'bg-success', color2: 'bg-primary' },
    { image: './assets/image/outfitFashionsec/7o.png', name: 'Polarised Sunglasses', price1: '$18.00', price2: '$21.00', color1: 'bg-warning', color2: 'bg-dark' },
    { image: './assets/image/outfitFashionsec/9o.png', name: 'Rockstar Jacket', price1: '$22.00',price2:'', color1: 'bg-info', color2: 'bg-danger'},
    
];
const productsPerPage = 9; 
let currentPage = 1; 
function displayProducts(products, page) {
    console.log("Displaying products for page:", page);

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
    const productList = document.getElementById("product-list");
    productList.innerHTML = '';

    console.log("Current products to display:", currentProducts);

    currentProducts.forEach((product, index) => {
        const productLink = document.createElement("a");
        productLink.href = `../product/product.html?product=${index}`;
        productLink.classList.add("text-decoration-none", "col-md-4", "col-sm-6", "product-item");
        productLink.innerHTML = `
            <div class="card p-3 bg-white rounded shadow-sm h-100">
                <img src="${product.image}" class="img-fluid rounded w-100 mb-3" alt="${product.name}" />
                <h3 class="text-dark fw-semibold mb-1">${product.name}</h3>
                <div class="d-flex justify-content-between align-items-center">
                    <h3 class="text-dark fw-semibold mb-0">${product.price1}</h3>
                    <h3 class="text-muted text-decoration-line-through fw-semibold mb-0">${product.price2}</h3>
                </div>
                <div class="d-flex align-items-center my-1 gap-2">
                    <div class="rounded-circle ${product.color1}" style="width: 24px; height: 24px;"></div>
                    <div class="rounded-circle ${product.color2}" style="width: 24px; height: 24px;"></div>
                </div>
            </div>
        `;
        productList.appendChild(productLink);
    });

    console.log("Finished appending products.");
}

function updatePagination(page, totalProducts) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const paginationControls = document.getElementById("pagination-controls");

    const pageLinks = paginationControls.querySelectorAll(".page-item.page-number");
    pageLinks.forEach(link => link.remove());
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("li");
        pageButton.classList.add("page-item", "page-number");

        const pageLink = document.createElement("a");
        pageLink.classList.add("page-link");
        pageLink.href = "#";
        pageLink.textContent = i;

        if (i === page) {
            pageButton.classList.add("active");
        }

        pageButton.appendChild(pageLink);
        paginationControls.insertBefore(pageButton, document.getElementById("next-btn"));

        pageLink.addEventListener("click", () => {
            currentPage = i;
            displayProducts(products, currentPage);
            updatePagination(currentPage, products.length);
        });
    }
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    if (page === 1) {
        prevButton.classList.add("disabled");
    } else {
        prevButton.classList.remove("disabled");
    }

    if (page === totalPages) {
        nextButton.classList.add("disabled");
    } else {
        nextButton.classList.remove("disabled");
    }
}
document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayProducts(products, currentPage);
        updatePagination(currentPage, products.length);
    }
});

document.getElementById("next-btn").addEventListener("click", () => {
    const totalPages = Math.ceil(products.length / productsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayProducts(products, currentPage);
        updatePagination(currentPage, products.length);
    }
});
displayProducts(products, currentPage);
updatePagination(currentPage, products.length);

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

$(document).ready(function () {
    $('.ff').click(function () {
        $('.active').toggle(1000);
    });
});