import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Menu = () => {
  const location = useLocation();

  const currentTab = (path) => {
    console.log(location.pathname);
    if (location.pathname === path) {
      return { color: "white" };
    } else {
      return { color: "green" };
    }
  };
  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link style={currentTab("/")} className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link style={currentTab("/cart")} className="nav-link" to="/cart">
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link style={currentTab("user/dashboard")} className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link style={currentTab("/admin/Dashboard")} className="nav-link" to="/adminDashboard">
            Admin Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link style={currentTab("/signup")} className="nav-link" to="/signup">
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link style={currentTab("/signin")} className="nav-link" to="/signin">
            Signin
          </Link>
        </li>
        <li className="nav-item">
          <Link style={currentTab("/signout")} className="nav-link" to="/signout">
            Signout
          </Link>
        </li>
      </ul>
    </div>
  );
};
