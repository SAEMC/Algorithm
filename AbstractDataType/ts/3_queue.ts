export class Queue {
  constructor(public items: Array<any> = []) {}

  isEmpty(): boolean {
    return !Boolean(this.items.length);
  }

  enqueue(item: any): void {
    this.items.unshift(item);
  }

  dequeue(): any | void {
    const value: any = this.items.pop();

    if (typeof value !== undefined) {
      return value;
    } else {
      console.log("Queue is empty.");
    }
  }

  size(): number {
    return this.items.length;
  }

  peek(): Array<any> | void {
    if (this.items.length) {
      return this.items[this.items.length - 1];
    } else {
      console.log("Queue is empty.");
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
console.log(queue.items);
