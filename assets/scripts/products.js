let products;


async function fetchProducts() {
    try {
        const response = await fetch("../../data.json");
        const data = await response.json();
        products = data;
    } catch (error) {
        console.error(error);
    }
}


async function getHeadphones() {
    await fetchProducts();
    return products.filter((product) => product.category === 'headphones');
}
async function gedSpeakers() {
    await fetchProducts();
    return products.filter((product) => product.category === 'speakers');
}
async function gedEarPhones() {
    await fetchProducts();
    return products.filter((product) => product.category === 'earphones');
}

function appendProduct(product, id) {
    const productsElement = document.getElementById(id);
    const picture = `
    <picture>
      <source
        media="(min-width: 992px)"
        srcset="${product.image.desktop}"
      />
      <img
        src="${product.image.mobile}"
        alt="${product.name}"
        class="products-image"
      />
    </picture>
    `;

    const text = `
    <div class="product-text">
      <p class="header-title hero-title text-beige">${product.new ? 'NEW PRODUCT' : ''}</p>
      <h2 class="product-h2">${product.name}</h2>
      <p class="hero-p">${product.description}</p>
      <a href="./product.html" class="btn btn-beige">SEE PRODUCT</a>
    </div>
    `;

    const productHtml = `
    <div class="products-picture">${picture}</div>
    <div class="products-text">${text}</div>
    `
    const productElement = document.createElement('div')
    productElement.innerHTML = productHtml;
    productElement.classList.add('products-block')
    productsElement.appendChild(productElement);
}


