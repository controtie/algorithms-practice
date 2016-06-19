// PrototypyalLRUCache.js

// An LRUCache consists of a hash table and a linkedList

var LRUCache = function (limit) {
  var cache = Object.create(LRUCache.prototype);
  cache.size = 0;
  cache.head = null;
  cache.tail = null;
  cache.hash = {};
  cache.limit = limit;
  return cache;
}

// 2 Create LinkedList
// a add - creates a new node and adds it to the front of the list
LRUCache.prototype.add = function (val) {
  var node = Node(val);
  // add node to the linkedList
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
  // add node to hash table
  this.hash[val] = node;
  // increment LRU size
  this.size++;
  return node;
}
// b  remove a node
LRUCache.prototype.remove = function (val) {
  var node = this.hash[val];
  if (node.prev) {
    node.prev.next = node.next;
  }
  if (node.next) {
    node.next.prev = node.prev;
  }
  if (this.head === node) {
    this.head = node.next;
  }
  if (this.tail === node) {
    this.tail = node.prev;
  }
  delete this.hash[val];
  this.size--;
  return node;
}
// c  contains - checks if a node exists in LRU
LRUCache.prototype.contains = function (val) {
  if (this.hash[val] !== undefined) {
    return true;
  }
  return false;
}

// d  LRUretrieve
LRUCache.prototype.LRUretrieve = function (val) {
  if (this.contains(val)) {
    this.remove(val);
    this.add(val);
    return this.hash[val];
  }
  return false;
}

// e  LRUadd - will check and add new values to the LRUcache based on size
LRUCache.prototype.LRUadd = function (val) {
  if (this.contains(val)) {
    this.remove(val);
  }
  if (this.size >= this.limit) {
    this.remove(this.tail.value);
  }
  return this.add(val);
}


// 2 a Node constructor
var Node = function (val) {
  var node = {};
  node.value = val;
  node.next = node.prev = null;
  return node;
}


module.exports = {
  LRUCache: LRUCache,
  Node: Node,
}