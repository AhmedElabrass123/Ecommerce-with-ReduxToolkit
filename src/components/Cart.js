import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAll,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/cart-slice";

const Cart = () => {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const deleteProduct = (product) => {
    dispatch(removeFromCart(product));
  };
  const prices = carts.map((cart) => {
    return cart.price * cart.quantity;
  });
  const totalPrice = prices.reduce((x, y) => {
    return x + y;
  }, 0);
  // ===============decrement btn======
  const decrementFunc = (product) => {
    dispatch(decrementQuantity(product));
    if (product.quantity === 1) {
      dispatch(removeFromCart(product));
    }
  };
  // ===============increment btn======
  const incrementFunc = (product) => {
    dispatch(incrementQuantity(product));
  };
  return (
    <div className="" style={{ marginTop: "100px" }}>
      <h2
        className="w-100 text-center my-4"
        style={{
          letterSpacing: "1px",
          fontWeight: "500",
          color: "darkslateblue",
        }}
      >
        Welcome To Cart
      </h2>

      <div className="w-100 text-center mb-3">
        <h3>Total Price : $ {carts.length > 0 ? totalPrice.toFixed(2) : 0}</h3>
      </div>
      {carts.length > 0 && (
        <div className="clearAll w-100 text-center mb-5">
          <button
            className="btn btn-dark text-white fw-semibold"
            style={{ letterSpacing: "1px", fontSize: "20px" }}
            onClick={() => dispatch(clearAll())}
          >
            Clear All
          </button>
        </div>
      )}
      <div className="cartContent">
        <div className="container">
          <Table
            bordered
            hover
            size="lg"
            style={{ width: "100%", verflowX: "auto" }}
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quentity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {carts.length > 0 ? (
                carts.map((cart) => {
                  return (
                    <tr key={cart.id}>
                      <td>{cart.id}</td>
                      <td>{cart.title}</td>
                      <td style={{ width: "60px", height: "60px" }}>
                        <img src={cart.image} className="w-100 h-100" />
                      </td>
                      <td>$ {cart.price}</td>
                      <th className="in-deBtn">
                        <button
                          onClick={() => decrementFunc(cart)}
                          className="py-1 px-2 btn-sm mx-2 rounded-1"
                        >
                          -
                        </button>
                        {cart.quantity}
                        <button
                          onClick={() => incrementFunc(cart)}
                          className="py-1 px-2 btn-sm mx-2 rounded-1"
                        >
                          +
                        </button>
                      </th>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteProduct(cart)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div className="w-100 text-center">
                  <h2 className="py-3">There is no products............!</h2>
                </div>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
