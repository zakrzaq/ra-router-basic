import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const apiKey = "65c5f00b-bb05-42fe-a119-1722ba3f58cb";
  // const apiUrl = "https://fortnite-public-apli.theapinetwork.com/prod09/upcoming/get";
  const apiUrl = "https://fortnite-api.com/v2/shop/br";

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    // console.log(data.data.featured.entries);
    setItems(data.data.featured.entries);
  };

  return (
    <div>
      {items.map((item) => (
        <h3 key={item.offerId.substring(4)}>
          <Link to={`/shop/${item.offerId.substring(4)}`}>{item.devName}</Link>
        </h3>
      ))}
    </div>
  );
}

export default Shop;
