var Queue = require('./queues.js');

console.assert(typeof Queue === 'function');
console.assert(Array.isArray(Queue().storage) === true);
console.log('init. Queue as expected');

var testQueue = Queue();
for (var i = 0; i <= 5; i++) {
  testQueue.enqueue(i);
}
for (var j = 0; j <= 5; j++) {
  console.assert(testQueue.dequeue() === j);
}
console.log('enqueues and dequeues as expected');

