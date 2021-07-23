function instance_of(obj, con) {
  let implicitprototype = obj.__proto__;
  let displayprototype = con.prototype;

  while (true) {
    if (implicitprototype === null) {
      return false;
    } else if (implicitprototype === displayprototype) {
      return true;
    }

    implicitprototype = implicitprototype.__proto__
  }
}
