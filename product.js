var featured_products = [
  {
    id: 1,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
  {
    id: 2,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
  {
    id: 3,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
  {
    id: 4,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
  {
    id: 5,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
  {
    id: 6,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
  {
    id: 7,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
  {
    id: 8,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
];

function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("pro");
  productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="des">
            <span>${product.name}</span>
            <h5>${product.description}</h5>
            <div class="star">
              <i class="fas fa-star review"></i>
              <i class="fas fa-star review"></i>
              <i class="fas fa-star review"></i>
              <i class="fas fa-star review"></i>
              <i class="fas fa-star review"></i>
            </div>
            <h4>${product.price} <del>${product.old_price}</del></h4>
            <div class="order">
              <button onclick="window.location.href = 'comingsoon.html';">Order Now</button>
              <a href="comingsoon.html">
                <i class="fas fa-shopping-cart"></i>
              </a>
            </div>
        </div>
        
    `;
  return productCard;
}

function displayFeaturedProducts() {
  const productList = document.getElementById("products-featured");
  featured_products.forEach((product) => {
    const productCard = createProductCard(product);
    productList.appendChild(productCard);
  });
}
displayFeaturedProducts();

var arrival_products = [
  {
    id: 1,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
  {
    id: 2,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
  {
    id: 3,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
  {
    id: 4,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
  {
    id: 5,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
  {
    id: 6,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
  {
    id: 7,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
  {
    id: 8,
    name: "Avengers",
    description: "Avengers Logo Tshirt",
    price: "₹399",
    old_price: "₹599",
    image: "./Images/products/p1.png",
  },
];

function displayArrivalProducts() {
  const productList = document.getElementById("products-arrival");
  arrival_products.forEach((product) => {
    const productCard = createProductCard(product);
    productList.appendChild(productCard);
  });
}
displayArrivalProducts();

