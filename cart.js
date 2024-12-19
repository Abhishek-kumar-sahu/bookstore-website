function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsDiv = document.getElementById("cart-items");
  let totalPrice = 0;

  cartItemsDiv.innerHTML = ""; // Clear existing content
  cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");
      itemDiv.innerHTML = `
          <img src="${item.imageUrl}" alt="${item.name}" class="product-image">
          <div class="product-details">
              <h3>${item.name}</h3>
              <p>Price: ₹${item.price}</p>
          </div>
          <div class="quantity-control">
              <button onclick="updateQuantity('decrease', ${index})">-</button>
              <span id="quantity-${index}">${item.quantity}</span>
              <button onclick="updateQuantity('increase', ${index})">+</button>
          </div>
          <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItemsDiv.appendChild(itemDiv);
      totalPrice += item.price * item.quantity;
  });

  document.getElementById("total-price").textContent = `₹${totalPrice}`;
}




// Function to update item quantity
function updateQuantity(action, index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (action === "increase") {
      cart[index].quantity += 1;
  } else if (action === "decrease" && cart[index].quantity > 1) {
      cart[index].quantity -= 1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart(); // Refresh cart
}

// Function to remove an item from the cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); // Remove the item at the specified index
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart(); // Refresh cart
}

// Function to proceed to checkout
function checkout() {
  alert("Proceeding to checkout!");
}

// Load cart items on page load
window.onload = displayCart;
