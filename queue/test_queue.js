import {Queue} from './queue.js';

window.addEventListener("load", start);

function start() {
  console.log(`Javascript kører`);
  const queue = new Queue();
  queue.enqueue("DataA")
  queue.enqueue("DataB");
  queue.enqueue("DataC");
  queue.enqueue("DataD");
  queue.enqueue("DataE");
  console.log(queue);
  console.log(queue.peek());
  console.log(queue.size());
  console.log(queue.get(3));
  queue.dequeue();
  //console.log(queue)

}