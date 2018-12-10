let parentElem = document.querySelector("#container");

function removeAllChild(elem) {
  let childs = Array.from(elem.children);
  childs.forEach(child => child.remove());
}

removeAllChild(parentElem);
