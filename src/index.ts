class Person {
  constructor(
    protected name: string,
    public age: number,
  ) {}

  public getName() {
    return this.name;
  }
}

class Admin extends Person {
  public returnName() {
    return this.name;
  }
}

let person: Person = new Person("John", 32);
const admin: Admin = new Admin("Mark", 42);

console.log(person);
console.log(admin);
