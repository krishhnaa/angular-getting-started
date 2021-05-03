"use strict";
let fname;
fname = '10';
console.log(fname.length);
let age;
age = 10;
let result = parseInt(fname);
console.log('result', result);
let isHidden = false;
console.log(isHidden);
// let employee;
// employee = 10;
// employee = 10;
// employee = ['a'];
//arrays
let employee;
let employee1;
employee = ['k', 'r', 'a', 'g'];
let result1 = employee.find((emp) => emp === 'k');
let res = employee.filter((emp) => emp === 'r');
let testEmp = employee.filter((emp) => emp.includes('k'));
console.log(result1);
let numbers;
numbers = [2, 4, 8];
numbers.push(6);
numbers = [...numbers, 6];
numbers = [6, ...numbers];
let numberoutput = numbers.map((num) => num * 2).filter((num) => num > 4).reduce((a, b) => a + b); //[8,16]
console.table(numberoutput);
let numberSum = numbers.reduce((a, b) => a + b); // 16
for (let emp of employee) {
    console.log(emp);
}
//Array destructuring
let [emp1, emp2, ...restEmp] = employee;
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let color = Color.blue;
