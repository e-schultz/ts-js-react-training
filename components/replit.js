import React from 'react';

export default function ReplIt({src, allowFullScreen=true}) {
  return (
    <div style={{ height: "75vh", display: "block" }}>
      <iframe
        height="100%"
        style={{ height: "100%" }}
        width="100%"
        src={src}
        scrolling="no"
        frameBorder="no"
        allowFullScreen={allowFullScreen}
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
      />
    </div>
  );
}
