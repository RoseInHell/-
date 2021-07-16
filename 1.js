function debounce(fn, wait, immediate) {
  var timer = null;
   
  return function() {
    let context = this;

    if (!timer && immediate) {
      fn.apply(context, arguments);
    }

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments)
    }, wait);
  }
}

function throttle(fn, wait, immeditae) {
  var timer = null;
  var callNow = immeditae

  return function() {
    let context = this;

    if (callNow) {
      fn.apply(context, arguments);
      callNow = false
    }

    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, arguments);
        timer = null;
      }, wait);
    }
  }
}