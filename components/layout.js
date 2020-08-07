import React from "react";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Swords & Wizardry Spells</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Swords & Wizardry Spells" />
      </Head>
      <h1 className="font-bold text-center">Swords & Wizardry Spell List</h1>
      <main className="mt-4">{children}</main>
    </div>
  );
}

export default Layout;
