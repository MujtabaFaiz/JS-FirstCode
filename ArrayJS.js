// array  is object its keep the multiple vlaue in single variable
//we can use array myarr[0];


const myarr = [1,2,3,4,5,6]

const myarr1 = ["SA","ABV"]

const myarr2 = new Array(1,2,3,4)
console.log(myarr2[2]);

//--------------Methods

myarr.push("AD");
myarr.pop()// remove last array value
myarr.unshift()// add vlaues before all value
myarr.shift()//
myarr.includes(4)//its return true or false
myarr.indexOf(2)

//const newarr = myarr.join();
//console.log(myarr);
//console.log(myarr);

const mysclice = myarr.slice(1,3);
//console.log("B ", mysclice);

const musplice = myarr.splice(1, 3);
//console.log(myarr); splice is manupulate is work 
//console.log("C " ,musplice); 

//==================================array2===================

const mystrarr = ["AC","BG"]
const mystrarr1 = ["AS","MS","KS"]
//mystrarr1.push(mystrarr);
//console.log(mystrarr1);

//console.log(mystrarr1[3][0])// find value from second array


//const allarr = mystrarr.concat(mystrarr1);
//console.log(allarr); //[ 'AC', 'BG', 'AS', 'MS', 'KS' ]

//const SpredBestCode = [...mystrarr, ...mystrarr1] // can add multiple array
//console.log(SpredBestCode);[ 'AC', 'BG', 'AS', 'MS', 'KS' ]

//const otherarray = [1,2,[4,5],[3,5,6,7,8]];
//const realarr = otherarray.flat(Infinity)
//console.log(realarr);[  1, 2, 4, 5, 3,  5, 6, 7, 8]

console.log("Mujtaba");
console.log(Array.from("Mujtaba"));
var Objarray = Array.from({name:"ABCED"})
console.log(Objarray);

let num1 = 100;
let num2 = 200;
let num3 = 300;

console.log(Array.of(num1,num2,num3))


var multiarray = [  1, 2, 4, 5, 3,  [5,[100,200], 6], 7, 8]
console.log(multiarray.flat(Infinity));