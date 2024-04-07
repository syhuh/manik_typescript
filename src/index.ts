enum AgeUnit {
  years = "years",
  months = "months",
}

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  contry: string;
};

const person: Person = {
  name: "Scott",
  age: 30.5,
  ageUnit: AgeUnit.years,
  contry: "USA",
};

function convertAgeToMonths(person: Person): Person {
  person.age = person.age * 12;
  person.ageUnit = AgeUnit.months;
  return person;
}

console.log(convertAgeToMonths(person));
