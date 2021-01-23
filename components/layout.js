import React from "react";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-center text-2xl">
        Swords & Wizardry Spell Companion
      </h1>
      <main className="mt-4 pl-2 pr-2 sm:pl-0 sm:pr-0">{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
