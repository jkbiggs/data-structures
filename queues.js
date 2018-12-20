// Queues

// FIFO

function createQueue() {
    const queue = []

    return {
        enqueue(item) {
            queue.unshift(item)
        },
        dequeue() {
            return queue.pop()
        },
        peek() {
            return queue[queue.length -1]
        },
        get length() {
            return queue.length
        },
        isEmpty() {
            return queue.length === 0;
        }
    }
}

const q = createQueue()
console.log(q.isEmpty())

q.enqueue("This is a queue")
q.enqueue("Help others learn")
q.enqueue("Be happy")

console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.peek())
console.log(q.isEmpty())
