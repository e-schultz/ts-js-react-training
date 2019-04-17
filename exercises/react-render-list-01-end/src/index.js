import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// 1 - Update `ShoppingCart` to only display the items for the provided type
//    ex: if type is `food` - only display food items
// 2 - Update `ShoppingCartItems` to convert the list of items into a ShoppingCartRow 
//     using items.map
// 3 - Update ShoppingCartFooter to display the total for the items in the cart
//     using items.reduce 

function ShoppingCart({ items, type }) {
  // filter the shopping cart to only contain 
  // items that match the type 
  const cartItems = items.filter(item => item.type === type);
  return (
    <section>
      <h3>{type}</h3>
      <table>
        <ShoppingCartHeader />
        <ShoppingCartItems items={cartItems} />
        <ShoppingCartFooter items={cartItems} />
      </table>
    </section>
  );
}

function ShoppingCartItems({ items }) {
  // map items to a ShoppingCartRow
  // ShoppingCartRow expects the properties:
  // - description
  // - price
  // - quantity
  return (
    <tbody>
      {items.map(item => {
        return (
          <ShoppingCartRow
            description={item.description}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}
    </tbody>
  );
}

function ShoppingCartFooter({ items }) {
  // calculate the cartTotal using reduce for the items passed in
  
  let cartTotal = items.reduce((acc,value)=> {
    console.log(acc,value)
    return acc + (value.price * value.quantity)
  },0)

  return (
    <tfoot>
      <tr>
        <td colspan="2" />
        <td>Total</td>
        <td>{cartTotal}</td>
      </tr>
    </tfoot>
  );
}


function App() {
  const cart = [
    { description: "Eggs", price: 2, quantity: 2, type: "food" },
    { description: "Oranges", price: 3, quantity: 5, type: "food" },
    { description: "Avocado Toast", price: 15, quantity: 1, type: "food" },
    { description: "Coffee", price: 2.5, quantity: 2, type: "drink" },
    { description: "Tea", price: 2, quantity: 3, type: "drink" }
  ];
  return (
    <div className="App">
      <ShoppingCart items={cart} type="food" />
      <hr />
      <ShoppingCart items={cart} type="drink" />
    </div>
  );
}

function ShoppingCartHeader() {
  return (
    <thead>
      <tr>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
  );
}
function ShoppingCartRow({ description, price, quantity }) {
  return (
    <tr>
      <td>{description}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{price * quantity}</td>
    </tr>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
