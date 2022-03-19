class CircularQueue {
    constructor(size) {
  
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
  
      while (size > 0) {
        this.queue.push(null);
        size--;
      }
    }
  
    print() {
      return this.queue;
    }
  
    enqueue(item) {
      // Only change code below this line
  
      this.queue[this.write] = this.queue[this.write] === null ? item : this.queue[this.write];
  
      this.write = this.write < this.max ? this.write + 1 : 0;
  
      return item;
      // Only change code above this line
    }
  
    dequeue() {
      // Only change code below this line
      let item = this.queue[this.read];
  
  
      let next = item !== null ? (this.read+1) > this.max ? 0 : this.read + 1:this.read;
      this.queue[this.read] = null;
      this.read = next;
      
  
      return item;
      // Only change code above this line
    }
  }


  /*
 class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;

      if (this.write > this.max) this.write = 0;
      return item;
    }
    return null;
  }

  dequeue() {
    if (this.queue[this.read] != null) {
      let item = this.queue[this.read];
      this.queue[this.read++] = null;
      if (this.read > this.max) this.read = 0;
      return item;
    }
    return null;
  }
}
  */
