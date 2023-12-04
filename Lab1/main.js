// (a) Write an arrow function that returns "Data Representation & Querying"
const x = () => {
  return "Data Representation & Querying";
};
console.log(x());

// (b) Extend this arrow function to take an argument and return the passed variable
const y = (mystring) => {
  return mystring;
};
console.log(y("Hello World"));

// (c) Write an arrow function that takes two numbers and returns their sum
const c = (a, b) => {
  return a + b;
};
console.log(c(2, 3));

// (d) Function to multiply each number under 70 by 2 in the 'ages' array
const ages = [25, 31, 42, 77];
const d = ages.map((item) => {
  if (item < 70) return item * 2;
  else return item;
});
console.log(d);
