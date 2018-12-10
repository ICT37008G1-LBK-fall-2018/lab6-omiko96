let firstElem = document.querySelector("#first"),
  secondElem = document.querySelector("#second");

function insertAfter(newNode, currNode) {
  currNode.parentNode.insertBefore(newNode, currNode.nextSibling);
}

insertAfter(firstElem, secondElem);
