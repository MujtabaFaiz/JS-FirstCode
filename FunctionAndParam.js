//=============================01===================
/*
function SayMyname()
{
    console.log("Hello Function")
}

//console.log(SayMyname())

// function SayMyNumber(num1 , num2)
// {
//     console.log("Hello Function number " + (num1 +num2))
// } // this return undefined 
function SayMyNumber(num1 , num2)
{
    return (num1 +num2)

}
const result = SayMyNumber(3,5);
//console.log(result)

function myname(username)
{
    if(!username){
        console.log("Please Enter User name")
        return;
    }
    return `this is ${username}`
}
console.log(myname("Mujtaba"))
*/
//=============================02====================
//want to add more than one parametor we can use rest operator

function RestOperator(...number)
{
  return number;
}
//console.log(RestOperator(20,30,50))

const userobj = {
    Name :"Mujtaba",
    Price : 100
}

function HanldeObj(obje)
{
    console.log(`UserName is ${obje.Name} ${obje.Price}`)
}
console.log(HanldeObj(userobj))