function printID(id: number | string) {
  // 使用联合类型的值，需要特别的小心
  if (typeof id === 'string') {
    console.log(id.toLocaleLowerCase())
  }
}