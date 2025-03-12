let len = 0;
let i = 0;

let myArr = [123,12,321,323,213,2,13,235,6,7,7,5,4,7,3];

//with while loop
// while(myArr[i]) {
//     len++;
//     i++;
// }

// console.log(len)



// with for-in loop
for(let i in myArr) {
    len++;
}

console.log(len)