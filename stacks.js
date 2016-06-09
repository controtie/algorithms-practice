// stacks.js: Pseudoclassical style
// Write a simple stack that loads and unloads the following numbers.
// 5, 4, 3, 2, 1

var Stack = function () {
  this.storage = [];
  this.counter = 0;
}

Stack.prototype.add = function (val) {
  this.storage[this.counter] = val;
  this.counter++;
}

Stack.prototype.retrieve = function () {
  if (this.counter > 0) {
    this.counter--;
    var retrievedValue = this.storage[this.counter];
    this.storage[this.counter] = undefined; 
    return retrievedValue;
  }
  return null;
}


module.exports = Stack;
