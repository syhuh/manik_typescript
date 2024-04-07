// enum AgeUnit {
//   years = "years",
//   months = "months",
// }

// type greetingFunction = (greeting: string) => string;

// type Person = {
//   name: string;
//   age: number;
//   ageUnit: AgeUnit;
//   contry: string;
//   greeting: greetingFunction;
// };

// const person: Person = {
//   name: "Scott",
//   age: 30.5,
//   ageUnit: AgeUnit.years,
//   contry: "USA",
//   greeting: (greeting) => {
//     return `${greeting} ${person.name}`;
//   },
// };

// function convertAgeToMonths(person: Person): Person {
//   person.age = person.age * 12;
//   person.ageUnit = AgeUnit.months;
//   return person;
// }

// console.log(person.greeting("Good morning, "));
