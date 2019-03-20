import React from "react";

function Button({ children }) {
  return <button className="app-button">{children}</button>;
}

function AddToCartButtonText({ text }) {
  return <span class="app-button-text">{text}</span>;
}
function AddToCartButtonPrice({ price }) {
  return <span class="app-button-price">{price}</span>;
}
function AddToCartButton({ text, price }) {
  return (
    <Button>
      <AddToCartButtonText text={text} />
      <AddToCartButtonPrice price={price} />
    </Button>
  );
}
function ProductLink({ href, children }) {
  return (
    <a className="app-block-link" href={href}>
      {children}
    </a>
  );
}

function CardMedia({ src }) {
  return (
    <div className="app-media">
      <div
        className="app-media-image"
        style={{
          background: `url('${src}') center center`
        }}
      />
    </div>
  );
}
function ProductCard() {
  return (
    <div className="app-product-card">
      <ProductLink href="#add-to-card">
        <CardMedia src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/149125/Supers_Vertical_PackRO-compressor.jpg" />
      </ProductLink>
      <ProductLink href="#super-pack-details">
        <h2 className="app-heading">The Super Pack</h2>
        <p className="app-text">all three serums</p>
      </ProductLink>
      <AddToCartButton text="Add To Bag" price="$85" />
    </div>
  );
}

export default ProductCard;
