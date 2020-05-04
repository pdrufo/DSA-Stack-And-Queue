class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

const starTrekQ = new Queue();

starTrekQ.enqueue("Kirk");
starTrekQ.enqueue("Spock");
starTrekQ.enqueue("Uhura");
starTrekQ.enqueue("Sulu");
starTrekQ.enqueue("Checkov");
// will remove Kirk, not Spock ...
starTrekQ.dequeue();

function peek(queue) {
  console.log(queue.first.value);
}

function isEmpty(queue) {
  if (!queue.first) {
    return "Queue is empty";
  } else {
    return "Queue is not empty";
  }
}
console.log(isEmpty(starTrekQ));

function display(queue) {
  let current = queue.first;
  // while current is not null?
  while (current) {
    console.log(curren.value);
    current = current.next;
  }
}

display(starTrekQ);

const fQueue = new Queue();
const mQueue = new Queue();

function pairDancers(dancers) {
  dancers.forEach((dancer) => {
    if (dancer[0] === "F") {
      fQueue.enqueue(dancer);
    } else {
      mQueue.enqueue(dancer);
    }
    if (fQueue.first && mQueue.first) {
      let maleDancer = mQueue.dequeue();
      let femDancer = fQueue.dequeue();
      console.log(`${femDancer} is paired with ${maleDancer}`);
    }
  });
  if (mQueue.length > 0) {
    console.log(`There are ${mQueue.length} male dancers waiting to dance`);
  } else if (fQueue.length > 0) {
    console.log(`There are ${fQueue.length} female dancers waiting to dance`);
  }
}

const bankQueue = new Queue();
bankQueue.enqueue("Elan");
bankQueue.enqueue("Makua");
bankQueue.enqueue("Teddy");
bankQueue.enqueue("Fred");

function ophidianBank(queue) {
  while (queue.length > 0) {
    if (Math.random() <= 0.25) {
      let firstPerson = queue.first;
      queue.dequeue();
      queue.enqueue(firstPerson.data);
      console.log(
        `${firstPerson.data} has been moved to the end of the queue.`
      );
    } else {
      console.log(`${queue.first.data} has been served.`);
      queue.dequeue();
    }
  }
}

ophidianBank(bankQueue);

module.exports = Queue;
