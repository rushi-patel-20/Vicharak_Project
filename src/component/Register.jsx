import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "E:/College/vscode/BootstrapCSS.css";

export default function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (localStorage.getItem(registerUsername)) {
      alert("User Already Exists.");
      navigate("/");
      return;
    }
    localStorage.setItem(registerUsername, registerPassword);
    alert("User Registered Successfully.");
    setRegisterUsername("");
    setRegisterPassword("");
    navigate("/");
  };
  return (
    <div>
      <div className="RegisterPage">
        <h2>Register Page</h2>
        <input
          type="email"
          value={registerUsername}
          id="exampleFormControlInput1"
          class="form-control"
          placeholder="name@example.com"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          type="password"
          value={registerPassword}
          id="inputpassword6"
          class="form-control"
          placeholder="Password"
          area-describedby="passwordHelpline"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />

        <button onClick={handleRegister} class="btn btn-primary">
          Register
        </button>
        <p>
          Already a User? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
