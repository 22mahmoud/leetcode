import { minSubArrayLen } from ".";
import { large } from "./large";

describe.each([
  { target: 11, array: [1, 2, 3, 4, 5], expected: 3 },
  { target: 4, array: [1, 4, 4], expected: 1 },
  { target: 396893380, array: large, expected: 79517 },
])(
  "describe function minSubArrayLen($target, $array)",
  ({ target, array, expected }) => {
    test(`Returns ${expected}`, () => {
      expect(minSubArrayLen(target, array)).toBe(expected);
    });
  },
);
