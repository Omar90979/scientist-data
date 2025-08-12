// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.log("Inventors born in the 1500s:");
console.table(fifteen);

// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log("Inventors full names:");
console.log(fullNames);

// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => a.year - b.year);
console.log("Inventors sorted by birth year (oldest to youngest):");
console.table(ordered);

// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log("Total years lived by all inventors:", totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});
console.log("Inventors sorted by years lived (longest first):");
console.table(oldest);

// 6. Sort the people alphabetically by last name
const alpha = people.sort((a, b) => {
  const [aLast, aFirst] = a.split(", ");
  const [bLast, bFirst] = b.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.log("People sorted alphabetically by last name:");
console.log(alpha);
