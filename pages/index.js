import React, { useCallback, useEffect, useRef, useState } from "react";
import Fuse from "fuse.js";

// Components
import Layout from "components/layout";
// Hooks
import useDebounce from "hooks/use-debounce";
// Data Providers
import { getSpells } from "lib/spells/spells";

const SpellList = React.memo(function SpellList({ spellList }) {
  return (
    <>
      {spellList.map((spell) => (
        <>
          {spell.item ? (
            <Spell key={spell.item.title} spell={spell.item} />
          ) : (
            <Spell key={spell.title} spell={spell} />
          )}
        </>
      ))}
    </>
  );
});

function Spell({ spell }) {
  return (
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
  );
}

// todo: pull into separate component for spell
function Home({ spellList }) {
  const fuseRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(function setupFuse() {
    if (!fuseRef.current && spellList) {
      fuseRef.current = new Fuse(spellList, {
        keys: ["title", "learnedBy.className"],
        minMatchCharLength: 2,
        threshold: 0.4,
      });
    }
  }, []);

  const handleInputChange = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  useDebounce(
    () => {
      if (fuseRef.current) {
        const results = fuseRef.current.search(searchValue);
        setSearchResults(results);
      }
    },
    175,
    [searchValue]
  );

  return (
    <Layout>
      <div>
        <input
          className="transition-colors duration-100 ease-in-out focus:outline-none border border-transparent focus:bg-white focus:border-gray-500 placeholder-gray-600 rounded-lg bg-white border border-gray-200 py-2 pr-4 px-3 block w-full appearance-none leading-normal ds-input"
          onChange={handleInputChange}
          placeholder="Search for spell"
        />
      </div>

      <div className="mt-5">
        {searchResults.length ? (
          <SpellList spellList={searchResults} />
        ) : (
          <SpellList spellList={spellList} />
        )}
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
