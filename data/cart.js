export let cart=JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart=[{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2
},{
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1
}
    ];
}




export function storageInLocal(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
    let matchingItem;
    cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
            matchingItem=cartItem;
        }
    });
    const selectQuantity=document.querySelector(`.js-quantity-selector-${productId}`);
    const quantity=Number(selectQuantity.value);

        if(matchingItem){
            matchingItem.quantity+=quantity;
        }else{
            cart.push({
            productId:productId,
            quantity:quantity
        });
        }
        storageInLocal();
}

export function removeFromCart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.productId!==productId){
            newCart.push(cartItem);
        }
    });
    cart=newCart;
    storageInLocal();
}
export function calculateCartQuantity(){
    let cartquantity=0;
        cart.forEach((cartItem)=>{
        cartquantity+=cartItem.quantity;
        })
        return cartquantity;
}
export function updateQuantity(productId, newQuantity) {
    let matchingItem;

    cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
        matchingItem = cartItem;
    }
    });

    matchingItem.quantity = newQuantity;

    storageInLocal();
}