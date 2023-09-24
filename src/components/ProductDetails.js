import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState("");
  const paramsId = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${paramsId.proId}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, []);
  return (
    <div className="productDetails" style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="row justify-content-around align-items-center flex-wrap">
          <div className="leftSide col-lg-3 col-md-4 col-12">
            <div className="w-100 d-flex align-items-center">
              <img className="w-100" src={productDetails.image} />
            </div>
          </div>
          <div className="rightSide col-lg-7 col-md-5 col-12">
            <h4 className="title">
              Title : <span>{productDetails.title}</span>
            </h4>
            <h4 className="category">
              Category : <span>{productDetails.category}</span>
            </h4>
            <h4 className="desc">
              Description : <p>{productDetails.description}</p>
            </h4>
            <h4 className="price">
              Price : <span>$ {productDetails.price}</span>
            </h4>
          </div>
        </div>
        <div className="w-100 text-center my-5">
          <Link
            to="/"
            className="py-2 px-4 rounded-1 fw-bold text-white"
            style={{
              fontSize: "20px",
              letterSpacing: "1px",
              backgroundColor: "darkslateblue",
              textDecoration: "none",
            }}
          >
            Go Shopping {">>"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
