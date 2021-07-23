var array = [1, 1, '1','1'];

// 方法一
function unique1(array) {
  var res = [];
  for (var i=0; i<array.length; i++) {
    for (var j=0; j<res.length; j++) {
      if (array[i] === res[j]) {
        break;
      }
    }
    // 如果array[i]是唯一的，那么执行完循环，j等于res.length
    if (j === res.length) {
      res.push(array[i])
    }
  }
  return res;
}

console.log(unique1(array))

// 方法二
function unique2(array) {
  var res = [];
  for (var i=0; i<array.length; i++) {
    var current = array[i];
    if (res.indexOf(current) === -1) {
      res.push(current);
    }
  }
  return res;
}

// 方法三
let set = new Set([1,2,3])
const arr = [...set]
