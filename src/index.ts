type MyMap = {
  <T, U>(array: T[], callback: (item: T) => U): U[];
};

const map: MyMap = (array, callback) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    result.push(callback(item));
  }

  return result;
};

const numbers = [65, 44, 12, 4];
const newArr = map(numbers, myfunction);
console.log(newArr);

function myfunction(num: number) {
  return num * 10;
}
