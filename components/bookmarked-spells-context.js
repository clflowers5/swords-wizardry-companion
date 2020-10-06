import { useCallback, useEffect, useState } from "react";
import debug from 'debug';

const log = debug('bookmarked-spells-container');

function BookmarkedSpellsContainer({ children }) {
  const [bookmarkedSpells, setInternalBookmarkedSpells] = useState();

  useEffect(function initBookmarkedSpells() {
    let bookmarks = [];
    const stringSpellArray = localStorage.getItem("bookmarked-spells");
    if (stringSpellArray) {
      try {
        bookmarks = JSON.parse(stringSpellArray);
        log('Parsed bookmarked-spells', bookmarks);
      } catch (e) {
        log('Error: Failed to parse bookmarked-spells', e, stringSpellArray);
      }
    }
    setInternalBookmarkedSpells(bookmarks);
  }, []);

  const setBookmarkedSpells = useCallback((bookmarkedSpells) => {
    localStorage.setItem("bookmarked-spells", JSON.stringify(bookmarkedSpells));
    setInternalBookmarkedSpells(bookmarkedSpells);
  }, []);

  // Prevent premature renders before above useEffect resolves. This should be a useLayoutEffect, but SSR issues.
  return bookmarkedSpells
    ? children({ bookmarkedSpells, setBookmarkedSpells })
    : null;
}

export default BookmarkedSpellsContainer;
