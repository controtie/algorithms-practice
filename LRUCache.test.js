// LRUCache.test.js

var LRUCache = require('./LRUCache.js');

var assert = function (bool) {
  if (!bool) {
    throw new Error();
  }
}
var cache = LRUCache();

assert(cache.size === 0 && cache.head === null && 
  cache.tail === null);

for (var i = 0; i < 7; i++) {
  cache.LRUadd(i);
}

console.log(cache.LRUretrieve(3));
console.assert(cache.head.value === 3);


