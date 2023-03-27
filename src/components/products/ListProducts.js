import React from "react";
import { ProductsData } from "../../ProductsData";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
function ListProducts() {
  const navigate = useNavigate();
  return (
    <div className="listOfProducts">
      <div className="productsList">


        
            <div
              className="productDisplay"
           
            >

<Link to="/products/list/1"> Products 1 </Link>
<Link to="/products/list/2"> Products 2</Link>

            <h1>
              sdfsfsd sdf sdf
            </h1>
              <Outlet/>
            </div>
      
      </div>
    </div>
  );
}

export default ListProducts;
