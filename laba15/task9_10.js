const initialArr = [
    {
        id:1,
        values:[-1, 3, 5, 3, 6, 9],
    },
    {
        id:10,
        values:[-1, 2, 4, 3, -16, 7],
    },
    {
        id:12,
        values:[5, -2, 7, -9, 2, 1],
    },
    {
        id:16,
        values:[-3, 3, 5, -6, -9, 9],
    },
    {
        id:21,
        values:[0, 9, 4, -7, 1, 2],
    }
];

const avgValuesArr = []; 

function findAverage(acc, item, index, arr) {
    const sum = acc + item
  
    if (index === arr.length - 1) {     // если мы на последнем элементе
        return sum / arr.length         // вычисляем среднее арифметическое
    }
    return sum
  }

initialArr.forEach((elem) => {
    const avgValue = elem["values"].reduce(findAverage, 0);
    elem["sqrt_avr"] = Math.sqrt(avgValue);
    avgValuesArr.push(elem["sqrt_avr"]);        //задание 10
});


console.log("Результат задания 9: ", initialArr);

console.log("\nРезультат задания 10: ");
avgValuesArr.forEach((elem ,index) => {
    if (Number.isNaN(elem)) {
        console.log(`Элемент со значением NaN находится на позиции ${index}`);
    }
});