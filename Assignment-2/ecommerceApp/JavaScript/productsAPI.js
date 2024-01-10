const container = document.querySelector(".all-products-container");

fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => {
    console.log('API Response:', data);
    if (Array.isArray(data.products)) {
      data.products.forEach(productData => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.setAttribute("data-aos", "zoom-in");

        const productImage = document.createElement("img");
        productImage.classList.add("product-image")
        productImage.src = productData.images[0];
        productImage.alt = productData.title;

        const productTitle = document.createElement("h2");
        productTitle.classList.add("product-title")
        productTitle.textContent = productData.title;

        const productDescription = document.createElement("p");
        productDescription.classList.add("product-description")
        productDescription.textContent = productData.description;

        const productPrice = document.createElement("span");
        productPrice.classList.add("product-price")
        productPrice.textContent = `Price : ${productData.price} /-`;

        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productDescription);
        productCard.appendChild(productPrice);
        container.appendChild(productCard);
      });
    } else {
      console.error('Data.products is not an array:', data);
    }
  })
  .catch(error => console.error('Error fetching data:', error));
