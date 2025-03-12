let myArr = [123,12,321,323,213,2,13,235];

let min = myArr[0];

for(let i = 1; i <= myArr.length; i++) {
    if(myArr[i] < min) min = myArr[i];
}

console.log("Array: ", myArr);
console.log("Min element: ", min);