import React, { useCallback } from "react";
import PropTypes from "prop-types";

// Components
import Spell from "components/spell";

const SpellList = React.memo(function SpellList({
  bookmarkedSpells,
  setBookmarkedSpells,
  spellList,
}) {
  const handleBookmarkClick = useCallback((title) => {
    const index = bookmarkedSpells.indexOf(title);
    if (index > -1) {
      const newBookmarks = [...bookmarkedSpells];
      newBookmarks.splice(index, 1);
      setBookmarkedSpells(newBookmarks);
    } else {
      const newBookmarks = [...bookmarkedSpells, title];
      setBookmarkedSpells(newBookmarks);
    }
  }, [bookmarkedSpells, setBookmarkedSpells]);

  return (
    <>
      {spellList.map((spell) =>
        spell.item ? (
          <Spell
            isBookmarked={bookmarkedSpells.includes(spell.item.title)}
            key={spell.item.title}
            onBookmarkClick={handleBookmarkClick}
            {...spell.item}
          />
        ) : (
          <Spell
            isBookmarked={bookmarkedSpells.includes(spell.title)}
            key={spell.title}
            onBookmarkClick={handleBookmarkClick}
            {...spell}
          />
        )
      )}
    </>
  );
});

SpellList.propTypes = {
  bookmarkedSpells: PropTypes.arrayOf(PropTypes.string),
  setBookmarkedSpells: PropTypes.func,
  spellList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

SpellList.defaultProps = {
  bookmarkedSpells: [],
  setBookmarkedSpells: () => null,
};

export default SpellList;
