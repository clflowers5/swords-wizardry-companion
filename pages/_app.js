import React from "react";
import PropTypes from 'prop-types';

import "../styles/global.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

export default App;
