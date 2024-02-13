const array = [1,2,3,4,5,6,7];

function inBetween(a, b) {
    return function(x) {
      return a <= x && x <= b;
    };
  }
  
  function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }


function filter(arr, func) {
    return arr.filter(func);
}

alert(filter(array, function(a) {
    return a % 2 == 0;
}));

alert("inBetween: " + filter(array, inBetween(3, 6)));

alert("inArray: " + filter(array, inArray([1,2,10])));