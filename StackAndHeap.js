/*
memory are two type stack and Heap

stack(Primitive) Heap(Non - Prirmitive type)

let stackmem = "stack memory ";
let anothername = stackmem;
anothername = "Copy of Stack mem"

console.log(stackmem);
console.log(anothername);

//=============Heap===============
let user1 = {
    name:"Mujtaba",
    age:23    
}

let user2 = user1;
user2.age = 30;
console.log(user1.age);
console.log(user2.age);

*/
//==================string in javascript ====================
/*
//Write all the method of string
const Name = "Mujtaba";
const email = "Mujtaba@gami.com";

//console.log(Name + email)

console.log(`Hello ${Name.toUpperCase()} and my email ${email}`)

const Newname  = new String('Javacriptcode')
console.log(Newname[0]);
console.log(Newname.slice(-5,3));
console.log(Newname.charAt(2));
*/

//=============================Number and maths ====================
/*
const number = 100;
console.log(number);

const balance = new Number(200)
console.log(balance);

console.log(balance.toString().length);

const number1  = 10000000; 
console.log(number1.toLocaleString());

//=====================maths

console.log(Math);
console.log(Math.round(4.7));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
console.log((Math.random()*10 )+1); //allways 0 and 1

*/

//=================================Date and time ======================
/*
let mydate = new Date();
//let mydate = new Date(2023,9,23);
//let mydate = new Date("2023-01-01");
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toDateString());
console.log(typeof mydate);

let Todaydate = new Date.now();
*/