import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="dv1">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/"><a className="a2">HOME</a></Link>
          </li>
          <li>
            <Link to="/about"><a className="a2">ABOUT</a></Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
