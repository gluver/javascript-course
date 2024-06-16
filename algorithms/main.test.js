import { expect, test } from 'vitest';

import { cumSum } from './sum';
test('cumulative sum of an array', () => {
  expect(cumSum([1, 3, 5, 7])).toBe(16);
  expect(cumSum([-2, -4, -8])).toBe(-14);
});


import { binarySearch } from './bs';
test('binary binarySearch', () => {
  expect(binarySearch([1, 3, 5, 7], 5)).toBe(2);
  expect(binarySearch([1, 3, 5, 7], 2)).toBe(-1);
} );

import { LRUCache } from './lru';
test('LRU cache', () => {
  const lru = new LRUCache(2);
  lru.putItem('a',1);
  console.log(`Least Recently Used Key: ${lru.cache.keys().next().value}\n`)
  lru.putItem('b',2);
  console.log(`Least Recently Used Key: ${lru.cache.keys().next().value}\n`)
  lru.getItem('a');
  console.log(`Least Recently Used Key: ${lru.cache.keys().next().value}\n`)
  lru.putItem('c',3);
  console.log(`Least Recently Used Key: ${lru.cache.keys().next().value}\n`)
  expect(lru.getItem('a')).toBe(1)
  expect(lru.getItem('c')).toBe(3)
})