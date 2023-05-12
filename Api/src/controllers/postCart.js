const { Cart } = require("../db");

const createCart = async (userSub, quantity, cart_amount, cart_status) => {
    const newShoppingCart = await Cart.create({ 
        userSub,
        quantity,
        cart_amount,
        cart_status
    });
    return newShoppingCart;
}

module.exports = { createCart };