import { reverseList } from './index.js';
import { ListNode } from './utils.js';

describe.each([
  { head: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
  { head: [1, 2], expected: [2, 1] },
  { head: [], expected: [] },
])('describe function reverseList($head)', ({ head, expected }) => {
  test(`Returns ${expected}`, () => {
    const list = ListNode.fromArray(head);
    const result = reverseList(list);

    expect(ListNode.toArray(result)).toStrictEqual(expected);
  });
});
