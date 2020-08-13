const spellMap = {};

function buildSpellMapKey({ profession = "all", level = "all" } = {}) {
  return `profession-${profession}-level-${level}`;
}

function filterSpells({ spellList, profession, level }) {
  return spellList.filter((spell) => {
    if (profession || level) {
      return spell.learnedBy.some((entry) => {
        const isProfessionMatch =
          !profession ||
          entry.className.toLowerCase() === profession.toLowerCase();
        const isLevelMatch = !level || String(entry.level) === String(level);
        return isProfessionMatch && isLevelMatch;
      });
    }

    return true;
  });
}

function useSpellMap({ spellList, profession, level }) {
  const key = buildSpellMapKey({ profession, level });

  if (!spellMap[key]) {
    spellMap[key] = filterSpells({ spellList, profession, level });
  }

  return spellMap[key];
}

export default useSpellMap;
