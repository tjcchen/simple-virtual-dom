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

const vApp = createElement('div', {
  attrs: {
    id: 'app'
  },
  children: [
    createElement('img', {
      attrs: {
        src: 'http://www.tjcchen.cn/love.png'
      },
      children: []
    })
  ]
});

// render virtual dom to real dom, $app is a real dom node
const $app = render(vApp);

// mount real dom to page
mount($app, document.getElementById('root'));

