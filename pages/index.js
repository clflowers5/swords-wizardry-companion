import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Fuse from "fuse.js";

// Components
import Layout from "components/layout";
import SpellList from "components/spell-list";

// Hooks
import useDebounce from "hooks/use-debounce";
import useSpellMap from "hooks/use-spell-map";

// Data Providers
import { getSpells } from "lib/spells/spells";

function Home({ spellList }) {
  const fuseRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [professionFilter, setProfessionFilter] = useState(null);
  const [levelFilter, setLevelFilter] = useState(null);
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  const filteredSpellList = useSpellMap({
    spellList,
    profession: professionFilter,
    level: levelFilter,
    favoritesOnly,
  });

  useEffect(
    function setupFuse() {
      const spells = filteredSpellList || spellList;
      fuseRef.current = new Fuse(spells, {
        keys: ["title", "learnedBy.className"],
        minMatchCharLength: 2,
        threshold: 0.4,
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

  const handleFavoritesChange = useCallback((event) => {
    const checked = event.target.checked;
    setFavoritesOnly(checked);
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

        <div className="flex">
          <div className="mt-2 flex-1 mr-1">
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

          <div className="mt-2 flex-1 ml-1">
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
        </div>

        <div className="ml-1 mt-2">
          <label>
            <input
              type="checkbox"
              className="mr-2"
              onChange={handleFavoritesChange}
            />
            <span>Favorites Only</span>
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

Home.propTypes = {
  spellList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps() {
  const spellList = getSpells();
  return {
    props: {
      spellList,
    },
  };
}

export default Home;
