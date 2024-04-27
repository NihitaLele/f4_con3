import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div>Header</div>
      <div className="links">
        <Link className="link" to="/">
          Sign-up
        </Link>
        <Link className="link" to="/profile">
          Profile
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
