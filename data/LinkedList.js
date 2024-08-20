// src/data/LinkedList.js

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
    }

    pop() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    removeAt(position) {
        if (position < 0) return;

        if (position === 0) {
            this.head = this.head ? this.head.next : null;
            return;
        }

        let current = this.head;
        for (let i = 0; current && i < position - 1; i++) {
            current = current.next;
        }

        if (current && current.next) {
            current.next = current.next.next;
        }
    }

    insertAt(position, value) {
        if (position < 0) return;

        if (position === 0) {
            this.prepend(value);
            return;
        }

        let current = this.head;
        for (let i = 0; current && i < position - 1; i++) {
            current = current.next;
        }

        if (current) {
            const newNode = new Node(value, current.next);
            current.next = newNode;
        }
    }
}

export default LinkedList;
