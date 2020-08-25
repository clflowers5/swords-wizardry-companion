import PropTypes from "prop-types";

// Components
import SpellListSearchContainer from "components/spell-list-search-container";

// Contexts
import BookmarkedSpellsContainer from "components/bookmarked-spells-context";

// Data Providers
import { getSpells } from "lib/spells/spells";

function Home({ spellList }) {
  return (
    <BookmarkedSpellsContainer>
      {({ bookmarkedSpells, setBookmarkedSpells }) => (
        <SpellListSearchContainer
          bookmarkedSpells={bookmarkedSpells}
          setBookmarkedSpells={setBookmarkedSpells}
          spellList={spellList}
        />
      )}
    </BookmarkedSpellsContainer>
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
