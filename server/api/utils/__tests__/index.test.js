import uuid from 'uuid/v4';
import _fakeFetch_ from '../index';

const defaultRequest = {
  id: uuid(),
  date: new Date().toString(),
  economy: 3,
  premium: 3
};

test('Test 1. Free premium rooms: 3, Free economy rooms: 3;', () => {
  const request = Object.assign(defaultRequest, { economy: 3, premium: 3 });

  expect(_fakeFetch_(request)).toMatchObject({
    premium: { count: 3, summary: 738 },
    economy: { count: 3, summary: 167 }
  });
});

test('Test 1. Free premium rooms: 7, Free economy rooms: 5;', () => {
  const request = Object.assign(defaultRequest, { economy: 5, premium: 7 });

  expect(_fakeFetch_(request)).toMatchObject({
    premium: { count: 6, summary: 1054 },
    economy: { count: 4, summary: 189 }
  });
});

test('Test 1. Free premium rooms: 2, Free economy rooms: 7;', () => {
  const request = Object.assign(defaultRequest, { economy: 7, premium: 2 });

  expect(_fakeFetch_(request)).toMatchObject({
    premium: { count: 2, summary: 583 },
    economy: { count: 4, summary: 189 }
  });
});
