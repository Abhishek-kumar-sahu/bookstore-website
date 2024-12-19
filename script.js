// Sample book data (for demonstration)
const books = [
  { title: "The 48 Laws Of Power", author: "Francesc Miralles and Hector Garcia", link: "http://127.0.0.1:5501/power.html" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", link: "http://127.0.0.1:5501/the_great_gatsby.html" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", link: "http://127.0.0.1:5501/mockingbird.html" },
  { title: "1984", author: "George Orwell", link: "http://127.0.0.1:5501/1984book.html" },
  { title: "Ikigai: The Japanese Secret to a Long and Happy Life", author: "Francesc Miralles and Hector Garcia", link: "http://127.0.0.1:5501/ikigai.html" },
  { title: "Think Straight : Change Your Thoughts, Change Your Life", author: "Darius Foroux", link: "http://127.0.0.1:5501/thinkstraight.html" },
];

// Function to search for books based on user input
function searchBooks() {
  const resultsContainer = document.getElementById('results');
  const query = document.getElementById('searchInput').value.toLowerCase().trim();

  // Clear previous results
  resultsContainer.innerHTML = '';

  // Check if the query is empty
  if (query === '') {
    resultsContainer.innerHTML = '<p class="enter-query">Please enter Book name  .</p>';
    return;
  }

  // Filter books based on the search query
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
  );

  // Display search results
  if (filteredBooks.length > 0) {
    filteredBooks.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');

      // Highlight matched text
      const highlightedTitle = highlightMatch(book.title, query);
      const highlightedAuthor = highlightMatch(book.author, query);

      bookElement.innerHTML = `
        <strong><a href="${book.link}" target="_blank">${highlightedTitle} by ${highlightedAuthor}</a></strong>
      `;
      resultsContainer.appendChild(bookElement);
    });
  } else {
    resultsContainer.innerHTML = '<p class="no-results">No results found.</p>';
  }
}

// Helper function to highlight matched text
function highlightMatch(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, `<span style="background-color: yellow;">$1</span>`);
}

// Optional: Trigger search on pressing Enter
document.getElementById('searchInput').addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchBooks();
  }
});


function addToCart(name, price, imageUrl) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = { name, price, quantity: 1, imageUrl };

  // Check if the product already exists in the cart
  const existingProduct = cart.find(item => item.name === name);
  if (existingProduct) {
      existingProduct.quantity += 1; // Increase quantity if already in cart
  } else {
      cart.push(product); // Add new product if not in cart
  }

  // Save updated cart back to local storage
  localStorage.setItem("cart", JSON.stringify(cart));
  // Function to proceed to checkout
function showSmallFlashMessage() {
  const flashMessage = document.getElementById("flash-message");
  flashMessage.classList.add("show");

  // Automatically hide after 2 seconds
  setTimeout(() => {
      flashMessage.classList.remove("show");
  }, 2000);
}

// Call this function when a product is added to the cart
showSmallFlashMessage();



// Load cart items on page load
window.onload = displayCart;
}
