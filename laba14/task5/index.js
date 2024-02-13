const users = [{
    name: "Вася",
    surname: "Иванов",
    age: 20,
}, 
{
    name: "Петя",
    surname: "Чапаев",
    age: 25,
},
{
    name: "Маша",
    surname: "Медведева",
    age: 18,
}];


function sortByField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

console.log(users.sort(sortByField('age')));

