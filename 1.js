var list = document.getElementsByTagName('img');
var len = list.length;
var index = 0;


function lazyLoad() {
  var clientHeight = document.documentElement.clientHeight;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  for (let i=0; i<len; i++) {
    if (list[i].offsetTop < clientHeight + scrollTop) {
      if (list[i].getAttribute('src') !== 'default.png') {
        list[i].src = list[i].getAttribute('lazy-src');
      }
      index = i + 1
    }
  }
}