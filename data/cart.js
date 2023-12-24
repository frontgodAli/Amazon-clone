export const cart=[];

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
}

export function updateCartQuantity(){
    let cartquantityheader=0;
    cart.forEach((cartItem)=>{
        cartquantityheader+=cartItem.quantity;
    })
    document.querySelector('.cart-quantity').innerHTML=cartquantityheader;
}