import React from "react";
import PropTypes from "prop-types";

import NavBar from '../nav-bar';

function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-center text-2xl">
        Swords & Wizardry Companion
      </h1>
      <NavBar/>
      <main className="mt-4 pl-2 pr-2 sm:pl-0 sm:pr-0">{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
};

export default Layout;
