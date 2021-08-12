const spellMap = {};

function buildSpellMapKey({ profession = "all", level = "all" } = {}) {
  return `profession-${profession}-level-${level}`;
}

function filterSpells({
  spellList,
  profession: filteredProfession,
  level: filteredLevel,
  favoritesOnly,
  bookmarks,
}) {
  return spellList.filter((spell) => {
    const filtersAreApplied = filteredProfession || filteredLevel || favoritesOnly;
    if (filtersAreApplied) {
      return spell.learnedBy.some((entry) => {
        const isProfessionMatch =
          !filteredProfession ||
          entry.className.toLowerCase() === filteredProfession.toLowerCase();
        const isLevelMatch = !filteredLevel || String(entry.level) === String(filteredLevel);

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
