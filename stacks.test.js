var Stack = require('./stacks.js');

var assert = function (bool, msg) {
  if (!bool) {
    throw new Error();
  }
}

assert(typeof Stack === 'function');
assert(Array.isArray(new Stack().storage) === true);
console.log('init. Stack works as expected');

var testStack = new Stack();
for (var i = 0; i <= 5; i++) {
  testStack.add(i);
}
for (var j = 0; j <= 5; j++) {
  assert(testStack.storage[j] === j);
}
console.log('adds values to stack as expected');
for (var k = 5; k >= 0; k--) {
  assert(testStack.retrieve() === k);
}
console.log('retrieves values from stack as expected');

assert(testStack.retrieve() === null);
console.log('does not retrieve values from an empty stack');
