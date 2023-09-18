import React, { useState } from "react";
import axios from "axios";
import "../styles/products.css";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    discounted_price: 0,
    cost: 0,
    commission: 0,
    handling_software_cost: 0,
    description: "",
    value_preposition: "",
    company: "",
    manufacturer: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: String(value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(product);

    try {
      await axios
        .post(
          "https://45bc1kwbzc.execute-api.us-east-2.amazonaws.com/v1/products",
          product
        )
        .then((d) => {
          //   console.log(d)
        });
      //   console.log("Product added successfully:", response);
      // Reset the form after successful submission
      setProduct({
        name: "",
        price: 0,
        discounted_price: 0,
        cost: 0,
        commission: 0,
        handling_software_cost: 0,
        description: "",
        value_preposition: "",
        company: "",
        manufacturer: "",
        username: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="div-add">
      <Link to={"/all-products"}>
        <div className="back-button"> &#8592;</div>
      </Link>
      <h2>Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Discounted Price:</label>
          <input
            type="number"
            name="discounted_price"
            value={product.discounted_price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cost:</label>
          <input
            type="number"
            name="cost"
            value={product.cost}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Commission:</label>
          <input
            type="number"
            name="commission"
            value={product.commission}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Handling & Software Cost:</label>
          <input
            type="number"
            name="handling_software_cost"
            value={product.handling_software_cost}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Value Proposition:</label>
          <input
            type="text"
            name="value_preposition"
            value={product.value_preposition}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={product.company}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Manufacturer:</label>
          <input
            type="text"
            name="manufacturer"
            value={product.manufacturer}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={product.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
