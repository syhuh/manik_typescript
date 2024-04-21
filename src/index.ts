class Person {
  private testUsersAge(age: number) {
    if (age < 0 || age > 200) {
      throw new Error("Age must be between 0 and 200");
    }
    return age;
  }

  constructor(
    private _name: string,
    private _age: number,
  ) {
    this.testUsersAge(_age);
    this._age = _age;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public set age(age: number) {
    this.testUsersAge(age);
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
console.log(person);
console.log(person.age);
console.log(person.name);
