import React from "react";
import ViewableMonitor from "./ViewableMonitor";

export default function CodeSandbox({
  src,
  allowFullScreen = true,
  runOnClick = 0
}) {
  return (
    <ViewableMonitor>
      {isViewable =>
        isViewable ? (
          <div style={{ height: "75vh", display: "block" }}>
            <iframe
              height="100%"
              style={{
                width: "100%",
                height: "100%",
                border: 0,
                borderRadius: "4px",
                overflow: "hidden"
              }}
              width="100%"
              src={`${src}&runonclick=${runOnClick}&codemirror=1`}
              sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            />
          </div>
        ) : (
          "I am still hiding"
        )
      }
    </ViewableMonitor>
  );
}
