const { challengeOne } = require("../exercise");

test("Testing the function exercise", () => {
  expect(challengeOne([])).toBeDefined();
  expect(challengeOne(["a", "s"])).toEqual({
    a: ["a", "and"],
    s: ["some", "she", "said", "So"],
  });
  expect(challengeOne(["b", "t", "s"])).toEqual({
    b: [
      "Betty",
      "Botter",
      "butter",
      "But",
      "butters",
      "bitter",
      "bake",
      "batter",
      "bit",
      "better",
      "bought",
      "baked",
      "Botterbought",
    ],
    t: ["this", "that", "than", "the", "twas"],
    s: ["some", "she", "said", "So"],
  });
  expect(challengeOne(["i", "b", "a", "t"])).toEqual({
    i: ["If", "I", "it", "in"],
    b: [
      "Betty",
      "Botter",
      "butter",
      "But",
      "butters",
      "bitter",
      "bake",
      "batter",
      "bit",
      "better",
      "bought",
      "baked",
      "Botterbought",
    ],
    a: ["a", "and"],
    t: ["this", "that", "than", "the", "twas"],
  });
});
