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

const render = (vNode) => {
  const $el = document.createElement(vNode.tagName);

  // set attributes
  for (const [prop, val] of Object.entries(vNode.attrs)) {
    $el.setAttribute(prop, val);
  }

  // set children
  for (const child of vNode.children) {
    // recursively render children element
    // this actually create children elements & append them to parent node
    const $child = render(child);

    $el.appendChild($child);
  }

  return $el;
};

export default render;