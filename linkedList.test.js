var linkedList = require('./linkedList.js');
var assert = function (bool, msg) {
  if (!bool) {
    throw new Error();
  }
}
// OUR LINKED LIST SO FAR:
// 5 ---> 3 ---> 1
// Initialize the linkedList
var testList = new linkedList();
assert(typeof testList === 'object');
assert(testList.tail === null && testList.head === null && testList.size === 0);
console.log('--linkedList init. good!-');

testList.addNode(5);
assert(testList.head.value === 5);
assert(testList.tail.value === 5);
assert(testList.size === 1);
console.log('LinkedList state on add node is good');

testList.addNode(3);
assert(testList.head.value === 5);
assert(testList.tail.value === 3);
assert(testList.size === 2);
console.log('LinkedList state on 2nd node add is good');

assert(testList.head.next.value === 3);
assert(testList.tail.prev.value === 5);
assert(testList.tail.prev.next.value === 3);
console.log('Nodes 5 and 3 are doubly linked');

testList.addNode(1);
assert(testList.head.next.next.value === 1);
assert(testList.tail.prev.prev.value === 5);
assert(testList.tail.prev.prev.prev === null);
assert(testList.head.next.next.next === null);
console.log('Can traverse head to tail via linked List');

var rmNode = testList.head.next;
testList.removeNode(rmNode);
assert(testList.size === 2);
assert(testList.head.next.value === 1);
assert(testList.tail.prev.value === 5);
testList.removeNode(testList.tail);
assert(testList.head === testList.tail);
testList.removeNode(testList.tail);
assert(testList.head === null && testList.tail === null);
assert(testList.size === 0);
console.log('Can remove a node from the list');

console.log('Can check if a list contains a value');
testList.addNode(5);
testList.addNode(3);
testList.addNode(1);
assert(testList.contains(3) === true);
assert(testList.contains(1) === true);
assert(testList.contains(7) === false);
testList.addNode(7);
assert(testList.contains(7) === true);
