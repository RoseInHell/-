## sessionStorage
### 基本使用
```javascript
  // 保存数据到 sessionStorage
  sessionStorage.setItem('key', 'value');

  // 从 sessionStorage 获取数据
  let data = sessionStorage.getItem('key');

  // 从 sessionStorage 删除保存的数据
  sessionStorage.removeItem('key');

  // 从 sessionStorage 删除所有保存的数据
  sessionStorage.clear();
```
http://example.com 与 https://example.com的sessionStorage会相互隔离

Chrome更新89版本后，sessionStorage丢失a标签跳转丢失sessionStorage

解决方案

只需要将a标签中添加 rel=“opener”就能解决
```html
  <a target="_blank" href="www.XXXXX.com" rel="opener"></a>
```
或者 window.open()

如果一个链接元素设置了target=_blank，同时希望新开页面有window.opener对象，则可以给链接元素添加rel="opener"。

localStorage多个标签页可以共享数据，
而SessionStorage多个标签页不可共享数据！！！因为每个tab页都是独立的会话
请区分sessionStorage跳转丢失信息和多标签页共享信息是不同的知识点