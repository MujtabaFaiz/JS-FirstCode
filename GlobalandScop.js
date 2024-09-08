/*
var a = 10;//inore this 

if(true)
{
  var a = 10
  const b = 30
  let c = 40

}
//console.log(a)//can accesss a value out if block
//console.log(b)//can not accesss a value out if block
console.log(c)//can not accesss a value out if block
*/
//==========================02==================================
//nested function
/*
function one()
{
    const username = "Mohd"
    function  Tow()
    {
        const username1 = "Mujtaba"
        console.log(`Print username ${username1}`)
    }
   // console.log(username1); error while run
    //Tow();
}
//one();
if(true)
{
   const username = "Mujtaba "
  if(username == "Mujtaba ") 
  {
    const website = "Youtube";
     //console.log(username + website);
  }
  //console.log(website);  Error
} 
//console.log(username);error

function addnum(num)
{
    return num + 1;
}
//addnum(20)

//addTwo(2) error
const addTwo = function(num1)
{
  return num1;
}

*/

//===================Arrow function=======================

//this  .. use for current contaxt
/*
const userobj = {
    username : "Mujtaba",
    price : 120,
    welocome : function()
    {
        console.log(`UserName = ${this.username}`)
    }
    
}
// console.log(userobj.welocome())
// this.username = "Sam"
// userobj.welocome();

//console.log(this) // retunn Empty object

function One()
{
    console.log(this);
}
//One()

const Tow = function()
{
    const website = "Youtube";
    console.log(this.website);  // this is undefined
}
//Tow()

const Towone = ()=>  // Arrow Function
{
    const website = "Youtube";
    console.log(this.website);  // this is undefined
}

Towone()

// const Addtow = (num1,numb2)=>  // Arrow Function
// {
//      return num1 + numb2;
// }
//const Addnumber = (num1,numb2)=>(num1+numb2)  
//const Addnumber = (num1,numb2)=> num1+numb2 \
//const Addnumber = (num1,numb2)=> {name : "Abcsd" }  // can not return like this 
const Addnumber = (num1,numb2)=> ({nname : "Abcsd" }) //can return object
console.log(Addnumber(3,6)) 
*/

//============================Immediatly invoke function ==================
// iffiy  use for the Global Scop polution thats why use iffy

function Myfun() // can not Invoke this Immediatly use iffy
{
    //console.log("HEllo IFFY")
}
//Myfun()

// (function Myfun()  // this is iffy required semicolon otherwise facin error
// {
//     console.log("HEllo IFFY")
// })();


( () =>  // unnamed iffy
{
    //console.log("HEllo IFFY")
})();


( (name) =>  // named ifffy
{
    //console.log("HEllo IFFY "+ name )
})("MD");


//================================Execution contesxt ==================================
/*
javascript run in two face 
1 memory creation phase
2 Execution phase
*/
//=====code Execution ================
/*
1  Global exccution
    this
2 Memory Phase
    value1....
    addnumber(function) - Defination
    result - undefined

Execution Phase 
1 value1....
2 addnumber  - start Execution[new varibale, condition + execution thread ]
3 then memory phase
then start Execution Cpontrol


*/

