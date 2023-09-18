import React, { useContext, useState } from "react";
import "../styles/Login.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import { MyProducts } from "../App";
import login from "../utils/login";

const Login = () => {
  let navigate = useNavigate();
  let [myProducts, setMyProducts] = useContext(MyProducts);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      alert("Fields Empty");
      return;
    }

    // Implement your login logic here
    login({ username: username, password }).then((d) => {
      console.log(myProducts);
      console.log(myProducts.authenticated);

      console.log(d);
      if (d === 200) {
        setMyProducts({ ...myProducts, authenticated: true });
        navigate("/all-products");
      } else {
        alert("Check Your Username and Password Again");
      }
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      {!loggedIn ? (
        <div className="login-form">
          <h2 className="login-title">Products</h2>
          <label className="login-label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <label className="login-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress} // Add this line to handle key press
            className="login-input"
          />
          <div className="block-div">
            <button onClick={handleLogin} className="login-button">
              Login
            </button>
          </div>
        </div>
      ) : (
        <div className="login-success">
          <h3>Login Successful!</h3>
          <p>Welcome, {username}!</p>
        </div>
      )}
    </div>
  );
};

export default Login;
