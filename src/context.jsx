import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import data from '../data.json';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const defaultState = {
    desserts: data,
    cart: [],
    isModalOpen: false,
    total: 0,
    amount: 0
  }

  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    let cartItems = state.cart.filter(item => item.id !== id);
    dispatch({type: 'DELETE', payload: cartItems})
  }

  const addToCart = (id) => {
    let newItem = state.desserts.find((item) => item.id === id);
    dispatch({type: 'ADD_ITEM', payload: newItem})
  }

  const clearCart = () => {
    dispatch({type: 'CLEAR_ALL'})
  }

  const increase = (id) => {
    dispatch({type: 'INCREASE', payload: id})
  }

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  useEffect(() => {
    dispatch({type: 'GET_TOTALS'})
  },[state.cart])

  const order = () => {
    dispatch({ type: "ORDER" });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const filterCart = (category) => {
    state.desserts = data;
    let filteredCart = state.desserts.filter(item => item.category === category);
    dispatch({ type: "FILTER_CART", payload: category === "all" ? state.desserts : filteredCart});
  }

  return <AppContext.Provider value={{
    ...state,
    removeItem,
    addToCart,
    clearCart,
    increase,
    decrease,
    order,
    closeModal,
    filterCart
  }}>
    {children}
  </AppContext.Provider>
}

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}