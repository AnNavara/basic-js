const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const chainMaker = {
    head: null,
    length: 0,

    getLength() {
        return this.length;
    },

    addLink(value = '') {
        if (this.length === 0) {
            this.head = {};
            this.head.value = value;
            this.length++;
            return this;
        } else {
            let current = this.head;

            // move to the last node
            while (current.next) {
                current = current.next;
            }

            current.next = {};
            current.next.value = value;
            this.length++;
            return this;
        }
    },

    removeLink(position) {
        try {
            if (
                typeof position !== 'number' ||
                position <= 0 ||
                this.length <= position
            ) {
                throw new Error("You can't remove incorrect link!");
            }

            let current = this.head;

            if (position === 1) {
                this.head = current.next;
            } else {
                let prev = null;
                let index = 1;

                while (index < position) {
                    prev = current;
                    current = current.next;
                    index++;
                }

                prev.next = current.next;
            }
            this.length--;
        } catch (err) {
            this.head = null;
            this.length = 0;
            throw new Error(err.message);
        }

        return this;
    },

    reverseChain() {
        let current = this.head;
        let prev = null;
        let next = null;

        for (let i = 0; i < this.length; i++) {
            // hold next
            if (i !== this.length) next = current.next;
            if (i === this.length - 1) {
                this.head = current;
            }
            // update links
            current.next = prev;
            prev = current;
            current = next;
        }

        return this;
    },

    finishChain() {
        let arr = [];
        let current = this.head;
        let index = 0;

        while (index < this.length) {
            arr.push(`( ${current.value} )`);
            current = current.next;
            index++;
        }

        this.head = null;
        this.length = 0;
        return arr.join('~~');
    },
};

module.exports = {
    chainMaker,
};
