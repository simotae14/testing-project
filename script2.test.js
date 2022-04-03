const fetch = require('node-fetch');

const {
  getPeople,
  getPeoplePromise,
} = require('./script2');

// use the async/await function
it('calls swapi to get people', () => {
  getPeople(fetch).then(({ count }) => {
    expect(count).toEqual(82);
  });
});

// use the Promise
it('calls swapi to get people with a promise', () => {
  getPeoplePromise(fetch).then(({ count }) => {
    expect(count).toEqual(82);
  });
});
