

import React, { useState } from "react";
import "/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Order.css";
import { Link } from "react-router-dom";
import elogo from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';
import plasticImage from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/Plas.jpg';
import metalImage from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/metal.jpg';
import glassImage from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/gl1.jpg';

function Order() {
  const [items, setItems] = useState([
    {
      name: "Recycled Plastic Granules (in kg)",
      price: 105,
      quantity: 0,
      image: plasticImage,
    },
    {
      name: "Recycled Metal Granules (in kg)",
      price: 203,
      quantity: 0,
      image: metalImage,
    },
    {
      name: "Recycled glass Granules (in kg)",
      price: 305,
      quantity: 0,
      image: glassImage,
    },
  ]);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleQuantityChange = (index, quantity) => {
    const newItems = [...items];
    newItems[index].quantity = quantity;
    setItems(newItems);
  };

  return (
    <>
      <div className="bg1">
        <a href="/">
          <img className="img2" src={elogo} alt="logo1" />
        </a>
        <div className="order-items-container">
          <h2 className="nm"> Products</h2>
          <ul className="order-items-list">
            {items.map((item, index) => (
              <li key={index} className="order-item">
                 <div className="order-item-image">
                  <img className="imgs" src={item.image} alt={item.name} />
                </div>
                <div className="order-item-name">{item.name}</div>
               
                <div className="order-item-quantity">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                  />
                </div>
                <div className="order-item-price">₹{item.price.toFixed(2)}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-summary-container">
          <h2>Order Summary:</h2>
          <div className="order-summary-row">
            <div>Subtotal:</div>
            <div>₹{subtotal.toFixed(2)}</div>
          </div>
          <div className="order-summary-row">
            <div>Tax:</div>
            <div>₹{tax.toFixed(2)}</div>
          </div>
          <div className="order-summary-row">
            <div>Total:</div>
            <div>₹{total.toFixed(2)}</div>
          </div>

          <Link className="Link" to="/Pay">
            <button className="btn">Place Your Order</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Order;

