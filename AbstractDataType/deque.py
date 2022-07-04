from queue import Queue


class Deque(Queue):
    def enqueue_back(self, item):
        self.items.append(item)

    def dequeue(self):
        value = self.items.pop(0)

        if value is not None:
            return value
        else:
            print("Deque is empty.")


if __name__ == "__main__":
    deque = Deque()

    print(f"데크(Deque)가 비었나요? {deque.isEmpty()}")
    print("데크에 숫자 0~9를 추가합니다.")

    for i in range(10):
        deque.enqueue(i)

    print(f"데크 크기: {deque.size()}")
