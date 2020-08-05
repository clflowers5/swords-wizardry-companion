import React from "react";

import "react-bulma-components/dist/react-bulma-components.min.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
