const countDown = () => {
    const countDownDate = new Date("2025-02-28T00:00:00Z").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    if (distance < 0) {
        clearInterval(timerInterval);
        document.querySelector(".countdown-container").innerHTML = "<h2>Countdown Ended!</h2>";
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
const buttons = document.querySelectorAll('.shop-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('btn-dark', 'text-white'));
            buttons.forEach(btn => btn.classList.add('btn-transparent', 'text-muted'));
            button.classList.add('btn-dark', 'text-white');
            button.classList.remove('btn-transparent', 'text-muted');
        });
    });

    function showCategory(categoryId) {
        document.querySelectorAll('.category').forEach(function(category) {
            category.style.display = 'none';
        });
        document.getElementById(categoryId).style.display = 'flex';
    }

    function viewProduct(name, imageUrl, price) {
        localStorage.setItem('productName', name);
        localStorage.setItem('productImage', imageUrl);
        localStorage.setItem('productPrice', price);
        window.location.href = './product/product.html';
    }

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove("bg-dark");
            dots[i].classList.add("bg-secondary");
        }

        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].classList.add("bg-dark");
    }

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
        window.location.href = './cart/cart.html';
    }
    