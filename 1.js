function inheritPrototype(Child, Parent) {
  var prototype = Object.create(Parent.prototype);
  prototype.constructor = Child;
  Child.prototype = prototype;
}

function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function() {
  console.log(this.name);
}

function Child(name, age) {
  this.age = age;
  Parent.call(this, name);
}

inheritPrototype(Child);

Child.prototype.sa