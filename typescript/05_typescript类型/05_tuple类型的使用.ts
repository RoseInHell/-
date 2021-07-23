// tuple元组: 多种元素的组合
// "why" 18 1.88
// const info: any[] = ["why", 18, 1.88];
// const infoObjs = {
//   name: 'why',
//   age: 18,
//   height: 1.88
// }

// const name = info[0];
// console.log(name.length)


// 2.元组的特点
// const info: [string, number, number] = ["why", 18, 1.88];

// const name = info[0];
// console.log(name.length);

// const age = info[1];
// console.log(age.length)

// 应用场景
function useState<T>(state: T): [T, (newValue: T) => void] {
  let currentState = state;

  const changeState = (newState: T) => {
    currentState = newState
  }

  const tuple: [T, (newstate:T) => void] = [currentState, changeState];
  return tuple
}

const [counter, setCounter] = useState(10);

const [title, setTitle] = useState('abc')

type MyFnction = () => void;

const foo: MyFnction = () => {}


export {}