console.log("Hello Variable")

// prefer not use var Becouse of issue in block scop and function scop

/*
"Use strict" // treat all js code as new version 
alert("hello") we are usiing js not browser yhis work in browser alert("hello") 
*/

// 1. ecma this web site use for javascript code 

//===================================
/*
"33" =  33
"33abc" = NaN
true => 1; false = 0

let score = 33
let score = "123"
console.log(typeof score);
console.log(typeof(score));

let valuenumber = Number(score);
console.log(typeof valuenumber);

let isbool = 2;
let boolvalue = Boolean(isbool);
console.log(n=boolvalue);
*/
//======================Operation=====================
/*
let number = 3
let negvlaue = -number;
console.log(negvlaue);

let str1 = "Mohd";
let str2  = " Mujtaba"
console.log(str1 + str2);

console.log("1"+2);
console.log(2+"2"+1);
console.log(3+3+"2");
console.log("1"+2 + 5);

*/
//===============================Comparision of data  type==========================
/*
console.log(1>2);
console.log(1>=2);
console.log(1<2);
console.log(1==2);
console.log(1!=2);
*/
                       //--------------------------
//console.log("2">1);  // check the data type while Comparision
//console.log("2"<1);

//=== stric check this check value with datatype 

//console.log("2"===1);

//=================================Data type=======================
/*
Primative 

7 Type : string , number, boolean, null , undefibed, Symbole, bigint

Reference (Non Primitive) 

arrya , Object, function 

Q1. javascript is Dynamic Type or static Type 

const score = 100
const scorvalue = 100.0
const islogin = false
const outtemp = null
let username;

const id  = Symbol('123') //  both are nopt equal
const anotherid = Symbol('123')
 console.log(id=== anotherid);

*/

// reference (Non Primitive)

//array 

const heros = ["SRK","Nagraj","SLA"];

//Object 

let Myobj = {
    name:"Mujtaba",
    age:25
}

// function as variable can use

var myfun = function(){ // this called object function
    console.log("Hello function");
}

//https://262.ecma-international.org