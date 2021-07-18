function createAnother(child, parent) {
  var prototype = Object.create(parent.prototype);
  console.log(prototype)
  parent.constructor = child;
  child.prototype = prototype;
}
function Parent(name) {
  this.name = name;
  this.color = [1,2,3]
}

Parent.prototype.sayName = function() {
  console.log(this.name);
}

function Child(name, age) {
  this.age = age;
  Parent.call(this, name);
}

createAnother(Child, Parent)

var person = {
  name: '1'
}

console.log(Object.create(person))