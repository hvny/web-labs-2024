const initialArr = [
    {
        "name": "Alex", 
        "age": 30, 
        "from": "Moscow"
    },
    {
        "name": "Sofa", 
        "age": 22, 
        "from": "Kazan"
    },
    {
        "name": "Ilya", 
        "age": 26, 
        "from": "Piter"
    },
    {
        "name": "Kolya", 
        "age": 30, 
        "from": "Kirov"
    }
]

function averageAge() {
    let avgAge = 0;
    initialArr.forEach((elem) => {
        avgAge += elem["age"];
    });

    return avgAge / initialArr.length;
}

console.log(`Среднее значение поля age: ${averageAge()}`);