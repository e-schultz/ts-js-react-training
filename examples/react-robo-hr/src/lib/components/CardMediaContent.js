import React from "react";

const CardaMediaContent = ({ src, children }) => (
  <div className="media">
    <div className="media-left">
      <figure className="image is-48x48">
        <img src={src} />
      </figure>
    </div>
    <div className="media-content">{children}</div>
  </div>
);

CardaMediaContent.displayName = "CardaMediaContent";

export default CardaMediaContent;
