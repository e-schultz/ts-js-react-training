import React from "react";

const IsLoading = ({ isLoading, children }) =>
  isLoading ? <h1>Loading .... please wait</h1> : children;

IsLoading.displayName = "IsLoading";

export default IsLoading;
