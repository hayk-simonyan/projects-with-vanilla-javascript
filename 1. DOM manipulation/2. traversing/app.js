let val;

const ul = document.querySelector('ul.list');
const firstLi = document.querySelector('li.lh-copy');

// 1. NODES

// childNodes (node list)
const nodeListOfUl = ul.childNodes;
val = nodeListOfUl;
val = nodeListOfUl[0].nodeName;
val = nodeListOfUl[0].nodeType;

// firstChild
const firstNode = ul.firstChild;
// lastChild
const lastNode = ul.lastChild;

// parentNode
const parentNodeOfFirstLi = firstLi.parentNode;

// nextSibling
const nextSiblingNode = firstLi.nextSibling;
// prevSibling
const prevSiblingNode = firstLi.previousSibling;

// 2. ELEMENTS

// children (html elements)
const elementsOfUl = ul.children;
elementsOfUl[0].style.background = 'orange';
const childrenOfChildren = elementsOfUl[0].children[0];
childrenOfChildren.id = 'orange';

// firstElementChild
const firstElement = ul.firstElementChild;
// lastElementChild
const lastElement = ul.lastElementChild;
// childElementCount
const lisCount = ul.childElementCount;

// parentElement
const parentElementOfFirstLi = firstLi.parentElement;
const parentOfParent = parentElementOfFirstLi.parentElement;

// nextElementSibling
const nextSiblingElement = firstLi.nextElementSibling;
// prevSibling
const prevSiblingElement = firstLi.prevSiblingElement;

console.log(val);
