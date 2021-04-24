import React, { Suspense } from "react";
import Loader from "./Loader";

const DefaultFallback = ({ children }: { children: JSX.Element }) => {
  return <Suspense fallback={<Loader loading />}>{children}</Suspense>;
};

export default DefaultFallback;
