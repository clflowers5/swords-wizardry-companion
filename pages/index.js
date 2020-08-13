import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Fuse from "fuse.js";

// Components
import Layout from "components/layout";
// Hooks
import useDebounce from "hooks/use-debounce";
// Data Providers
import { getSpells } from "lib/spells/spells";
import useSpellMap from "../hooks/use-spell-map";

const SpellList = React.memo(function SpellList({ spellList }) {
  return (
    <>
      {spellList.map((spell) =>
        spell.item ? (
          <Spell key={spell.item.title} {...spell.item} />
        ) : (
          <Spell key={spell.title} {...spell} />
        )
      )}
    </>
  );
});

SpellList.propTypes = {
  spellList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function Spell({ title, learnedBy, range, duration, description, table }) {
  return (
    <div
      className="bg-white rounded overflow-hidden shadow-md border-solid border border-gray-200 p-3 mb-4"
      key={title}
    >
      <h5 className="font-medium underline">{title}</h5>

      <div>
        <div>
          <span>Learned by:</span>
          {learnedBy.map((profession, index) => (
            <span key={profession.className}>
              {index > 0 ? ", " : " "}
              {profession.className} - {profession.level}
            </span>
          ))}
        </div>
      </div>

      <div>Range: {range}</div>

      <div>Duration: {duration}</div>

      <div className="mt-3">
        {description.map((entry, index) => (
          <div key={index}>{entry}</div>
        ))}
      </div>

      {/* It's not pretty, but boy does it work */}
      {table && (
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: table }} />
      )}
    </div>
  );
}

Spell.propTypes = {
  title: PropTypes.string.isRequired,
  learnedBy: PropTypes.arrayOf(PropTypes.object).isRequired,
  range: PropTypes.string,
  duration: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  table: PropTypes.string,
};

// todo: pull into separate component for spell
function Home({ spellList }) {
  const fuseRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [professionFilter, setProfessionFilter] = useState(null);
  const [levelFilter, setLevelFilter] = useState(null);
  const filteredSpellList = useSpellMap({
    spellList,
    profession: professionFilter,
    level: levelFilter,
  });

  useEffect(
    function setupFuse() {
      const spells = filteredSpellList || spellList;
      fuseRef.current = new Fuse(spells, {
        keys: ["title", "learnedBy.className"],
        minMatchCharLength: 2,
        threshold: 0.4, // todo: play with this...
      });

      if (searchValue && fuseRef.current) {
        const results = fuseRef.current.search(searchValue);
        setSearchResults(results);
      }
    },
    // ignore searchValue warning, we know what we're doing.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filteredSpellList, spellList]
  );

  const handleInputChange = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  const handleClassChange = useCallback((event) => {
    const value = event.target.value.toLowerCase();
    switch (value) {
      case "all":
        setProfessionFilter(null);
        break;
      default:
        setProfessionFilter(value);
        break;
    }
  }, []);

  const handleLevelChange = useCallback((event) => {
    const value = event.target.value.toLowerCase();
    switch (value) {
      case "all":
        setLevelFilter(null);
        break;
      default:
        setLevelFilter(value);
        break;
    }
  }, []);

  const handleFormSubmit = useCallback((event) => {
    event.preventDefault();
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
      <form onSubmit={handleFormSubmit} className="border-b-2 pb-4 mb-4">
        <div>
          <label>
            <span>Spell Name</span>
            <input
              className="transition-colors duration-100 ease-in-out focus:outline-none border border-transparent focus:bg-white focus:border-gray-500 placeholder-gray-600 rounded-lg bg-white border border-gray-200 py-2 pr-4 px-3 block w-full appearance-none leading-normal ds-input"
              onChange={handleInputChange}
              placeholder="Search for spell"
            />
          </label>
        </div>

        <div className="mt-2">
          <label>
            <span>Class</span>
            <select
              className="transition-colors duration-100 ease-in-out focus:outline-none border border-transparent focus:bg-white focus:border-gray-500 placeholder-gray-600 rounded-lg bg-white border border-gray-200 py-2 pr-4 px-3 block w-full appearance-none leading-normal ds-input"
              onChange={handleClassChange}
            >
              <option value="all">All</option>
              <option value="cleric">Cleric</option>
              <option value="druid">Druid</option>
              <option value="magic-user">Magic-User</option>
            </select>
          </label>
        </div>

        <div className="mt-2">
          <label>
            <span>Level</span>
            <select
              className="transition-colors duration-100 ease-in-out focus:outline-none border border-transparent focus:bg-white focus:border-gray-500 placeholder-gray-600 rounded-lg bg-white border border-gray-200 py-2 pr-4 px-3 block w-full appearance-none leading-normal ds-input"
              onChange={handleLevelChange}
            >
              <option value="all">All</option>
              {Array.from(new Array(21)).map((_, index) => (
                <option key={index} value={String(index + 1)}>
                  {index + 1}
                </option>
              ))}
            </select>
          </label>
        </div>
      </form>

      <div>
        {searchValue && searchResults ? (
          <SpellList spellList={searchResults} />
        ) : (
          <SpellList spellList={filteredSpellList} />
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
