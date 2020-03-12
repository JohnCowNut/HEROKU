export const addItemToCart = (cartItems, cartItemToCart) => {
    const existTingCart = cartItems.find(el => el.id === cartItemToCart.id);
    if (existTingCart) {
        return cartItems.map(el => el.id === cartItemToCart.id ? { ...el, quantity: el.quantity + 1 } : el)
    }
    return [...cartItems, { ...cartItemToCart, quantity: 1 }];
}
export const decreaseAmount = (cartItems, cartItemToCart) => {
    const existTingCart = cartItems.find(el => el.id === cartItemToCart.id);
    if (existTingCart.quantity === 1) {
        return cartItems.filter(el => el.id !== cartItemToCart.id)
    }
    return cartItems.map(el => el.id === cartItemToCart.id ? { ...el, quantity: el.quantity - 1 } : el)
}