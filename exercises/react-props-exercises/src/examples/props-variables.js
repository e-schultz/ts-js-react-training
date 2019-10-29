import React from "react";

const MenuItem = props => {
  return (
    <div className="card">
      {props.itemName} - {props.itemPrice} - total:{" "}
      {props.currencyFormatter(props.itemPrice * props.itemQuantity)}
    </div>
  );
};

const formatCurrency = price => {
  return `$${price.toFixed(2)}`;
};

export default function PropsVarExample() {
  const itemName = "Orange Juice";
  const itemPrice = 3.5;
  const qty = 2;

  return (
    <MenuItem
      itemName={itemName}
      itemPrice={itemPrice}
      itemQuantity={qty}
      currencyFormatter={formatCurrency}
    />
  );
}
