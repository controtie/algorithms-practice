// create a double LinkedList with these values
// 5, 3, 1

// pseudoclassical style
// turn this into an LRU Cache
var LinkedList = function () {
  // LinkedList will have reference to the head and tail nodes
  this.tail = null;
  this.head = null;
  this.size = 0;
}

LinkedList.prototype.addNode = function (val) {
  var newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
}
// It will have add node and remove node methods
LinkedList.prototype.removeNode = function (node) {
  if (this.size === 1) {
    this.head = null;
    this.tail = null;
  } else if (node.next === null) {
    // if we are removing tail node.
    node.prev.next = null;
    this.tail = node.prev;
  } else if (node.prev === null) {
    // if we are removing head node.
    node.next.prev = null;
    this.head = node.next;
  } else {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }
  this.size--;
}
// It will have a contains method
LinkedList.prototype.contains = function (val) {
  var targetNode = this.head;
  while (targetNode.next !== null) {
    if (targetNode.value === val || targetNode.next.value === val) {
      return true;
    }
    targetNode = targetNode.next;
  }
  return false;
}


var Node = function (val) {
  this.value = val;
  this.next = null;
  this.prev = null;
}
module.exports = LinkedList;
