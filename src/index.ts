function intro(name: string, age: number): string {
  return `My name is ${name} and age is ${age}.`;
}

const intro2 = function (name: string, age: number): string {
  return `My name is ${name} and age is ${age}.`;
};

const intro3 = (name: string, age: number): string => {
  return `My name is ${name} and age is ${age}.`;
};
