import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "E:/College/vscode/BootstrapCSS.css";
import Login from "./component/Login";
import Register from "./component/Register";
import Profile from "./component/Profile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("user")
  );
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <Profile />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
