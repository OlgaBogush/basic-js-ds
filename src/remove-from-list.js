const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const res = {}
  let head = res
  let prev = res
  let list = l
  let end = false
  
  while (!end) {
    if (list.value !== k) {
      head.value = list.value

      if (list.next !== null) {
        head.next = {}
        prev = head
        head = head.next
        list = list.next
      } else {
        head.next = null
        end = true
      }
    } else if (list.next === null) {
      prev.next = null
      end = true
    } else {
      list = list.next
    }
  }

  return res
}

module.exports = {
  removeKFromList
};
