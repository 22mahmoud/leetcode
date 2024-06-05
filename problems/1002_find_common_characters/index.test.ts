import { commonChars } from "./index.js";

describe.each([
  { words: ["bella", "label", "roller"], expected: ["e", "l", "l"] },
  { words: ["cool", "lock", "cook"], expected: ["c", "o"] },
])("describe function commonChars($words)", ({ words, expected }) => {
  test(`Returns ${expected}`, () => {
    expect(commonChars(words)).toStrictEqual(expected);
  });
});

