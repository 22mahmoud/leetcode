class LinkedList<T extends string | boolean | object | number> {
  private length: number = 0;
  public head: Node<T> | null = null;

  get size() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  prepend(x: T) {
    this.head = new Node(x, this.head);
    this.length++;

    return this;
  }

  isEmpty() {
    return !this.head;
  }

  push(x: T) {
    if (this.isEmpty()) {
      return this.prepend(x);
    }

    let iterator = this.head;

    while (iterator) {
      if (!iterator.next) {
        iterator.next = new Node(x, iterator.next);
        this.length++;
        break;
      }

      iterator = iterator.next;
    }

    return iterator?.value ?? null;
  }

  add(pos: number, x: T) {
    if (pos > 0 && pos >= this.length) return;

    if (pos === this.length - 1) {
      return this.push(x);
    }

    if (this.isEmpty()) {
      return this.prepend(x);
    }

    let count = 0;
    let iterator = this.head;

    while (count < pos - 1) {
      count++;
      iterator = iterator?.next ?? null;
    }

    if (!iterator) return;

    iterator.next = new Node(x, iterator.next);

    return this;
  }

  pop() {}
  shift() {}
  delete(x: T) {}
  delete_at(pos: number) {}

  find(x: T) {}
  contains(x: T) {}

  peek() {
    return this.head?.value ?? null;
  }

  peekLast() {
    let iterator = this.head;

    while (iterator) {
      if (!iterator.next) return iterator.value;

      iterator = iterator.next;
    }

    return null;
  }

  toArray() {
    const result: T[] = [];

    let iterator = this.head;

    while (iterator) {
      result.push(iterator.value);
      iterator = iterator.next;
    }

    return result;
  }

  toString() {
    const result = this.toArray();

    return result.length ? result.map((x) => x.toString()).join(' -> ') : '[]';
  }
}

class Node<T extends string | boolean | object | number> {
  constructor(
    public value: T,
    public next: Node<T> | null = null,
  ) {}

  toString() {
    return `Node(${this.value.toString()})`;
  }
}

export { LinkedList };
