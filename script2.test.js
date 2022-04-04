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

it('getPeople returns count and results', () => {
  const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
      json: () => Promise.resolve({
        count: 89,
        results: [0,1,2,3,4,5],
      })
    }));
  expect.assertions(5);
  return getPeoplePromise(mockFetch).then(({ count, results }) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
    expect(count).toEqual(89);
    expect(results.length).toBeGreaterThan(5);
    expect(mockFetch).toMatchSnapshot();
  });
});
