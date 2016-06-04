// fibonacci memoization

const fibbMemo = (num) => {
  const memo = [];
  if (memo[num]) {
    return memo[num];
  } else if (num > 2) {
    var newFibbEntry = fibbMemo(num-1) + fibbMemo(num-2);
    memo[num] = newFibbEntry;
    return newFibbEntry;
  } else {
    return 1;
  }
}

module.exports = fibbMemo;
