export let products = [];
export function loadProducts() {
  const xhr = new XMLHttpRequest();

  class Product {
    id;
    image;
    name;
    rating;
    priceCents;

    constructor(productDetails) {
      this.id = productDetails.id;
      this.image = productDetails.image;
      this.name = productDetails.name;
      this.rating = productDetails.rating;
      this.priceCents = productDetails.priceCents;
    }

    getStarsUrl() {
      return `images/ratings/rating-${this.rating.stars * 10}.png`;
    }

    getPrice() {
      return `$${formatCurrency(this.priceCents)}`;
    }

    extraInfoHTML() {
      return "";
    }
  }

  class Clothing extends Product {
    sizeChartLink;

    constructor(productDetails) {
      super(productDetails);
      this.sizeChartLink = productDetails.sizeChartLink;
    }

    extraInfoHTML() {
      // super.extraInfoHTML();
      return `
        <a href="${this.sizeChartLink}" target="_blank">
          Size chart
        </a>
      `;
    }
  }

  //we can set async by using callBacks

  xhr.addEventListener("load", () => {
    products = JSON.parse(xhr.response).map((productDetails) => {
      if (productDetails.type === "clothing") {
        return new Clothing(productDetails);
      }
      return new Product(productDetails);
    });
    console.log(products);
  });

  xhr.open("GET", "https://supersimplebackend.dev/products");
  xhr.send();
}
loadProducts();

function loadFetch() {
  const promise = fetch("https://supersimplebackend.dev/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

  return promise;
}

//response.json() is same as JSON.parse(response)

//response.json is async;
//fetch returns a promise
