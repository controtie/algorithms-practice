// queues.js: Prototypal inheritance
// Write a Queue that hold and retrieves the following values:
// 5, 4, 3, 2, 1

var Queues = function () {
  var obj = Object.create(Queues.prototype);
  obj.storage = [];
  obj.startCounter = 0;
  obj.endCounter = 0;
  return obj;
}

Queues.prototype.enqueue = function (val) {
  this.storage[this.startCounter] = val;
  this.startCounter++;
}
Queues.prototype.dequeue = function (val) {
  var retrieveValue = this.storage[this.endCounter];
  this.endCounter++;
  return retrieveValue;
}

module.exports = Queues;
