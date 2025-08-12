// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(bornIn1500s);

// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// 3. Sort the inventors by birthdate, oldest to youngest
const orderedByBirth = inventors.sort((a, b) => a.year - b.year);
console.table(orderedByBirth);

// 4. How many years did all the inventors live all together?
const totalYearsLived = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYearsLived);

// 5. Sort the inventors by years lived
const orderedByYearsLived = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return nextGuy - lastGuy; // descending order
});
console.table(orderedByYearsLived);

// 6. Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast.localeCompare(bLast);
});
console.log(alpha);
