import { useBookmarks as useSpellBookmarks } from "hooks/use-spell-bookmark";

const spellMap = {};

function buildSpellMapKey({
  profession = "all",
  level = "all",
  favoritesOnly = "false",
} = {}) {
  return `profession-${profession}-level-${level}-favoritesOnly-${favoritesOnly}`;
}

function filterSpells({
  spellList,
  profession,
  level,
  favoritesOnly,
  bookmarks,
}) {
  return spellList.filter((spell) => {
    if (profession || level || favoritesOnly) {
      return spell.learnedBy.some((entry) => {
        const isProfessionMatch =
          !profession ||
          entry.className.toLowerCase() === profession.toLowerCase();
        const isLevelMatch = !level || String(entry.level) === String(level);

        if (favoritesOnly) {
          const isBookmarked = bookmarks && bookmarks.includes(spell.title);
          console.log('checking...', isBookmarked, bookmarks, spell.title);
          return isProfessionMatch && isLevelMatch && isBookmarked;
        } else {
          return isProfessionMatch && isLevelMatch;
        }
      });
    }

    return true;
  });
}

function useSpellMap({ spellList, profession, level, favoritesOnly }) {
  const bookmarks = useSpellBookmarks();
  const key = buildSpellMapKey({ profession, level, favoritesOnly });

  if (!spellMap[key]) {
    spellMap[key] = filterSpells({
      spellList,
      profession,
      level,
      favoritesOnly,
      bookmarks,
    });
  }

  return spellMap[key];
}

export default useSpellMap;
