//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addToEnd(head: ListNode | null, val: number): ListNode {
  const newNode = new ListNode(val);

  if (!head) {
    return newNode;
  }

  let currentNode = head;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;

  return head;
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null && list2 === null) {
    return null;
  }
  
  let result: ListNode | null = null;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      result = addToEnd(result, list1.val);
      list1 = list1.next;
    } else {
      result = addToEnd(result, list2.val);
      list2 = list2.next;
    }
  }

  while (list1) {
    result = addToEnd(result, list1.val);
    list1 = list1.next;
  }

  while (list2) {
    result = addToEnd(result, list2.val);
    list2 = list2.next;
  }

  return result;
}
