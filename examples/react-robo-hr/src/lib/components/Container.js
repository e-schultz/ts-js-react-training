import React from "react";

const Container = ({children, ...props}) => ( <div className="container">{children}</div>)

Container.displayName = "Container";

export default Container;