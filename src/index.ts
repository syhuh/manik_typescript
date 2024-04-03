let number: readonly number[] = [1, 2, 3];

number.push(4);

type ReadOnlyPerson = readonly [string, string, number];

let person: ReadOnlyPerson = ["John", "Doe", 30];

type a = Readonly<string[]>;
type b = Readonly<[string, string, number]>;

let x: a = ["John", "Doe", 30];
let y: b = ["Smith", "Lee", 40];
