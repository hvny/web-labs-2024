const userColor = prompt("Введите цвет");

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
let isColorInArr = false;

initialArr.forEach((elem) => {
    for (const color of Object.values(elem["home"])) {       
        if (color == userColor) {   
            initialArr.splice(initialArr.indexOf(elem), 1);
            isColorInArr = true;
        }
    }
});
if (isColorInArr == false) {
    alert("Такого объекта нет в массиве");
}
else {
    console.log(initialArr);
}