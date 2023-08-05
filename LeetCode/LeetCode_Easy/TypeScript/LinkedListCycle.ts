// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return false;
  }

  let rabbit: ListNode | null | undefined = head.next;
  let turtle: ListNode | null | undefined = head;

  while (rabbit !== turtle) {
    if (rabbit === null || rabbit.next === null) {
      return false;
    }

    turtle = turtle?.next;
    rabbit = rabbit.next.next;
  }
  return true;
}
