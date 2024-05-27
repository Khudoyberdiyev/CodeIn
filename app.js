// let firstname = ["John", "Smith", "Bob", "Mike", "Nancy", "Alex", "Nicole", "John"];
// firstname[6]= "Ra`no"
// console.log(firstname);
// console.log(firstname[firstname.length-1]);

// let weekDay =prompt("Kun kiriting:");

// if (weekDay == "Monday") {

//   alert("Dushanba");
// } else if (weekDay == "Sunday") {
//   alert("Seshanba");
// } else if (weekDay == "Wednesday") {
//   alert("Chorshanba");
// } else{
//     alert("Hafta Kunini kiriting: ");
// }


let fullname = ["John", "Smith", "Bob", "Mike", "Nancy", "sheila"];

let arr = [2, 34, 5, 656];


let n1 = Math.PI;
//  3.14;
let n2 = +(151.54564).toFixed(2);
// Nuqatadan keyin nechta son olib qolishni yaxlitlashni  bidiradi
let n3 = Math.floor(5.651);
// Asosni olib qoladi Integer son
let n4 = Math.ceil(4.444444444444444);
// Faqat tepaga yaxlitlash
let n5 = Math.sqrt(256);
// Ildiz osti
let n6 = Math.pow(2, 6);
// daraja
let n7 = Math.round(34.56);
// Yaxlitlash
let n8 = Math.abs(-6);
// Modul faqat positive raqam
let n9 = Math.max(2, 4, 6, 7);
// Eng kattsi
let n10 = Math.min(...arr);
//  Eng kichigi
let n11 = Math.floor(Math.random() * 10);
// Tasodifiy raqamlar
let n12 = parseInt(34.45453)
// Integer son olib beradi
let n13 = parseFloat(0.32242)


// Function declaration

let a = +prompt("Enter number: ");
let b = +prompt("Enter number: ");

function calCulateSum (x, y) {    //parameter
    let result = x + y;
    return result;
}
let outPut = calCulateSum(a,b) //argument

console.log(outPut);

// Expression Function

import React from 'react'

export const app = () => {
  return (
    <div>app</div>
  )
}


const app = () => {
  return (
    <div>app</div>
  )
}

export default app