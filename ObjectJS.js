//========================================01================================
/*
//singleton -- singleton made with constructor 

//Object literals 
const Mysym = Symbol("Mykey")
const  JsUser ={
     name:"Mujtaba",
     age:"25",
     [Mysym]:"Mykey1",
     "str name":"string",
     email:"mujtaba@gmail.com",
     Weekday :["saturday","Sunday"],
     islogin:true

} 

console.log(JsUser);
console.log(JsUser.email)
console.log(JsUser["name"])
console.log(typeof JsUser.Mysym) //use Symbole this way
console.log(JsUser["str name"])//can not access str name using dot

JsUser.name ="Mohd Mujtaba";
//Object.freeze(JsUser) // after freeze you can not assign to object 
//JsUser.name ="Mohd";
console.log(JsUser)


JsUser.greeting = function()  
{
    console.log(`Hello  , ${JsUser.name}`);
}
console.log(JsUser.greeting())
*/

//=======================================02======================================

//Object sinletone
//Can add multiple object inside the object
/*
const sinletonObj = new Object();
const noneSinletonobj = {} //none sinletone Object

noneSinletonobj.name ="Mujtaba"
noneSinletonobj.Address ="Ambedkernaer"
noneSinletonobj.ae ="Mujtaba"

//console.log(noneSinletonobj)

// Combine object

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = {obj1,obj2}

const objassin = Object.assign({},obj1,obj2)

const objspred = {...obj1,...obj2}
console.log(objspred)
const  JsUser ={
    name:"Mujtaba",
    age:"25",
   
    "str name":"string",
    email:"mujtaba@gmail.com",
    Weekday :["saturday","Sunday"],
    islogin:true

} 
console.log(Object.keys(JsUser))
console.log(Object.values(JsUser))
console.log(Object.entries(JsUser))

*/
//===============================03==============================

const course = {
    name:"Mujtaba",
    coursename:"BSCIT"
}
//console.log(course.name);
//how to destructure to object 
//const {coursename} = course // destructure  
const {coursename1 : coursename} = course 
console.log(coursename);