import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "E:/College/vscode/BootstrapCSS.css";

export default function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const pass = localStorage.getItem(username);
    if (pass === password) {
      localStorage.setItem("user", username);
      setIsAuthenticated(true);
      navigate("/Profile");
    } else {
      alert("Invalid Input.");
    }
  };

  return (
    <div>
      <div className="LoginPage">
        <h2>Login Page</h2>
        <input
          type="email"
          value={username}
          id="exampleFormControlInput1"
          class="form-control"
          placeholder="name@example.com"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          id="inputpassword6"
          class="form-control"
          placeholder="Password"
          area-describedby="passwordHelpline"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} class="btn btn-primary">
          Login
        </button>
        <p>
          New User? <Link to="/Register">Register</Link>
        </p>
      </div>
    </div>
  );
}
