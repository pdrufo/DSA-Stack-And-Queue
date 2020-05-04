class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}
function display(stack) {
  let counter = stack.top;
  while (counter) {
    console.log(counter.data);
    counter = counter.next;
  }
}
function isEmpty(stack) {
  return stack.top === null ? true : false;
}
function peek(stack) {
  if (!stack.top) {
    return;
  } else {
    console.log(stack.top.data);
  }
}
function main() {
  const starTrek = new Stack();
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  starTrek.pop();
  starTrek.pop();
  display(starTrek);
}
main();

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reverse = new Stack();
  for (let i = 0; i < s.length; i++) {
    reverse.push(s.charAt(i));
  }
  for (let j = 0; j < s.length; j++) {
    if (s[j] === reverse.pop()) continue;
    else return false;
  }
  return true;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

function checkParentheses(exp) {
  let stack = new Stack();
  if (exp[0] === ")" || exp[exp.length - 1] === "(") {
    return false;
  }
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === "(") {
      stack.push(exp[i]);
    } else if (exp[i] === ")") {
      stack.pop();
    }
  }
  if (stack.top !== null) {
    // then there's a remainder
    return false;
  } else {
    return true;
  }
}

console.log(checkParentheses("(((())))"));

function sort(stack) {
  let sorted = new Stack();
  while (stack.top) {
    let saved = stack.pop();
    while (sorted.top && sorted.top.data > saved) {
      stack.push(sorted.pop());
    }
    sorted.push(saved);
  }
  while (sorted.top) {
    stack.push(sorted.pop());
  }
  return stack;
}
