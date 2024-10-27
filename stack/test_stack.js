import {Stack} from './stack.js';

window.addEventListener("load", start);

function start() {
  console.log(`Javascript kører`);
  const stack = new Stack();
  stack.push("A");
  stack.push("B");
  stack.push("C");
  console.log(stack.get(0));
  console.log(stack);

}