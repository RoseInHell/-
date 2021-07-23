var count = 1;
var container = document.getElementById('container');

function getUserAction() {
  container.innerHTML = count++;
};

var setUseAction = debounce(getUserAction, 1000, true);

container.onmousemove = setUseAction

document.getElementById('button').addEventListener('click', function() {
  setUseAction.cancel();
})

/*  
  防抖  
  频繁触发事件 resize scroll mousedown mousemove keyup keydown
  
  防抖的原理：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，
              如果你在一个事件触发的 n 秒内又触发了这个事件，
              那我就以新的事件的时间为准，n 秒后才执行，总之，
              就是要等你触发完事件 n 秒内不再触发事件，我才执行。
*/

function debounce(fn, wait, immediate) {
  var timeout, result;

  var debounced = function() {

    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);

    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout;

      timeout = setTimeout(() => {
        timeout = null
      }, wait);

      if (callNow) result = fn.apply(context, args);

    } else {

      timeout = setTimeout(() => {
        fn.apply(context, args);
      }, wait);

    }
    return result;
  }

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };
  
  return debounced;
}
