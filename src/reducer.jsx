export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // Prevent adding duplicate items to cart
    if (state.cart.find((item) => item.id === action.payload.id)) {
      return {
        ...state,
      };
    }
    // ensure the added item has a quantity (default 1)
    const newItem = {
      ...action.payload,
      quantity: action.payload.quantity ?? 1,
      amount: action.payload.price,
    };
    const newCartItems = [...state.cart, newItem];
    return {
      ...state,
      cart: newCartItems,
    };
  }

  // Delete item from the cart
  if (action.type === "DELETE") {
    return {
      ...state,
      cart: action.payload,
    };
  }
  // Open modal on order
  if (action.type === "ORDER") {
    return { ...state, isModalOpen: true };
  }
  // Close modal and clear cart
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      cart: [],
      isModalOpen: false
    };
  }
  // Clear all cart items
  if (action.type === "CLEAR_ALL") {
    return {
      ...state,
      cart: [],
    };
  }
  // Increase item quantity
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          quantity: item.quantity + 1,
          amount: item.price * (item.quantity + 1),
        };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  // Decrease item quantity
  if (action.type === "DECREASE") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        // Prevent quality from going below 1
        const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
        return {
          ...item,
          quantity: newQuantity,
          amount: item.price * newQuantity,
        };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  // Get totals
  if (action.type === "GET_TOTALS") {
    let { total } = state.cart.reduce(
      (cartTotal, cartItem) => {
        cartTotal.total += cartItem.amount;
        return cartTotal;
      },
      { total: 0 }
    );

    // keep total with two decimals
    total = parseFloat(total.toFixed(2));
    return { ...state, total };
  }

  if (action.type === "FILTER_CART") {
    return {
      ...state,
      desserts: action.payload
    };
  }

  throw new Error("no matching action type");
};
export default reducer;
