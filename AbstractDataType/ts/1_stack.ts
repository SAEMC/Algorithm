export class Stack {
  constructor(public items: Array<any> = []) {}

  isEmpty(): boolean {
    return !Boolean(this.items.length);
  }

  push(value: any): void {
    this.items.push(value);
  }

  pop(): any | void {
    const value = this.items.pop();

    if (value) {
      return value;
    } else {
      console.log("Stack is empty.");
    }
  }

  size(): number {
    return this.items.length;
  }

  peek(): Array<any> | void {
    if (this.items) {
      return this.items[this.items.length - 1];
    } else {
      console.log("Stack is empty.");
    }
  }
}

const stack = new Stack();

console.log(`스택이 비었나요? ${stack.isEmpty()}`);
console.log(`스택에 숫자 0~9를 추가합니다.`);

for (let i = 0; i < 10; i++) {
  stack.push(i);
}

console.log(`스택 크기: ${stack.size()}`);
console.log(`peek: ${stack.peek()}`);
console.log(`pop: ${stack.pop()}`);
console.log(`peek: ${stack.peek()}`);
console.log(`스택이 비었나요? ${stack.isEmpty()}`);
console.log(stack.items);
