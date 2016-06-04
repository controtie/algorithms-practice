var fibbMemo = require('./fibbMemo.js');
const assert = (bool, msg) => {
  if (!bool) {
    throw new Error();
  }
}

assert(typeof fibbMemo === 'function');
console.log(fibbMemo(5));

