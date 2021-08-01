import React from "react";
import "../styles/globals.css";
import PropTypes, { InferProps } from "prop-types";
function MyApp({ Component, pageProps }: InferProps<typeof MyApp.propTypes>) {
  return <Component {...pageProps} />;
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
