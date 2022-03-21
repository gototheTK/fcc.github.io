function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line
  
    this.enqueue = (item) => {
  
      console.log(this.collection);
      this.collection.push(item);
      this.collection.sort((a, b) => {
        return a[1] > b[1] ? 1 
        : a[1] < b[1] ? -1
        : 0;
      })
  
      console.log(this.collection);
  
      return item[0];
    }
  
  
    this.dequeue = () => {
      return this.collection.shift()[0];
    }
  
    this.front = () => this.collection[0][0];
  
    this.size = () => this.collection.length;
  
    this.isEmpty = () => this.collection.length === 0;
  
    // Only change code above this line
  }

  /*
  function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function(item) {
    let index = this.collection.findIndex(elem => elem[1] > item[1]);
    if (index !== -1) {
      this.collection.splice(index, 0, item);
    } else {
      this.collection.push(item);
    }
  }

  this.dequeue = function() {
    return this.collection.shift()[0];
  }

  this.size = function() {
    return this.collection.length;
  }

  this.isEmpty = function() {
    return this.size() === 0;
  }

  this.front = function() {
    return this.collection[0][0];
  }
  // Only change code above this line
}
  */