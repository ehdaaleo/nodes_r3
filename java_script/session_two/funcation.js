function sayHello(){
    console.log("hello");

}
sayHello();


function printName(name){
    console.log(`hello ${name }`);
}
printName("jo");
printName("rh");
// multi  partme
function addNumbers(first, second)
{
    console.log(first+second );
}
addNumbers(5,6);

function  add(a, b ){
    return a+b;
}
let result = add(6,9);
console.log (result );
const mul=(x,y)=>{return x*y};
// arrow functaion 
const add=(a,b)=>{return a+b;};

let name ="rl";
if( true)
{

    let age =22;
}
let numbers =[1,2,34,5];
console.log(numbers[0]);
numbers.push(4);
numbers.pop();
numbers.unshift(1);
numbers.shift();


let students =[" ahemd ", " elyas "," yousef ","mahmoud"];
console.log(students[0]);
console.log(students.length);
students.push("ali"); // add value 
students.pop(); // remove value 
students.unshift("abanob");
students.shift();
 
// push , pop , unshift , shift 


// for loop 
// for  of 
// for ( init ; condation ; inc / dec )
for  ( let i =0; i<students.length;i++)
{
    console.log(students[i]);
}
 // for of   list 
   for ( let num of numbers)
   {
    console.log(num );
   }
for ( let student of students)
{

    console .log(student);
}

// int , while ( condation ) , execution , inc/dec 

let i=0;
while (i<5)
{
    console.log (i);
    i++;
} // print 0 to 4

// object => gruop of information realted together
let mobile ={
    brandName:"oop",
    number :3,
    SDK: 33
}
console.log(mobile.brandName);
mobile.number=3;
mobile.color="red";

let student ={
    name: "elyas ",
    age:22,
    unviersity :"FCI",
    isGraduated:true
}
console.log(student.name );
student.age=23;

student .countery="egypt";
 // array of object 
let persons=[
{
    name: "elyas ",
    age:22,
    unviersity :"FCI",
    isGraduated:true
},
{
    name: "ehdaa ",
    age:22,
    unviersity :"FCI",
    isGraduated:true
},{
    name: "jo ",
    age:22,
    unviersity :"FCI",
    isGraduated:true
}

]
console.log(persons[0].name);

// map , filter, find, foreach , some, every , reduce 

// Destructuing 
 const members={
    name :" ghkj",
    age :33
 };

const name2= members.name;
const age2= members.age;


const {nam, ag }=members;
// spreed operatir 
let numbers1=[1,2,3];
let number3=[...numbers1,46,678,7];
let numbers2=[...numbers1,4,5];