import React from "react";
import { Link, Outlet } from "react-router-dom";

function Search() {
  return (
    <div>
      <div class="wrap">

     

        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="What are you looking for?"
          />

<Link to="/products/search/www"> Search </Link>
      <Link to="/products/search/eee"> Search </Link>
          <button type="submit" class="searchButton">
            &#128270;
          </button>
        </div>
      <Outlet />

      </div>
    </div>
  );
}

export default Search;
