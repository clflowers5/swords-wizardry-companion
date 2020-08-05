import React from "react";
import { Box } from "react-bulma-components";

import Layout from "../components/layout";
import { getSpells } from "../lib/spells/spells";

// todo: pull into separate component for spell
function Home({ spellList }) {
  return (
    <Layout>
      <div>
        {spellList.map((spell) => (
          <Box key={spell.title}>
            <div>{spell.title}</div>

            <div>
              <div>Learned by:</div>
              {spell.learnedBy.map((profession) => (
                <div key={profession.className}>
                  {profession.className}: {profession.level}
                </div>
              ))}
            </div>

            <div>Range: {spell.range}</div>
            <div>Duration: {spell.duration}</div>
            <div>
              {spell.description.map((entry, index) => (
                <div key={index}>{entry}</div>
              ))}
            </div>
          </Box>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const spellList = getSpells();
  return {
    props: {
      spellList,
    },
  };
}

export default Home;
