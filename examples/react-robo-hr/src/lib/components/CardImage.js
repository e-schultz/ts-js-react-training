import React from "react";

const CardImage = ({ src, alt = "Image" }) => (
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={src} alt={alt} />
    </figure>
  </div>
);

CardImage.displayName = "CardImage";

export default CardImage;
