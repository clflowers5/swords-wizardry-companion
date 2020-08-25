const spellMap = {};

function buildSpellMapKey({ profession = "all", level = "all" } = {}) {
  return `profession-${profession}-level-${level}`;
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
          return isProfessionMatch && isLevelMatch && isBookmarked;
        } else {
          return isProfessionMatch && isLevelMatch;
        }
      });
    }

    return true;
  });
}

function buildSpellMap({
  bookmarks,
  spellList,
  profession,
  level,
  favoritesOnly,
}) {
  const key = buildSpellMapKey({ profession, level });

  let result;

  if (favoritesOnly) {
    // can't cache favorites since they can change at runtime
    result = filterSpells({
      spellList,
      profession,
      level,
      favoritesOnly,
      bookmarks,
    });
  } else if (spellMap[key]) {
    result = spellMap[key];
  } else {
    result = filterSpells({
      spellList,
      profession,
      level,
      favoritesOnly,
      bookmarks,
    });
    spellMap[key] = result;
  }

  return result;
}

export default buildSpellMap;
