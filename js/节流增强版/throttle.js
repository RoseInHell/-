var count = 1;
var container = document.getElementById('container');

function getUserAction() {
  container.innerHTML = count++;
};

var setUseAction = throttle(getUserAction, 5000);

container.onmousemove = setUseAction

document.getElementById('button').addEventListener('click', function() {
  setUseAction.cancel();
})

/* 
  节流的原理：

  如果你持续触发事件，每隔一段时间，只执行一次事件。

  根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。
  我们用 leading 代表首次是否执行，trailing 代表结束后是否再执行一次。

  关于节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器。
*/

function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
      previous = options.leading === false ? 0 : new Date().getTime();
      timeout = null;
      func.apply(context, args);
      if (!timeout) context = args = null;
  };

  var throttled = function() {
      var now = new Date().getTime();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
          if (timeout) {
              clearTimeout(timeout);
              timeout = null;
          }
          previous = now;
          func.apply(context, args);
          if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
      }
  };
  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  }
  return throttled;
}