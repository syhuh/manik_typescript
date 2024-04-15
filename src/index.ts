class Person {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const person = new Person("John", "john@gmail.com");
const person2 = new Person("Mark", "mark@gmail.com");

console.log(person);
console.log(person2);

person.greet();
person2.greet();
