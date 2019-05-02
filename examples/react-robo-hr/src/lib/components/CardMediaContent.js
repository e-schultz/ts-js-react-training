import React from "react";

const MediaLeft = ({ src }) => (
  <figure className="image is-48x48">
    <img src={src} />
  </figure>
);
const CardaMediaContent = ({ src, renderMediaLeft = MediaLeft, children }) => (
  <div className="media">
    <div className="media-left">{renderMediaLeft({ src })}</div>
    <div className="media-content">{children}</div>
  </div>
);

CardaMediaContent.displayName = "CardaMediaContent";

export default CardaMediaContent;
