var Map = function() {
    this.collection = {};
    // Only change code below this line
  
    this.has = (key) => {
      return this.collection.hasOwnProperty(key);
    };
  
    this.add = (key, value) => {
      this.collection[key] = value;
    };
  
    this.remove = (key) => {
  
      if(this.has(key)){
       delete this.collection[key];
      }
  
    };
  
    this.get = (key) => {
      return this.collection[key];
    };
  
    this.values = () => {
      return [...Object.values(this.collection)]
    };
    
    this.size = () => {
      return Object.entries(this.collection).length;
    };
  
    this.clear = () => {
      console.log('ya');
      this.collection = {};
    };
  
  
    // Only change code above this line
  };