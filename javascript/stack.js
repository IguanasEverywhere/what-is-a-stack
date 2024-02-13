class Stack {
  constructor() {
    this.stack = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to top of stack if not full
  // if full throw error
  push(item) {
    if (this.stack.length < 10) {
      this.stack.push(item);
    } else {
      throw new Error('Stack is full')
    }


  }

  // remove item from top of stack and return it
  pop() {
    let poppedItem = this.stack.pop();
    return poppedItem;

  }

  // return item at top of stack without removing it
  peek() {
    let lastItem = this.stack[this.stack.length - 1];
    return lastItem;

  }

  // return true if stack is empty, otherwise false
  isEmpty() {
    return this.stack.length === 0;

  }

  // return true if stack is full, otherwise false
  isFull() {
    return this.stack.length === this.limit;

  }

  // return number of items in stack
  size() {
    return this.stack.length;

  }

  // return -1 if item not in stack, otherwise integer representing
  // how far it is from the top
  search(target) {
    let foundItem = this.stack.indexOf(target) + 1;
    if (foundItem) {
      return this.stack.length - foundItem;
    }
    return -1;


  }

  // print contents of stack: do not return the stack itself!
  print() {
    console.log(this.stack)

  }
}

if (require.main === module) {
  // add your own tests in here
  let myStack = new Stack();
  myStack.push(3);
  myStack.push(4);
  console.log(myStack)

  myStack.pop()
  console.log(myStack);

  console.log(myStack.peek())

  console.log(myStack.isEmpty())
  console.log(myStack.isFull())
  console.log(myStack.size())
  console.log("Search", myStack.search(3))
  console.log("Search", myStack.search(4))
  console.log(myStack.print())




}

module.exports = Stack;
