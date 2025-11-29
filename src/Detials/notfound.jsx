import React from "react";
import { Link } from "react-router-dom";

import "../styles/notfounrd.css"; // لو عايز تعمل CSS مخصص للصفحة

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>Product Not Found</h1>
      <p>Sorry, the product you are looking for is not available.</p>
      <Link to="/back" >Go Back Home</Link>

    </div>
  );
}

export default NotFound;
