function calculateLootDivision({
  totalLoot = 0,
  fullShares = 0,
  halfShares = 0,
  quarterShares = 0,
}) {
  let fullResult = 0;
  let halfResult = 0;
  let quarterResult = 0;

  let calculatedShare = fullShares + (0.5 * halfShares) + (0.25 * quarterShares);

  if (fullShares > 0) {
    fullResult = totalLoot / calculatedShare;
  }

  // half and quarter shares only make sense if there are full shares (duh)
  if (halfShares > 0) {
    halfResult = fullResult * 0.5;
  }

  if (quarterShares > 0) {
    quarterResult = fullResult * 0.25;
  }

  return {
    full: Number(Math.trunc(fullResult * 100) / 100),
    half: Number(Math.trunc(halfResult * 100) / 100),
    quarter: Number(Math.trunc(quarterResult * 100) / 100),
  };
}

export default calculateLootDivision;
