// Shopping Cart Management
let cart = [];

// Load cart from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    loadCart();
    updateCartDisplay();
});

// Function to add items to cart
function addToCart(itemName, itemPrice) {
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => item.name === itemName);
    
    if (existingItemIndex !== -1) {
        // Item exists, increment quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // New item, add to cart
        cart.push({
            name: itemName,
            price: itemPrice,
            quantity: 1
        });
    }
    
    // Save cart to localStorage
    saveCart();
    
    // Update display
    updateCartDisplay();
    
    // Show cart sidebar
    showCart();
    
    // Visual feedback
    showAddedNotification(itemName);
}

// Function to remove item from cart
function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    saveCart();
    updateCartDisplay();
}

// Function to update item quantity
function updateQuantity(itemName, change) {
    const item = cart.find(item => item.name === itemName);
    
    if (item) {
        item.quantity += change;
        
        // Remove item if quantity is 0 or less
        if (item.quantity <= 0) {
            removeFromCart(itemName);
        } else {
            saveCart();
            updateCartDisplay();
        }
    }
}

// Function to clear entire cart
function clearCart() {
    if (cart.length === 0) {
        return;
    }
    
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCart();
        updateCartDisplay();
    }
}

// Function to update cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    // Update cart count badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    
    // Display cart items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => {
            const itemTotal = (item.price * item.quantity).toFixed(2);
            return `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="cart-item-total">$${itemTotal}</div>
                        <button class="remove-item" onclick="removeFromCart('${item.name}')">Remove</button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// Function to toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    
    // Prevent body scroll when cart is open
    if (cartSidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Function to show cart (open it)
function showCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (!cartSidebar.classList.contains('active')) {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem('bellaCucinaCart', JSON.stringify(cart));
}

// Function to load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('bellaCucinaCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Function to show notification when item is added
function showAddedNotification(itemName) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'add-notification';
    notification.textContent = `✓ ${itemName} added to cart`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2a7a2a;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
        font-weight: bold;
    `;
    
    // Add animation keyframes if not already added
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 2 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

// Close cart when clicking outside on mobile
document.addEventListener('click', (e) => {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (cartSidebar.classList.contains('active') && 
        !cartSidebar.contains(e.target) && 
        !cartIcon.contains(e.target)) {
        // Don't close if clicking on buttons inside the cart
        if (!e.target.closest('.cart-sidebar')) {
            toggleCart();
        }
    }
});
