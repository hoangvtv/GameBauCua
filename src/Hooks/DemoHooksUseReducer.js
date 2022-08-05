import React, { useReducer, useEffect } from "react";

const initialCart = [{ id: 1, name: "Iphone", price: 1000, quantity: 1 }];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      console.log("addToCart");
      let cartUpdate = [...state];

      let index = cartUpdate.findIndex(
        (itemCart) => itemCart.id === action.item.id
      );
      if (index !== -1) {
        cartUpdate[index].quantity++;
      } else {
        const itemCart = { ...action.item, quantity: 1 };
        cartUpdate.push(itemCart);
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

let arrProduct = [
  { id: 1, name: "Iphone", price: 1000 },
  { id: 2, name: "Note 10 plus", price: 5000 },
  { id: 3, name: "Huawei P20", price: 1200 },
];

export default function DemoHooksUseReducer() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const addToCart = (item) => {
    // dispatch({
    //   type: "addToCart",
    //   item,
    // });
    console.log("addToCart");
    let action = {
      type: "addToCart",
      item,
    };
    dispatch(action);
  };

  const deleteCart = (itemId) => {
    console.log("deleteCart");
    dispatch({
      type: "deleteCart",
      itemId,
    });
  };

  useEffect(() => {
    console.log("useEffect");
  }, []);
  return (
    console.log("re-render"),
    (
      <div className="container mt-5">
        <h3> List Product </h3>
        <div className="row  mb-5">
          {arrProduct.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card text-left">
                  <img
                    className="card-img-top"
                    src={"https://picsum.photos/200/200"}
                    alt={index}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.price} $</p>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        console.log("acion add");
                        addToCart(item);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h3> Giỏ hàng </h3>
        <table className="table">
          <thead>
            <tr>
              <th> ID </th>
              <th> Name </th>
              <th> Price </th>
              <th> Quantity </th>
              <th> Total </th>
              <th> </th>
            </tr>
          </thead>

          <tbody>
            {cart.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.id} </td>
                  <td>{product.name} </td>
                  <td>{product.price} </td>
                  <td>{product.quantity} </td>
                  <td>{product.quantity * product.price} </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteCart(product.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  );
}
