import type { ListNode } from './utils.js';

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;

  while (current) {
    let next = null;

    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

export { reverseList };
