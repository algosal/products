import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import AddProduct from "./components/addProducts";
import DisplayProducts from "./components/allProducts";
import React, { useState } from "react";

export let MyProducts = React.createContext({});

function App() {
  let [myProducts, setMyProducts] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <MyProducts.Provider value={[myProducts, setMyProducts]}>
          <header className="App-header"></header>
          <header className="App-header-fixed">
            Salman Saeed Products
            <Link to={"/"}>
              {myProducts.authenticated === true ? (
                <button
                  className="sign-out"
                  onClick={() =>
                    setMyProducts({ ...myProducts, authenticated: false })
                  }
                >
                  Sign Out
                </button>
              ) : (
                <></>
              )}
            </Link>
          </header>

          <Routes>
            <Route path="/" element={<Login />} />
            {myProducts.authenticated === true ? (
              <Route path="/add-product" element={<AddProduct />} />
            ) : (
              <Route path="/add-product" element={<Login />} />
            )}

            <Route path="/all-products" element={<DisplayProducts />} />
          </Routes>
        </MyProducts.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
