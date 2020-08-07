import React from "react";

import Layout from "../components/layout";
import { getSpells } from "../lib/spells/spells";

// todo: pull into separate component for spell
function Home({ spellList }) {
  return (
    <Layout>
      <div>
        <input
          className="transition-colors duration-100 ease-in-out focus:outline-none border border-transparent focus:bg-white focus:border-gray-500 placeholder-gray-600 rounded-lg bg-white border border-gray-200 py-2 pr-4 px-3 block w-full appearance-none leading-normal ds-input"
          placeholder="Search For Spell (I don't work yet)"
        />
      </div>

      <div className="mt-5">
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
