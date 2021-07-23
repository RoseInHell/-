/*  
  防抖  
  频繁触发事件 resize scroll mousedown mousemove keyup keydown
  
  防抖的原理：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，
              如果你在一个事件触发的 n 秒内又触发了这个事件，
              那我就以新的事件的时间为准，n 秒后才执行，总之，
              就是要等你触发完事件 n 秒内不再触发事件，我才执行。
*/
function debounce(fn, wait, immediate) {
  let timer = null;

  return function() {
    let args = arguments;
    let context = this;

    if (immediate && !timer) {
      fn.apply(context, args);
    }

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  }
}

// 节流
function throttle(fn, wait, immediate) {
  let timer = null;
  let callNow = immediate;

  return function() {
    let context = this;
    let args = arguments;

    if (callNow) {
      fn.apply(context, args);
      callNow = false;
    }

    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, wait)
    }
  }
}