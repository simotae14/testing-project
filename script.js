const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavouritecats.com',
  'myfavouritecats2.com',
];
// basic google search algorhitm
const googleSearch = searchInput => {
  const matches = googleDatabase.filter(website => {
    return website.includes(searchInput)
  });
  // return just the first 3 results
  return matches.length > 3 ? matches.slice(0,3) : matches;
}
console.log(googleSearch('cat'));
