import React from "react";

const combinedProviders = (providers, children) => {
  return providers.reduce((tree, Provider) => {
    return <Provider>{tree}</Provider>;
  }, children);
};

export default combinedProviders;
