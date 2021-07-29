Function.prototype.bind2 = function(context) {
  var self = this;


  var args = [].slice.call(arguments, 1);

  var found = function() {
    var bindArgs = [].slice.call(arguments);

    return self.apply(this instanceof self ? this : context, args.concat(bindArgs));
  }

  var fNOP = function(){};
  fNOP.prototype = self.prototype;
  found.prototype = new fNOP();

  return found;
}