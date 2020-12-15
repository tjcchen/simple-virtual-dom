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

/**
 * Render function converts the virtual dom to real dom element
 */

const renderElement = ({ tagName, attrs, children }) => {
  const $el = document.createElement(tagName);

  // set attributes
  for (const [attr, val] of Object.entries(attrs)) {
    $el.setAttribute(attr, val);
  }

  // set children
  for (const child of children) {
    // recursively render children element
    // this actually create children elements & append them to parent node
    const $child = render(child);

    $el.appendChild($child);
  }

  return $el;
};

/**
 * This render function creates both HTML node & TEXT node
 * 
 * @param {*} vNode 
 */
const render = (vNode) => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  return renderElement(vNode);
};

export default render;