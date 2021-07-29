var arr = [1, [2, [3, 4]]];

function flat(arr) {
  var result = [];
  for (var i=0; i<arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flat(arr));


function flat1(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }

  return arr;
}