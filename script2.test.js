const fetch = require('node-fetch');

const {
  getPeople,
  getPeoplePromise,
} = require('./script2');

// use the async/await function
it('calls swapi to get people', () => {
  expect.assertions(1);
  return getPeople(fetch).then(({ count }) => {
    expect(count).toEqual(82);
  });
});

// use the Promise
it('calls swapi to get people with a promise', () => {
  expect.assertions(2);
  return getPeoplePromise(fetch).then(({ count, results }) => {
    expect(count).toEqual(82);
    expect(results.length).toBeGreaterThan(5);
  });
});
