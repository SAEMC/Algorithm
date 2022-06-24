class Node {
  constructor(public value: any = null, public pointer: Node = null) {
    this.value = value;
    this.pointer = pointer;
  }
}

export class Stack {
  constructor(public head: Node = null, public count: number = 0) {}

  isEmpty(): boolean {
    return !Boolean(this.head);
  }

  push(item: any): void {
    this.head = new Node(item, this.head);
    this.count += 1;
  }

  pop(): any | void {
    if (this.count > 0 && this.head) {
      const node: Node = this.head;
      this.head = node.pointer;
      this.count -= 1;

      return node.value;
    } else {
      console.log("Stack is empty.");
    }
  }

  peek(): any | void {
    if (this.count > 0 && this.head) {
      return this.head.value;
    } else {
      console.log("Stack is empty.");
    }
  }

  size(): number {
    return this.count;
  }

  _printList(): void {
    let node: Node = this.head;
    let arr: Array<any> = [];

    while (node) {
      arr.push(node.value);
      node = node.pointer;
    }

    console.log(arr.join(" "));
  }
}

const stack: Stack = new Stack();

console.log(`스택이 비었나요? ${stack.isEmpty()}`);
console.log("스택에 숫자 0~9를 추가합니다.");

for (let i = 0; i < 10; i++) {
  stack.push(i);
}

stack._printList();
console.log(`스택 크기: ${stack.size()}`);
console.log(`peek: ${stack.peek()}`);
console.log(`pop: ${stack.pop()}`);
console.log(`peek: ${stack.peek()}`);
console.log(`스택이 비었나요? ${stack.isEmpty()}`);
stack._printList();
