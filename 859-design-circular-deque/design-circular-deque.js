/**
 * @param {number} k
 */
class ListNode {
    constructor(value, next = null, prev = null) {
        this.data = value;
        this.next = next;
        this.prev = prev
    }
}
class MyCircularDeque {
    constructor(k) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.capacity = k
    }

    insertFront(value) {
        if (this.isFull()) {
            return false;
        }
        let node = new ListNode(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {

            node.next = this.head;
            this.head.prev = node
            this.head = node;
            this.tail.next = this.head;
            this.head.prev = this.tail;

        }
        this.size++;
        return true;
    }

    insertLast(value) {
        if (this.isFull()) {
            return false
        }
        let node = new ListNode(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {

            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.tail.next = this.head;
            this.head.prev = this.tail;

        }
        this.size++;
        return true;
    }

    deleteFront() {
        if (this.isEmpty()) {
            return false
        }
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.tail.next = this.head;
            this.head.prev = this.tail;
        }
        this.size--;
        return true;
    }

    deleteLast() {
        if (this.isEmpty()) {
            return false;
        }
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = this.head;
            this.head.prev = this.tail;
        }
        this.size--;
        return true;
    }
    getFront() {
        return this.isEmpty() ? -1 : this.head.data;
    }

    getRear() {
        return this.isEmpty() ? -1 : this.tail.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size == this.capacity;
    }
};