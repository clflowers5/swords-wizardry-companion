import { useCallback, useEffect, useRef, useState } from "react";
import Fuse from "fuse.js";
import PropTypes from "prop-types";

// Components
import CheckBox from "components/inputs/checkbox";
import Input from "components/inputs/input";
import Layout from "components/layout";
import Select from "components/inputs/select";
import SpellList from "components/spell-list";

// Hooks
import useDebounce from "hooks/use-debounce";

// Utils
import buildSpellMap from "utils/build-spell-map";

function SpellListSearchContainer({
  bookmarkedSpells,
  setBookmarkedSpells,
  spellList,
}) {
  const fuseRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [professionFilter, setProfessionFilter] = useState(null);
  const [levelFilter, setLevelFilter] = useState(null);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [filteredSpellList, setFilteredSpellList] = useState([]);

  // I wonder if these could be combined...
  useEffect(
    function buildFilteredSpells() {
      const filteredSpellList = buildSpellMap({
        bookmarks: bookmarkedSpells,
        favoritesOnly,
        level: levelFilter,
        profession: professionFilter,
        spellList,
      });
      setFilteredSpellList(filteredSpellList);
    },
    [bookmarkedSpells, favoritesOnly, levelFilter, professionFilter, spellList]
  );

  useEffect(
    function setupFuse() {
      const spells = filteredSpellList.length ? filteredSpellList : spellList;
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
          <Input
            label="Spell Name"
            onChange={handleInputChange}
            placeholder="Search for spell"
          />
        </div>

        <div className="flex">
          <div className="mt-2 flex-1 mr-1">
            <Select label="Class" onChange={handleClassChange}>
              <option value="all">All</option>
              <option value="cleric">Cleric</option>
              <option value="druid">Druid</option>
              <option value="magic-user">Magic-User</option>
            </Select>
          </div>

          <div className="mt-2 flex-1 ml-1">
            <Select label="Level" onChange={handleLevelChange}>
              <option value="all">All</option>
              {Array.from(new Array(21)).map((_, index) => (
                <option key={index} value={String(index + 1)}>
                  {index + 1}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="ml-1 mt-2">
          <CheckBox label="Favorites Only" onChange={handleFavoritesChange} />
        </div>
      </form>

      <div>
        {searchValue && searchResults ? (
          <SpellList
            bookmarkedSpells={bookmarkedSpells}
            setBookmarkedSpells={setBookmarkedSpells}
            spellList={searchResults}
          />
        ) : (
          <SpellList
            bookmarkedSpells={bookmarkedSpells}
            setBookmarkedSpells={setBookmarkedSpells}
            spellList={filteredSpellList}
          />
        )}
      </div>
    </Layout>
  );
}

SpellListSearchContainer.propTypes = {
  spellList: PropTypes.arrayOf(PropTypes.object),
  bookmarkedSpells: PropTypes.arrayOf(PropTypes.string),
  setBookmarkedSpells: PropTypes.func,
};

export default SpellListSearchContainer;
