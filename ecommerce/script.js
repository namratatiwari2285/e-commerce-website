// Product data
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 99.99,
        rating: 4.5,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
        description: "High-quality wireless Bluetooth headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals."
    },
    {
        id: 2,
        name: "Smart Watch Series 5",
        price: 299.99,
        rating: 4.8,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
        description: "Advanced smartwatch with health monitoring, GPS, and long battery life. Stay connected and track your fitness goals."
    },
    {
        id: 3,
        name: "Cotton T-Shirt",
        price: 24.99,
        rating: 4.2,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
        description: "Comfortable 100% cotton t-shirt available in multiple colors. Perfect for casual wear and everyday comfort."
    },
    {
        id: 4,
        name: "Running Shoes",
        price: 89.99,
        rating: 4.6,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
        description: "Lightweight running shoes with advanced cushioning and breathable material. Ideal for athletes and fitness enthusiasts."
    },
    {
        id: 5,
        name: "Ceramic Plant Pot",
        price: 19.99,
        rating: 4.3,
        category: "home",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop&crop=center",
        description: "Beautiful ceramic plant pot with drainage holes. Perfect for indoor plants and home decoration."
    },
    {
        id: 6,
        name: "LED Desk Lamp",
        price: 49.99,
        rating: 4.4,
        category: "home",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
        description: "Adjustable LED desk lamp with multiple brightness levels and USB charging port. Great for work and study."
    },
    {
        id: 7,
        name: "Face Moisturizer",
        price: 34.99,
        rating: 4.7,
        category: "beauty",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
        description: "Hydrating face moisturizer with SPF protection. Suitable for all skin types and provides all-day moisture."
    },
    {
        id: 8,
        name: "Hair Shampoo",
        price: 15.99,
        rating: 4.1,
        category: "beauty",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center",
        description: "Gentle cleansing shampoo for all hair types. Leaves hair soft, shiny, and manageable."
    },
    {
        id: 9,
        name: "Wireless Mouse",
        price: 29.99,
        rating: 4.5,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop&crop=center",
        description: "Ergonomic wireless mouse with precision tracking and long battery life. Compatible with multiple devices."
    },
    {
        id: 10,
        name: "Yoga Mat",
        price: 39.99,
        rating: 4.6,
        category: "home",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=center",
        description: "Non-slip yoga mat with excellent grip and cushioning. Perfect for yoga, pilates, and home workouts."
    },
    {
        id: 11,
        name: "Sunglasses",
        price: 79.99,
        rating: 4.4,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center",
        description: "Stylish sunglasses with UV protection. Lightweight frames and polarized lenses for clear vision."
    },
    {
        id: 12,
        name: "Essential Oil Diffuser",
        price: 59.99,
        rating: 4.3,
        category: "home",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
        description: "Ultrasonic essential oil diffuser with LED lights and timer. Creates a relaxing atmosphere in your home."
    }
];

// Customer Reviews
const reviews = [
    {
        id: 1,
        name: "Sarah Johnson",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        text: "Absolutely love this product! The quality is outstanding and it exceeded my expectations. Fast shipping and great customer service.",
        date: "2024-03-15"
    },
    {
        id: 2,
        name: "Mike Chen",
        rating: 4,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        text: "Great value for money. The product works exactly as described. Only minor issue with packaging but that doesn't affect the quality.",
        date: "2024-03-12"
    },
    {
        id: 3,
        name: "Emily Davis",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        text: "I've been using this for a week now and I'm impressed! Highly recommend to anyone looking for quality products.",
        date: "2024-03-10"
    },
    {
        id: 4,
        name: "David Wilson",
        rating: 4,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        text: "Solid product with good build quality. Customer support was helpful when I had questions. Will buy again.",
        date: "2024-03-08"
    },
    {
        id: 5,
        name: "Lisa Anderson",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
        text: "Perfect! Exactly what I was looking for. The attention to detail is amazing. Five stars all the way!",
        date: "2024-03-05"
    },
    {
        id: 6,
        name: "James Rodriguez",
        rating: 4,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        text: "Good product overall. Minor improvements could be made but it's definitely worth the price. Happy with my purchase.",
        date: "2024-03-03"
    }
];

// Global variables
let currentPage = 'home';
let currentProduct = null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// DOM elements
const pages = document.querySelectorAll('.page');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const wishlistBtn = document.getElementById('wishlistBtn');
const wishlistCount = document.getElementById('wishlistCount');
const toast = document.getElementById('toast');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateWishlistCount();
    loadHomePage();
    setupEventListeners();
    startHeroSlider();
});

// Setup event listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-logo, .btn-primary').forEach(btn => {
        if (btn.textContent.includes('Shop Now') || btn.textContent.includes('Explore') || btn.textContent.includes('Order Now')) {
            btn.addEventListener('click', () => showPage('products'));
        }
    });

    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            if (page) {
                showPage(page);
                updateActiveNavLink(page);
            }
        });
    });

    // Footer links
    document.querySelectorAll('.footer-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            if (page) {
                showPage(page);
                updateActiveNavLink(page);
            }
        });
    });

    // Search
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Cart and Wishlist
    cartBtn.addEventListener('click', () => showPage('cart'));
    wishlistBtn.addEventListener('click', () => showPage('products')); // For now, just go to products

    // Category filters
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            showPage('products');
            filterProducts(category);
        });
    });

    // Product filters
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
    document.getElementById('sortFilter').addEventListener('change', sortProducts);

    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', () => showPage('checkout'));
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);

    // Continue shopping
    document.getElementById('continueShoppingBtn').addEventListener('click', () => showPage('home'));
}

// Page navigation
function showPage(pageId) {
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    currentPage = pageId;

    // Update active navigation link
    updateActiveNavLink(pageId);

    // Update breadcrumb
    const productName = currentProduct ? currentProduct.name : '';
    updateBreadcrumb(pageId, productName);

    // Load page content
    switch (pageId) {
        case 'home':
            loadHomePage();
            break;
        case 'products':
            loadProductsPage();
            break;
        case 'productDetails':
            loadProductDetailsPage();
            break;
        case 'cart':
            loadCartPage();
            break;
        case 'checkout':
            loadCheckoutPage();
            break;
        case 'orderSuccess':
            loadOrderSuccessPage();
            break;
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Update active navigation link
function updateActiveNavLink(pageId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageId) {
            link.classList.add('active');
        }
    });
}

// Home page
function loadHomePage() {
    const featuredGrid = document.getElementById('featuredGrid');
    const featuredProducts = products.slice(0, 4); // Show first 4 products

    featuredGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    setupProductCardEvents();
}

// Products page
function loadProductsPage() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = products.map(product => createProductCard(product)).join('');
    setupProductCardEvents();
}

// Product details page
function loadProductDetailsPage() {
    if (!currentProduct) return;

    document.getElementById('productImg').src = currentProduct.image;
    document.getElementById('productName').textContent = currentProduct.name;
    document.getElementById('productRating').innerHTML = createRatingHTML(currentProduct.rating);
    document.getElementById('productPrice').textContent = `$${currentProduct.price.toFixed(2)}`;
    document.getElementById('productDescription').textContent = currentProduct.description;

    // Load reviews
    loadReviews();

    // Quantity selector
    let quantity = 1;
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('decreaseQty').addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            document.getElementById('quantity').textContent = quantity;
        }
    });
    document.getElementById('increaseQty').addEventListener('click', () => {
        quantity++;
        document.getElementById('quantity').textContent = quantity;
    });

    // Add to cart
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        addToCart(currentProduct, quantity);
        showToast('Item added to cart!');
    });

    // Buy now
    document.getElementById('buyNowBtn').addEventListener('click', () => {
        addToCart(currentProduct, quantity);
        showPage('cart');
    });
}

// Cart page
function loadCartPage() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        cartSummary.style.display = 'none';
        return;
    }

    cartSummary.style.display = 'block';
    cartItems.innerHTML = cart.map(item => createCartItemHTML(item)).join('');

    // Setup cart item events
    setupCartItemEvents();

    // Update totals
    updateCartTotals();
}

// Checkout page
function loadCheckoutPage() {
    const orderItems = document.getElementById('orderItems');
    const orderTotal = document.getElementById('orderTotal');

    orderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    orderTotal.textContent = total.toFixed(2);
}

// Order success page
function loadOrderSuccessPage() {
    const successOrderItems = document.getElementById('successOrderItems');
    const successTotal = document.getElementById('successTotal');

    successOrderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    successTotal.textContent = total.toFixed(2);

    // Clear cart after successful order
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Create product card HTML
function createProductCard(product) {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-rating">
                    ${createRatingHTML(product.rating)}
                </div>
                <div class="product-category">${product.category}</div>
                <div class="product-actions">
                    <button class="add-to-cart">Add to Cart</button>
                    <button class="wishlist-btn ${isInWishlist ? 'active' : ''}">❤️</button>
                </div>
            </div>
        </div>
    `;
}

// Create rating HTML
function createRatingHTML(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<span class="star">★</span>';
    }
    if (hasHalfStar) {
        stars += '<span class="star">☆</span>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<span class="star" style="color: #ddd;">☆</span>';
    }

    return `${stars} <span>(${rating})</span>`;
}

// Setup product card events
function setupProductCardEvents() {
    document.querySelectorAll('.product-card').forEach(card => {
        const productId = parseInt(card.dataset.productId);
        const product = products.find(p => p.id === productId);

        // Click on card to view details
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart') && !e.target.classList.contains('wishlist-btn')) {
                currentProduct = product;
                showPage('productDetails');
            }
        });

        // Add to cart
        card.querySelector('.add-to-cart').addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product, 1);
            showToast('Item added to cart!');
        });

        // Wishlist
        card.querySelector('.wishlist-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleWishlist(product);
        });
    });
}

// Create cart item HTML
function createCartItemHTML(item) {
    return `
        <div class="cart-item" data-product-id="${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)} each</p>
                <div class="cart-quantity">
                    <button class="decrease-qty">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-qty">+</button>
                </div>
            </div>
            <button class="remove-item">Remove</button>
        </div>
    `;
}

// Setup cart item events
function setupCartItemEvents() {
    document.querySelectorAll('.cart-item').forEach(item => {
        const productId = parseInt(item.dataset.productId);
        const cartItem = cart.find(item => item.id === productId);

        item.querySelector('.decrease-qty').addEventListener('click', () => {
            if (cartItem.quantity > 1) {
                cartItem.quantity--;
                updateCart();
            }
        });

        item.querySelector('.increase-qty').addEventListener('click', () => {
            cartItem.quantity++;
            updateCart();
        });

        item.querySelector('.remove-item').addEventListener('click', () => {
            removeFromCart(productId);
        });
    });
}

// Cart functions
function addToCart(product, quantity) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (currentPage === 'cart') {
        loadCartPage();
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal; // No tax/shipping for simplicity

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}

// Wishlist functions
function toggleWishlist(product) {
    const index = wishlist.findIndex(item => item.id === product.id);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(product);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();

    // Update UI
    document.querySelectorAll(`[data-product-id="${product.id}"] .wishlist-btn`).forEach(btn => {
        btn.classList.toggle('active');
    });
}

function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
}

// Search and filter functions
function handleSearch() {
    const query = searchInput.value.toLowerCase();
    showPage('products');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    displayFilteredProducts(filteredProducts);
}

function filterProducts(category = '') {
    if (typeof category === 'object') {
        category = document.getElementById('categoryFilter').value;
    }

    let filteredProducts = products;
    if (category) {
        filteredProducts = products.filter(product => product.category === category);
    }

    displayFilteredProducts(filteredProducts);
}

function sortProducts() {
    const sortBy = document.getElementById('sortFilter').value;
    let sortedProducts = [...products];

    switch (sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // Name sorting
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    displayFilteredProducts(sortedProducts);
}

function displayFilteredProducts(filteredProducts) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    setupProductCardEvents();
}

// Checkout
function handleCheckout(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    if (!name || !address || !phone) {
        alert('Please fill in all required fields.');
        return;
    }

    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    showPage('orderSuccess');
}

// Hero slider
function startHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    let currentSlide = 0;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Auto slide
    startAutoSlide();

    // Arrow navigation
    prevArrow.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    nextArrow.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            showSlide(index);
            startAutoSlide();
        });
    });

    // Pause on hover
    const hero = document.querySelector('.hero');
    hero.addEventListener('mouseenter', stopAutoSlide);
    hero.addEventListener('mouseleave', startAutoSlide);
}

// Toast notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Fade in animation on scroll
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.product-card, .category-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    elements.forEach(element => observer.observe(element));
}

// Update breadcrumb navigation
function updateBreadcrumb(pageId, productName = '') {
    console.log('Updating breadcrumb for page:', pageId, 'product:', productName);
    const breadcrumbContent = document.getElementById('breadcrumbContent');
    const backBtn = document.getElementById('backBtn');

    if (!breadcrumbContent || !backBtn) {
        console.error('Breadcrumb elements not found');
        return;
    }

    let breadcrumbText = '';
    let showBackBtn = false;
    let backAction = '';

    switch (pageId) {
        case 'home':
            breadcrumbText = 'Home';
            showBackBtn = false;
            break;
        case 'products':
            breadcrumbText = 'Home > Products';
            showBackBtn = true;
            backAction = 'home';
            break;
        case 'productDetails':
            breadcrumbText = `Home > Products > ${productName}`;
            showBackBtn = true;
            backAction = 'products';
            break;
        case 'cart':
            breadcrumbText = 'Home > Cart';
            showBackBtn = true;
            backAction = 'products';
            break;
        case 'checkout':
            breadcrumbText = 'Home > Cart > Checkout';
            showBackBtn = true;
            backAction = 'cart';
            break;
        case 'orderSuccess':
            breadcrumbText = 'Home > Order Confirmation';
            showBackBtn = true;
            backAction = 'home';
            break;
    }

    breadcrumbContent.textContent = breadcrumbText;
    backBtn.style.display = showBackBtn ? 'block' : 'none';
    if (showBackBtn) {
        backBtn.onclick = () => showPage(backAction);
    }
}

// Load reviews for product details page
function loadReviews() {
    console.log('Loading reviews...');
    const reviewsGrid = document.getElementById('reviewsGrid');
    if (!reviewsGrid) {
        console.error('reviewsGrid element not found');
        return;
    }
    reviewsGrid.innerHTML = reviews.map(review => createReviewCard(review)).join('');
    console.log('Reviews loaded:', reviews.length);
}

// Create review card HTML
function createReviewCard(review) {
    const stars = createRatingHTML(review.rating);
    return `
        <div class="review-card">
            <div class="review-header">
                <img src="${review.image}" alt="${review.name}" class="review-avatar">
                <div class="review-info">
                    <h4>${review.name}</h4>
                    <div class="review-rating">${stars}</div>
                    <span class="review-date">${formatDate(review.date)}</span>
                </div>
            </div>
            <div class="review-content">
                <p>${review.text}</p>
            </div>
        </div>
    `;
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Initialize fade in animation
fadeInOnScroll();