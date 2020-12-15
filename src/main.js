// a simple virtual dom looks like this:
// const vApp = {
//   tagName: 'div',
//   attrs: {
//     id: 'app'
//   },
//   children: [
//     'hello world'
//   ]
// };

import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';

// create virtual dom
const createVApp = (count) => createElement('div', {
  attrs: {
    id: 'app',
    dataCount: count
  },
  children: [
    createElement('input'),
    String(count),
    createElement('img', {
      attrs: {
        src: 'http://www.tjcchen.cn/love.png'
      },
      children: []
    })
  ]
});

// create vApp with count
let count = 0;
let vApp = createVApp(count);

// render virtual dom to real dom, $app is a real dom node
const $app = render(vApp);

// mount real dom to page
let $rootElement = mount($app, document.getElementById('root'));

// update content per second
setInterval(() => {
  count++;
  
  const vNewApp = createVApp(count);
  const patch = diff(vApp, vNewApp);

  $rootElement = patch($rootElement);

  // let the new virtual app be the current vApp
  vApp = vNewApp;
}, 1000);

