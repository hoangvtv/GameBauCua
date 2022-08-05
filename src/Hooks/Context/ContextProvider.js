import React, { useReducer } from "react";

export const context = React.createContext();

let initialCart = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      //   console.log("addToCart");
      let cartUpdate = [...state];

      let index = cartUpdate.findIndex(
        (itemCart) => itemCart.id === action.item.id
      );
      if (index !== -1) {
        cartUpdate[index].quantity++;
      } else {
        return [...state, { ...action.item, quantity: 1 }];
      }
      return cartUpdate;
    }

    case "deleteCart": {
      console.log("deleteCart");
      let cartUpdate = [...state];
      let index = cartUpdate.findIndex(
        (itemCart) => itemCart.id === action.itemId
      );
      if (index !== -1) {
        cartUpdate.splice(index, 1);
      }

      return cartUpdate;
    }

    default:
      break;
  }
  return [...state];
};

export default function ContextProvider(props) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  //store giống như rootReducer chứa nhièu state bên trong
  const store = {
    cartReducer: [cart, dispatch],
  };

  //Dùng context bao bọc tất cả các component trong App
  return <context.Provider value={store}>{props.children}</context.Provider>;
}
