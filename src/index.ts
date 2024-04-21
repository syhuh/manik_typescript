class Person {
  constructor(
    private _name: string,
    private _age: number,
  ) {}

  public set name(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public set age(age: number) {
    if (age < 0 || age > 200) {
      throw new Error("Age must be between 0 and 200");
    }
    this._age = age;
  }

  public get age() {
    if (this._age === undefined) {
      throw new Error("The age property has not been set as yet");
    }

    return this._age;
  }
}

const person: Person = new Person("John", 220);
person.age = 70;

console.log(person.age);
console.log(person.name);
