function JSONP({url, params, callback}) {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script');

    window[callback] = function (data) {
      resolve(data);
      document.body.removeChild();
    }

    params = { ...params, callback };
    var attr = [];
    
    for (let key in params) {
      attr.push(`${key}=${params[key]}`);
    }

    script.src = `${url}?${attr.join('&')}`;
    document.body.appendChild(script)
  })
}