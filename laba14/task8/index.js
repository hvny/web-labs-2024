const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffleNumbers() {
  return Math.random() - 0.5;
}

console.log("Перемешанный массив: ", array.sort(shuffleNumbers));