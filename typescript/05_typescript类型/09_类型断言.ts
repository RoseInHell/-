// 类型断言
const el = document.getElementById('why') as HTMLImageElement;

el.src = "url地址";

class Person {

}

class Student extends Person {
  studying() {

  }
}

function sayHello(p: Person) {
  (p as Student).studying()
}

const message = 'hello world';

const num: number = (message as unknown) as number;



export {}