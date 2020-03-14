function showFirstMessage(text) {
    console.log(text);
}
showFirstMessage('Sieg Heil 0/');

// function calcSumm(a, b) {
//     return (a + b);
// }

let calcSumm = function (a, b) {
    return (a + b);
}

// calcSumm = (a, b) => a + b

console.log(calcSumm(5, 50));
console.log(calcSumm(8, 6));

function retVar() {
    let num = 88;
    return (num);
}


let anotherNum = retVar();
console.log(anotherNum);

let str = 'Boom';
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = '12.3';
console.log(Math.round(twelve));