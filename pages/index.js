import React from "react";

import Layout from "../components/layout";
import { getSpells } from "../lib/spells/spells";

// todo: pull into separate component for spell
function Home({ spellList }) {
  return (
    <Layout>
      {spellList.map((spell) => (
        <div
          className="bg-white rounded overflow-hidden shadow-md border-solid border border-gray-200 p-3 mb-4"
          key={spell.title}
        >
          <h5 className="font-medium underline">{spell.title}</h5>

          <div>
            <div>
              <span>Learned by:</span>
              {spell.learnedBy.map((profession, index) => (
                <span key={profession.className}>
                  {index > 0 ? ", " : " "}
                  {profession.className} - {profession.level}
                </span>
              ))}
            </div>
          </div>

          <div>Range: {spell.range}</div>

          <div>Duration: {spell.duration}</div>

          <div className="mt-3">
            {spell.description.map((entry, index) => (
              <div key={index}>{entry}</div>
            ))}
          </div>

          {/* It's not pretty, but boy does it work */}
          {spell.table && (
            <div
              className="mt-4"
              dangerouslySetInnerHTML={{ __html: spell.table }}
            />
          )}
        </div>
      ))}
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
