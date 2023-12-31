import { cart ,addToCart,calculateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatPrice } from "./utils/money.js";



updateCartQuantity();

let productHTML='';

function updateCartQuantity(){
    const cartQuantity=calculateCartQuantity();
    document.querySelector('.cart-quantity').innerHTML=`${cartQuantity}`;
    
}

products.forEach((product) => {
    productHTML+=`<div class="product-container">
    <div class="product-image-container">
        <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
        ${product.name}
    </div>

    <div class="product-rating-container">
        <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars *10}.png">
        <div class="product-rating-count link-primary">
        ${product.rating.count}
        </div>
    </div>

    <div class="product-price">
        $${formatPrice(product.priceCents)}
    </div>

    <div class="product-quantity-container">
        <select class="js-quantity-selector-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart js-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
    </div>

    <button class="add-to-cart-button button-primary" data-product-id="${product.id}">
        Add to Cart
    </button>
    </div>`;
})


document.querySelector(".products-grid").innerHTML=productHTML;



document.querySelectorAll(".add-to-cart-button").forEach((button)=>{
    button.addEventListener('click',()=>{
        const productId= button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();

        const addedMessage=document.querySelector(`.js-${productId}`);
        addedMessage.classList.add('add-to-cart-opacity');
        setTimeout(()=>{
            addedMessage.classList.remove('add-to-cart-opacity')
        },2000);
    });
});