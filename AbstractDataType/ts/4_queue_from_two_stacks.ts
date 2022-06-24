export class Queue {
  constructor(
    public in_stack: Array<any> = [],
    public out_stack: Array<any> = []
  ) {}

  _transfer(): void {
    while (this.in_stack.length) {
      this.out_stack.push(this.in_stack.pop());
    }
  }

  isEmpty(): boolean {
    return !(Boolean(this.in_stack.length) || Boolean(this.out_stack.length));
  }

  enqueue(item: any): void {
    this.in_stack.push(item);
  }

  dequeue(): any | void {
    if (!Boolean(this.out_stack.length)) {
      this._transfer();
    }

    if (this.out_stack.length) {
      return this.out_stack.pop();
    } else {
      console.log("Queue is empty!");
    }
  }

  size(): number {
    return this.in_stack.length + this.out_stack.length;
  }

  peek(): any | void {
    if (!Boolean(this.out_stack.length)) {
      this._transfer();
    }

    if (this.out_stack.length) {
      return this.out_stack[this.out_stack.length - 1];
    } else {
      console.log("Queue is empty!");
    }
  }

  print(): Array<any> | void {
    if (!Boolean(this.out_stack.length)) {
      this._transfer();
    }

    if (this.out_stack.length) {
      return this.out_stack;
    } else {
      console.log("Queue is empty!");
    }
  }
}

const queue: Queue = new Queue();

console.log(`큐가 비었나요? ${queue.isEmpty()}`);
console.log("큐에 숫자 0~9를 추가합니다.");

for (let i = 0; i < 10; i++) {
  queue.enqueue(i);
}

console.log(`큐 크기: ${queue.size()}`);
console.log(`peek: ${queue.peek()}`);
console.log(`dequeue: ${queue.dequeue()}`);
console.log(`peek: ${queue.peek()}`);
console.log(`큐가 비었나요? ${queue.isEmpty()}`);
console.log(queue.print());
