// https://leetcode.com/problems/lru-cache/

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// - LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// - int get(int key) Return the value of the key if the key exists, otherwise return -1.
// - void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// - The functions get and put must each run in O(1) average time complexity.
export class LRUCache {
  constructor(capacity){
    this.capacity = capacity;
    //Map is ordered in js
    this.cache = new Map();
  }
  getItem(key){
    const value=this.cache.get(key);
    if (value){
      //update the order in cache via delete and readd
      this.cache.delete(key)
      this.cache.set(key,value)
      console.log(`Get and Updated item with key: ${key}`)
      return value
    }
    else {
      return undefined
    }
  }
  putItem(key,value){
    if (this.cache.has(key)){
      this.cache.delete(key);
    }
    else if (this.cache.size>=this.capacity){
      const oldkey=this.oldKey
      console.log(`Deleted oldest key: ${oldkey}`)
      this.cache.delete(this.oldKey) 
    }
    this.cache.set(key,value)
    console.log(`Added new item key: ${key} value: ${value}`)
  }
  get oldKey(){
    return this.cache.keys().next().value;
  }
}


let lru = new LRUCache(2);
lru.putItem('a',1);
console.log(`Least Recently Used Key: ${lru.cache.keys().next().value}\n`)
lru.putItem('b',2);
console.log(`Least Recently Used Key: ${lru.cache.keys().next().value}\n`)
lru.getItem('a');
console.log(`Least Recently Used Key: ${lru.cache.keys().next().value}\n`)
lru.putItem('c',3);
console.log(`Least Recently Used Key: ${lru.cache.keys().next().value}\n`)
