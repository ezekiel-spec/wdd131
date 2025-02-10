// Product array
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Product D" },
    { id: 5, name: "Product E" }
  ];
  
  // Populate product name options
  window.addEventListener("DOMContentLoaded", function() {
    const productNameSelect = document.getElementById("product-name");
    products.forEach(function(product) {
      const option = document.createElement("option");
      option.value = product.id;
      option.text = product.name;
      productNameSelect.appendChild(option);
    });
  });
  
  // Review counter
  window.addEventListener("load", function() {
    if (window.location.href.includes("review.html")) {
      const reviewCounter = document.getElementById("review-counter");
      let count = localStorage.getItem("reviewCount");
      if (count === null) {
        count = 0;
      } else {
        count = parseInt(count);
      }
      count++;
      localStorage.setItem("reviewCount", count);
      reviewCounter.textContent = `You have submitted ${count} reviews.`;
    }
  });