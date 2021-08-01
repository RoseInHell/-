var combinationSum = function(candidates, target) {
  var len = candidates.length;
  var res = [];
  candidates.sort((a, b) => a-b)
  const foo = (arr, target, index) => {
    for (let i=index; i<len; i++) {
      if (candidates[i] === target) {
        arr.push(candidates[i])
        res.push(arr);
        return
      } else if (candidates[i] < target) {
        foo([...arr, candidates[i]], target - candidates[i], i)
      }
    }
  }
  foo([], target, 0)
  return res;
};

console.log(combinationSum([2,7,6,3,5,1], 9))