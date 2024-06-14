import type { ListNode } from './utils.js';

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let newHead: ListNode | null = head;

  if (head.next) {
    newHead = reverseList(head.next);
    head.next.next = head;
  }

  head.next = null;

  return newHead;
}

export { reverseList };
