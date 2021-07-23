var imgList = document.getElementsByTagName('img');
var len = imgList.length;
var index = 0;

function lazyLoad() {
  var clientHeight = document.documentElement.clientHeight;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  for (var i=index; i<len; i++) {
    if (imgList[i].offsetTop < clientHeight + scrollTop) {
      if (imgList[i].getAttribute('src') === './default.png') {
        imgList[i].src = imgList[i].getAttribute('data-lazy-img');
      }
      index = i + 1;
    }
  }
}