var arr = [1,2,3,4];

arr.forEach((item, key) => {
  Object.defineProperty(arr, item, {
    get() {
      console.log(item)
      return item;
    },
    set(newVal) {
      console.log('set')
      item = newVal;
    }
  })
})

// arr[1] = 0
// console.log(arr)