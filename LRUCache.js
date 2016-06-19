// LRUCache.js
// functional pattern

// create node
var Node = function (val) {
  var obj = {};
  obj.value = val;
  obj.next = null;
  obj.prev = null;
  return obj;
}

// add method
var LRUadd = function (val) {
  if (this.head === null) {
    var node = Node(val);
    this.head = this.tail = node;
    this.hash[val] = node;
    this.size++;
  } else if (this.LRUcontains(val)) {
    var node = this.LRUremove(val);
    node.prev = null;
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.hash[val] = node;
  } else {
    var node = Node(val);
    this.hash[val] = node;
    if (this.size >= 5) {
      this.hash[this.tail.value] = false;
      this.tail = this.tail.prev;
      this.size--;
    }
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.size++;
  }
}

// remove method
var LRUremove = function (val) {
  var node = this.hash[val];
  if (node.prev) {
    node.prev.next = node.next;
  }
  if (node.next) {
    node.next.prev = node.prev;
  }
  this.hash[val] = false;
  return node;
}

// contains method
var LRUcontains = function (val) {
  if (this.hash[val] != false && this.hash[val] != null) {
    return true;
  }
  return false;
}

var LRUretrieve = function (val) {
  if (this.LRUcontains(val)) {
    this.LRUadd(val);
    return this.hash[val];
  } 
  return null;
}

var LRUCache = function () {
  var cache = {};
  cache.hash = {};
  cache.head = null;
  cache.tail = null;
  cache.size = 0;
  cache.LRUadd = LRUadd;
  cache.LRUremove = LRUremove;
  cache.LRUcontains = LRUcontains;
  cache.LRUretrieve = LRUretrieve;
  return cache;
}

module.exports = LRUCache;

