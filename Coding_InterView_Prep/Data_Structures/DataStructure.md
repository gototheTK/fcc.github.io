# DataStructure

## Stack
### Description: Last-In-First-Out type of Data Structure

    function Stack() {
        var collection = [];

        this.push = (item) => collection.push(item);

        this.pop = () => collection.pop();

        this.peek = () => collection[collection.length-1];

        this.isEmpty = () => collection.length < 1;

        this.clear = () => collection.length = 0;        
    }


## Queue
### Description: FIFO(First-In-First-Out) type of Data Structure. Elements added to a queue are pushed to the tail, or the end, of the queue, and only the element at the front of the queue is allowed to be removed.

    function Queue() {
        
        var collection = [];

        this.enqueue = (item) => collection.push(item);

        this.dequeue = () => collection.shift();

        this.front = () => collection.length === 0 ? null : collection[0];

        this.isEmpty = () => collection.length === 0;

        this.size = () => collection.length === 0;

    }