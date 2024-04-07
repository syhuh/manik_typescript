function intro(name: string, age: number, contry?: string): string {
  if (contry) {
    return `My name is ${name} and age is ${age} I live in ${contry}.`;
  }
  return `My name is ${name} and age is ${age}.`;
}

console.log(intro("John", 32));
console.log(intro("John", 32, "Canada"));
