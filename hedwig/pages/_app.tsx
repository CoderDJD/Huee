import React from "react";
import "../styles/globals.css";
import { Provider } from "next-auth/client";
import PropTypes, { InferProps } from "prop-types";

function MyApp({ Component, pageProps }: InferProps<typeof MyApp.propTypes>) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.any,
};
