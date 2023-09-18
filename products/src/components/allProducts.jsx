import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/myproducts.css";
import { Link } from "react-router-dom";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://45bc1kwbzc.execute-api.us-east-2.amazonaws.com/v1/products"
      ); // Replace with your API endpoint
      //   console.log(response.data.body);
      setProducts(JSON.parse(response.data.body));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="my-products">
      <Link to={"/add-product"}>
        <button className="new-button">New</button>
      </Link>
      <h2>All Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.uuid}>
            {/* &#128465; */}
            <div
              className="del-button"
              onClick={() => {
                // alert("deleted");
                axios
                  .delete(
                    "https://45bc1kwbzc.execute-api.us-east-2.amazonaws.com/v1/products",
                    { data: { uuid: product.uuid } }
                  )
                  .then((d) => {
                    // console.log(d)
                    fetchData();
                  });
              }}
            >
              &#128465;
            </div>
            <strong>Name:</strong> {product.name}
            <br />
            <strong>Price:</strong> {product.price}
            <br />
            <strong>Discounted Price:</strong> {product.discounted_price}
            <br />
            <strong>Cost:</strong> {product.cost}
            <br />
            <strong>Commission:</strong> {product.commission}
            <br />
            <strong>Handling & Software Cost:</strong>{" "}
            {product.handling_software_cost}
            <br />
            <strong>Description:</strong> {product.description}
            <br />
            <strong>Value Proposition:</strong> {product.value_preposition}
            <br />
            <strong>Company:</strong> {product.company}
            <br />
            <strong>Manufacturer:</strong> {product.manufacturer}
            <br />
            <strong>Username:</strong> {product.username}
            <br />
            <strong>Product ID:</strong> {product.uuid}
            <br />
            <strong>Created At:</strong> {product.createdAt}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayProducts;
