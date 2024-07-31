import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "E:/College/vscode/BootstrapCSS.css";

export default function Profile() {
  const username = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div className="ProfilePage">
      <h2>Profile</h2>
      <p>Logged in as: {username}</p>
      <button onClick={handleLogout} class="btn btn-primary">
        Log Out
      </button>
    </div>
  );
}
