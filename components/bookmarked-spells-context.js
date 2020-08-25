import { useCallback, useEffect, useState } from "react";

function BookmarkedSpellsContainer({ children }) {
  const [bookmarkedSpells, setInternalBookmarkedSpells] = useState();

  useEffect(function initBookmarkedSpells() {
    let bookmarks = [];
    const stringSpellArray = localStorage.getItem("bookmarked-spells");
    if (stringSpellArray) {
      bookmarks = JSON.parse(stringSpellArray);
    }
    setInternalBookmarkedSpells(bookmarks);
  }, []);

  const setBookmarkedSpells = useCallback((bookmarkedSpells) => {
    localStorage.setItem("bookmarked-spells", JSON.stringify(bookmarkedSpells));
    setInternalBookmarkedSpells(bookmarkedSpells);
  }, []);

  return children({ bookmarkedSpells, setBookmarkedSpells });
}

export default BookmarkedSpellsContainer;
