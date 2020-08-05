import React from "react";
import Head from "next/head";
import { Container, Heading } from "react-bulma-components";

function Layout({ children }) {
  return (
    <Container>
      <Head>
        <title>Swords & Wizardry Spells</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Swords & Wizardry Spells" />
      </Head>
      <Heading>Swords & Wizardry Spell List</Heading>
      <main>{children}</main>
    </Container>
  );
}

export default Layout;
