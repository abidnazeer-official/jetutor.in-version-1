import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/MRD090924'}>09-09-24</Link>
    </nav>
  );
};
