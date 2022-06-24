class Node {
  constructor(public value: any = null, public pointer: Node = null) {
    this.value = value;
    this.pointer = null;
  }
}

export class LinkedQueue {
  constructor(
    public head: Node = null,
    public tail: Node = null,
    public count: number = 0
  ) {}

  isEmpty(): boolean {
    return !Boolean(this.head);
  }

  dequeue(): any | void {
    if (this.head) {
      const value: any = this.head.value;
      this.head = this.head.pointer;
      this.count -= 1;

      return value;
    } else {
      console.log("Queue is empty.");
    }
  }

  enqueue(value: any): void {
    const node: Node = new Node(value);

    if (!Boolean(this.head)) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.tail) {
        this.tail.pointer = node;
      }

      this.tail = node;
    }

    this.count += 1;
  }

  size(): number {
    return this.count;
  }

  peek(): any {
    return this.head.value;
  }

  print(): void {
    let node: Node = this.head;
    let arr: Array<any> = [];

    while (node) {
      arr.push(node.value);
      node = node.pointer;
    }

    console.log(arr.join(" "));
  }
}

const queue: LinkedQueue = new LinkedQueue();

console.log(`큐가 비었나요? ${queue.isEmpty()}`);
console.log("큐에 숫자 0~9를 추가합니다.");

for (let i = 0; i < 10; i++) {
  queue.enqueue(i);
}

console.log(`큐가 비었나요? ${queue.isEmpty()}`);
queue.print();
console.log(`큐 크기: ${queue.size()}`);
console.log(`peek: ${queue.peek()}`);
console.log(`dequeue: ${queue.dequeue()}`);
console.log(`peek: ${queue.peek()}`);
queue.print();
