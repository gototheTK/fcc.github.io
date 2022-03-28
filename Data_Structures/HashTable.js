var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line

  

  this.add= (key, value) => {


    if(this.lookup(key)){
      
     this.collection[hash(key)][key] = value;
    
    }else if(this.collection.hasOwnProperty(hash(key))){

      this.collection[hash(key)][key] = value;
      
    }else {

      const obj = {};
      obj[key] = value;

      this.collection[hash(key)] = obj;

    }

    

  }

  this.lookup = (key) => {
    return this.collection.hasOwnProperty(hash(key)) ? this.collection[hash(key)].hasOwnProperty(key) 
    ? this.collection[hash(key)][key]
    : null 
    : null;
  }

  this.remove = (key) => {
    console.log(key);
    console.log(this.collection);
    this.lookup(key) !== null ? delete this.collection[hash(key)][key] : '';
    Object.entries(this.collection[hash(key)]).length ===0 ? delete this.collection[hash(key)] : '';
    
    
  }

  // Only change code above this line
};


/* 

let called = 0;

let hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

let HashTable = function() {
  this.collection = {};
  // Only change code below this line
  this.add = (key, value) => {
    const hashedKey = hash(key);
    this.collection[hashedKey] = this.collection[hashedKey] || {};
    this.collection[hashedKey][key] = value;
  }

  this.lookup = (key) => {
    const hashedKey = hash(key);
    return this.collection[hashedKey][key];
  }

  this.remove = (key) => {
    const hashedKey = hash(key);
    delete this.collection[hashedKey][key];
    if (!!Object.keys(this.collection[hashedKey]).length)
      delete this.collection[hashedKey];
  }
  // Only change code above this line
};
*/