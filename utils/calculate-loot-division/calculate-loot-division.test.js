import calculateLootDivision from "./calculate-loot-division";

describe("calculateLootDivision", () => {
  it.each([
    [
      { totalLoot: 100, fullShares: 1 },
      { full: 100, half: 0, quarter: 0 },
    ],
    [
      { totalLoot: 100, fullShares: 2 },
      { full: 50, half: 0, quarter: 0 },
    ],
    [
      { totalLoot: 100, fullShares: 3 },
      { full: 33.33, half: 0, quarter: 0 },
    ],
    [
      { totalLoot: 100, fullShares: 4 },
      { full: 25, half: 0, quarter: 0 },
    ],
    [
      { totalLoot: 100, fullShares: 5 },
      { full: 20, half: 0, quarter: 0 },
    ],
    [
      { totalLoot: 100, fullShares: 100 },
      { full: 1, half: 0, quarter: 0 },
    ],
  ])("should divide full shares correctly for %s to %s", (input, expected) => {
    expect(calculateLootDivision(input)).toEqual(expected);
  });

  it.each([
    [
      { totalLoot: 100, fullShares: 1, halfShares: 1 },
      { full: 66.66, half: 33.33, quarter: 0 },
    ],
    [
      { totalLoot: 100, fullShares: 1, halfShares: 2 },
      { full: 50, half: 25, quarter: 0 },
    ],
    [
      { totalLoot: 100, fullShares: 1, halfShares: 3 },
      { full: 40, half: 20, quarter: 0 },
    ],
    [
      { totalLoot: 100, fullShares: 1, halfShares: 4 },
      { full: 33.33, half: 16.66, quarter: 0 },
    ],
    [
      { totalLoot: 100, fullShares: 1, halfShares: 5 },
      { full: 28.57, half: 14.28, quarter: 0 },
    ],
    [
      { totalLoot: 100, fullShares: 1, halfShares: 100 },
      { full: 1.96, half: 0.98, quarter: 0 },
    ],
  ])("should divide half shares correctly for %s to %s", (input, expected) => {
    expect(calculateLootDivision(input)).toEqual(expected);
  });

  it.each([
    [
      { totalLoot: 100, fullShares: 1, quarterShares: 1 },
      { full: 80, half: 0, quarter: 20 },
    ],
    [
      { totalLoot: 100, fullShares: 1, quarterShares: 2 },
      { full: 66.66, half: 0, quarter: 16.66 },
    ],
  ])("should divide quarter shares correctly for %s to %s", (input, expected) => {
    expect(calculateLootDivision(input)).toEqual(expected);
  });


  it.each([
    [
      { totalLoot: 100, fullShares: 5, halfShares: 2 },
      { full: 16.66, half: 8.33, quarter: 0 },
    ],
    [
      { totalLoot: 100, fullShares: 3, halfShares: 2, quarterShares: 1 },
      { full: 23.52, half: 11.76, quarter: 5.88 },
    ],
  ])("should divide shares correctly random cases: %s to %s", (input, expected) => {
    expect(calculateLootDivision(input)).toEqual(expected);
  });
});
