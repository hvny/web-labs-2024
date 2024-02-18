const initialArr = [1, 0, 10, 7, 8, 4, 15, 2, 5];

function filterByRange(arr, a, b) {
  return arr.filter(elem => a <= elem && elem <= b);
}

function filterByRange2(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

console.log(`Исходный массив ${initialArr}\n`);
console.log("Функция filterByRange: ", filterByRange(initialArr, 1, 5));

filterByRange2(initialArr, 1, 5)
console.log("Функция filterByRange2: ", initialArr);