import { describe, it, expect } from 'vitest';
import { LinkedList } from './linkedlist.js';

describe('LinkedList', () => {
  it('should initialize with a size of 0', () => {
    const ll = new LinkedList<number>();
    expect(ll.size).toBe(0);
    expect(ll.isEmpty()).toBeTrue();
  });

  it('should add new element at the first (prepend)', () => {
    const ll = new LinkedList<number>();
    ll.prepend(2);
    ll.prepend(3);
    expect(ll.peek()).toBe(3);
  });

  it('should add new element at the end (push)', () => {
    const ll = new LinkedList<number>();
    ll.push(1);
    ll.prepend(2);
    ll.push(4);
    ll.prepend(3);
    expect(ll.peekLast()).toBe(4);
  });

  it('should add new element at the pos', () => {
    const ll = new LinkedList<number>();
    ll.add(0, 10);
    ll.add(1, 10);
    ll.add(2, 10);
    ll.add(2, 3);
    console.log(ll.toArray());
    expect(ll.toArray()[2]).toBe(10);
  });
});
