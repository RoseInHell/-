/* 
  方法一：JSON.parse(JSON.stringify(obj))
  缺点：无法拷贝函数
*/
var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]

var new_arr = JSON.parse(JSON.stringify(arr));

console.log(new_arr);

var arr = [function(){
  console.log(a)
}, {
  b: function(){
      console.log(b)
  }
}]

var new_arr = JSON.parse(JSON.stringify(arr));

console.log(new_arr); // [null, {}]

/* 
  方法二：递归
*/

var deepCopy = function(obj) {
  if (typeof obj !== 'object') return;
  
  var newObj = obj instanceof Array ? [] : {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}