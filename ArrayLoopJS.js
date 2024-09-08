//=============================for Of Loop=========================
// const arr = [1, 2,3,4,5,6,7]
// for (const num of arr) {
//     console.log(num)
// }

// const str = "Mujtaba MD"
// for (const chr of str) {
//     //console.log(chr)
// }
//======================Map====================
/*
const map = new Map(); //map use for unique vlaue its not keep duplicate value
//map is not itrable
map.set('IN',"India")
map.set('PT',"Pakistan")
map.set('BD',"Banladesh")

// for (const [key,value] of map) {  //use as key vlaue pair
//     console.log(key, " : " , value);
// }

const course = {
    name:"Mujtaba",
    coursename:"BSCIT"
}
for (const key in course) {
    
}
const data =[1,2,3,4,5,6]

// data.forEach( function(val){
//    console.log(val)
// })

// data.forEach( (val) =>{
//     console.log(val)
//  })
*/

//===============================filter Map And Reduce=========================

// const snfi = ["as","ab","we","are"]

// snfi.forEach(function (val){
//     console.log(val)
// })


const number = [1,2,3,4,5,6,7,8]

// const newnum = number.filter((num)=>{
//       return num>4
// })
// const newnum =[];
// number.forEach((num)=>{
//     if(num>4)
//     {
//        newnum.push(num)

//     }
// })
// console.log(newnum)

const bookdetail = [
    {book:"History", Year : 2000},
    {book:"Math", Year : 2000},
    {book:"Scince", Year : 2000},
    {book:"History", Year : 2000}
]

//const book = bookdetail.filter((bk)=>bk.book==='History')
const book = bookdetail.filter((bk)=>{ 
    if(bk.book ==='History'){
       return bk;
    }
})
const number1 = [1,2,3,4,5,6,87]
const newnum = number1.map((num)=>num*2).map((num)=>num+1)
console.log(newnum)
//filter
//Map 
//Reduce  ...  

const mynum = [1,2,3]
// const myotal = mynum.reduce(function(acc,currbal)
// {
//     return acc + currbal
// },0)

const myotal = mynum.reduce((acc,currbal)=>acc+currbal,2)
console.log(myotal)

const course  = [
    {
        itemname:"Js Course",
    price:990
    },
    {
        itemname:"C# Course",
    price:990
    },
    {
        itemname:"Java Course",
    price:990
    },
     {
        itemname:"Python Course",
    price:2000
    }
]

// total Price
//const totalprice = course.reduce((acc , item)=>acc+item.price,0)

const totalprice = course.reduce((acc , item)=>{
    return acc+item.price
},0)
console.log(totalprice)