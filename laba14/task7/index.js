const array = ["test", 2, 1.5, false];

function find(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(find(array, "test"));
console.log(find(array, 2));
console.log(find(array, 1.5));
console.log(find(array, 0));