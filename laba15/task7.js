const initialArr = [
    {
        name: "Alice",
        code: 5005,
        home: {roof:"yellow", door:"yellow", wall:"yellow"}
    },
    {
        name: "Bob",
        code: 5105,
        home: {roof:"green", door:"grey", wall:"grey"}
    },
    {
        name: "Carol",
        code: 5015,
        home: {roof:"yellow", door:"white", wall:"yellow"}
    },
    {
        name: "Dave",
        code: 5115,
        home: {roof:"pink", door:"red", wall:"yellow"}
    }
];

const resultArr = [];

function hasDuplicateColors(str) {
    const colors = new Set();           //набор с уникальными значениями
    for (const color of Object.values(str)) {       //перебираем значения в объекте
        if (colors.has(color)) {        //если значение есть в коллекции, возвращаем true
            return true;
        }
        colors.add(color);              //добавляем цвет в коллекцию
    }
    return false;
}

initialArr.forEach((elem) => {
    if (hasDuplicateColors(elem["home"])) {
        resultArr.push(elem["code"]);
    }
});
    

console.log(resultArr);