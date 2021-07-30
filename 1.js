function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hk = helloWorldGenerator;
var hw = hk()
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())