import React, { useState, useReducer } from "react";

const CartContext = React.createContext({
  showModal: false,
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  modalHandler: () => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "REMOVE") {
    const matchIndex = state.items.findIndex((elem) => elem.id === action.val);
    const match = state.items[matchIndex];
    const updatedTotalAmount = state.totalAmount - match.price;

    let updatedItems;
    let updatedItem;
    if (match.amount > 1) {
      updatedItem = { ...match, amount: parseInt(match.amount) - 1 };
      updatedItems = [...state.items];
      updatedItems[matchIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((el) => el.id !== action.val);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.val.price * action.val.amount;
    const matchIndex = state.items.findIndex(
      (elem) => elem.id === action.val.id
    );
    const match = state.items[matchIndex];

    let updatedItems;
    let updatedItem;
    if (!match) {
      updatedItems = state.items.concat(action.val);
    } else {
      updatedItem = {
        ...match,
        amount: parseInt(match.amount) + parseInt(action.val.amount),
      };
      updatedItems = [...state.items];
      updatedItems[matchIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

export const CartContextProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [cartItemsState, dispatchCartItemsState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    //     setItems((prev) => {
    //       return [item, ...prev];
    //     });
    dispatchCartItemsState({ type: "ADD", val: item });
  };
  const removeItemHandler = (id) => {
    //     setItems((prev) => {
    //       return prev.filter((obj) => obj.id !== id);
    //     });
    dispatchCartItemsState({ type: "REMOVE", val: id });
  };

  const modalHandler = () => {
    setShowModal((prev) => {
      return !prev;
    });
  };

  return (
    <CartContext.Provider
      value={{
        showModal: showModal,
        items: cartItemsState.items,
        totalAmount: cartItemsState.totalAmount,
        removeItem: removeItemHandler,
        addItem: addItemHandler,
        modalHandler: modalHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
