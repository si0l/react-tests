import React from "react";

const ErrorBoundaryRenderExample = () => {
  throw new Error("Test ErrorBoundry in render");
};
export default ErrorBoundaryRenderExample;
