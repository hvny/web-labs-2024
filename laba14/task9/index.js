const array = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr) {
  const seen = new Set();
  return arr.filter(word => {
    const lowerCaseWord = word.toLowerCase();
    const sortedWord = lowerCaseWord.split('').sort().join('');
    if (!seen.has(sortedWord)) {
      seen.add(sortedWord);
      return true;
    }
    return false;
  });
}

console.log("Исходный массив: ", array);
console.log("Результат: ", aclean(array));