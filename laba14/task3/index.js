const str1 = prompt("введите x:", "0");
const x = parseInt(str1);

const str2 = prompt("введите y:", "0");
const y = parseInt(str2);

if (y === 0) {
    alert("На ноль делить нельзя!");
} 
else if (isNaN(x) || isNaN(y)) {
    alert("Можно вводить только числа!");
}
else {
    const plusRes = x + y;
    const minusRes = x - y;
    const multipleRes = x * y;
    const divideRes = x / y;
    alert(`x + y = ${plusRes}\nx - y = ${minusRes}\nx * y = ${multipleRes}\nx / y = ${divideRes}`);
}
