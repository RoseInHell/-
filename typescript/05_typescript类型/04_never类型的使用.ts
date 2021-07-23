function foo(): never {
  // 死循环
  while(true) {

  }

}

function bar(): never {
  throw new Error()
}

function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log('string处理方式处理message')
      break;
    case 'number':
      console.log('number')
      break;
    case 'boolean':
      console.log('number')
      break;
    default:
      const check: never = message
  } 
}

handleMessage(true)

export {}