export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static toArray(head: ListNode | null) {
    const result: number[] = [];

    if (!head) return result;

    while (true) {
      result.push(head.val);

      if (head.next === null) break;

      head = head.next;
    }

    return result;
  }

  static fromArray(xs: number[]) {
    let list: ListNode | null = null;

    for (let i = xs.length - 1; i >= 0; i--) {
      const temp = new ListNode();
      temp.val = xs[i];
      temp.next = list;
      list = temp;
    }

    return list;
  }
}
