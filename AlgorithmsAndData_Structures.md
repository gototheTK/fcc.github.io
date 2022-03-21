# DataStructure

## Typed Arrays
### Description: Basically what happens in the background is that your browser will automatically give the right amount of memory space for that array. It will also change as needed if you add or remove data.Typed arrays are the answer to this problem. You are now able to say how much memory you want to give an array. Below is a basic overview of the different types of arrays available and the size in bytes for each element in that array.Typed arrays do not have some of the methods traditional arrays have such as .pop() or .push(). Typed arrays also fail Array.isArray() that checks if something is an array. Although simpler, this can be an advantage for less-sophisticated JavaScript engines to implement them.You can also create a buffer to assign how much data (in bytes) you want the array to take up.

### -Note
    To create typed arrays using buffers, you need to assign the number of bytes to be a multiple of the bytes listed above.Buffers are general purpose objects that just carry data. You cannot access them normally. To access them, you need to first create a view.


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

    