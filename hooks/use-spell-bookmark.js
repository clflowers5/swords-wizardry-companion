import { useCallback, useEffect, useState } from "react";

let bookmarks;

function useSpellBookmark(spellTitle) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(
    function loadBookmarks() {
      if (!bookmarks) {
        const stringSpellArray = localStorage.getItem("bookmarked-spells");
        if (stringSpellArray) {
          bookmarks = JSON.parse(stringSpellArray);
        } else {
          bookmarks = [];
        }
      }

      setIsBookmarked(bookmarks.includes(spellTitle));
    },
    [spellTitle]
  );

  const onBookmarkClick = useCallback(() => {
    const index = bookmarks.indexOf(spellTitle);
    if (index > -1) {
      bookmarks.splice(index, 1);
      localStorage.setItem("bookmarked-spells", JSON.stringify(bookmarks));
      setIsBookmarked(false);
    } else {
      bookmarks.push(spellTitle);
      localStorage.setItem("bookmarked-spells", JSON.stringify(bookmarks));
      setIsBookmarked(true);
    }
  }, [spellTitle]);

  return {
    isBookmarked,
    onBookmarkClick,
    bookmarks,
  };
}

// todo: could probably work as a context a little better
function useBookmarks() {
  useEffect(function loadBookmarks() {
    if (!bookmarks) {
      const stringSpellArray = localStorage.getItem("bookmarked-spells");
      if (stringSpellArray) {
        bookmarks = JSON.parse(stringSpellArray);
      } else {
        bookmarks = [];
      }
    }
  }, []);

  return bookmarks;
}

export { useSpellBookmark as default, useBookmarks };
