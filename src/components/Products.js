import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/slices/products-slice";
import Cart from "./Cart";
import { addToCart } from "../redux/slices/cart-slice";
import { Link, useParams } from "react-router-dom";
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  const AddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <section className="products" style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => {
              return (
                <div className="col-lg-3 col-md-6 col-12 mb-4" key={product.id}>
                  <Card className="w-100 p-3 text-center">
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ width: "100%", height: "300px" }}
                    />
                    <Card.Body>
                      <Card.Text
                        className="fs-5"
                        style={{
                          fontWeight: "500",
                          textTransform: "capitalize",
                        }}
                      >
                        {product.category}
                      </Card.Text>
                      <Card.Title className="mb-3">
                        $ {product.price}
                      </Card.Title>
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <Button
                          onClick={() => AddToCart(product)}
                          className="my-2 mx-1 btn-md"
                          style={{
                            backgroundColor: "darkslateblue",
                            padding: "5px 10px",
                          }}
                        >
                          Add To Cart
                        </Button>
                        <Link
                          to={`/product/${product.id}`}
                          className="mx-1 my-2 btn-sm rounded-1 text-white btn btn-success"
                        >
                          Details
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })
          ) : (
            <h2>There is no products...............!</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
