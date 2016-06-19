// PrototypalLRUCache.test.js

var LRUCache = require('./PrototypalLRUCache.js').LRUCache;
var Node     = require('./PrototypalLRUCache.js').Node;

var cache = LRUCache(5);

console.assert(cache.head === null && cache.tail === null && cache.size === 0 && typeof cache.hash === 'object' && cache.limit === 5);
console.log('init. LRUCache as expected');

console.assert(Node(5).value === 5 && Node(5).next === null && Node(5).prev === null);
console.log('init. Node as expected');

// List looks like: 3 -> 2 -> 1
console.assert(typeof cache.add === 'function');
console.assert(cache.add(1));
console.assert(cache.add(2));
console.assert(cache.add(3));
console.assert(cache.head.value === 3 && cache.tail.value === 1 && cache.size === 3);
console.log('LRUCache adds values as expected');

console.assert(cache.contains(1) === true);
console.assert(cache.contains(5) === false);
console.log('LRUCache contains checks values as expected');


console.assert(cache.remove(1).value === 1);
// List looks like: 3 -> 2
console.assert(cache.size === 2);
console.assert(cache.head.next.value === 2);
console.assert(cache.tail.value === 2);
console.assert(cache.remove(3).value === 3);
// List looks like: 2
console.assert(cache.head === cache.tail && cache.tail.value === 2);
console.assert(cache.remove(2));
// List looks like: empty
console.assert(cache.head === null && cache.tail === null && cache.size === 0);
console.assert(cache.contains(2) === false);
console.log('LRUCache removes values and adjusts size of Cache');

for (var i = 0; i < 5; i++) {
  cache.add(i);
}

console.assert(cache.LRUretrieve(0).value === 0);
console.assert(cache.tail.value === 1 && cache.head.value === 0);
console.log('LRUCache retrieves values and adjusts list on successful retrieval');

cache.LRUadd(10);
cache.LRUadd(12);
// List looks like 12 -> 10 -> 0 -> 4 -> 3
console.assert(cache.size <= 5);
console.log('LRUCache: does not add values over cache.limit');
console.assert(cache.head.value === 12);
console.assert(cache.tail.value === 3);
console.log('LRUCache: reorganizes values in list when adding');



