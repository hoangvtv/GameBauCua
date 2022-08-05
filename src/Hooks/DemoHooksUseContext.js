import React, { useContext } from "react";
import { context } from "./Context/ContextProvider";

let arrProduct = [
  { id: 1, name: "Iphone", price: 1000 },
  { id: 2, name: "Note 10 plus", price: 5000 },
  { id: 3, name: "Huawei P20", price: 1200 },
];

export default function DemoHooksUseContext() {
  //   return <context.Consumer>DemoHooksUseContext</context.Consumer>;

  // let store = useContext(context);
  // let cartReducer = store.cartReducer;
  let { cartReducer } = useContext(context);
  let [cart, dispatch] = cartReducer;
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
  return (
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
  );
}
