# Extracting Components - 01 - Start

Look at the ProductCard component in `App.js`,

Try to break it down into smaller building blocks.

- Data can remain hard-coded for now
- `classNames` can be an indicator to where a component could be made
- Consider what could be passed down as a prop
- Consider where `{children}` could be more appropiate


```jsx
function ProductCard() {
  return (
    <div className="app-product-card">
      <a className="app-block-link" href="#add-to-card">
        <div className="app-media">
          <div
            className="app-media-image"
            style={{
              background:
                'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/149125/Supers_Vertical_PackRO-compressor.jpg") center center'
            }}
          />
        </div>
      </a>
      <a className="app-block-link" href="#super-pack-details">
        <h2 className="app-heading">The Super Pack</h2>
        <p className="app-text">all three serums</p>
      </a>
      <button className="app-button">
        <span className="app-button-text">Add To Bag</span>
        <span className="app-button-price">$85</span>
      </button>
    </div>
  );
}
```