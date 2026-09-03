doucment .querySelector ("h1").textContnt="dftghj";
const title = document.getElementById("title");
title.textContent="welcome!";
products
console.log("start");
setTimeout(()=>{
    console.log("vhj");
},
2000);
conole.log("end");


function first(){
second();

}
function second(){

    console.log("ghj");

}
first();


const form = document.getElementById("loginForm");
form.addEventListener("submit", function ( event ){
    event.preventDefault();
    conole.log("form submit ");
});

  // error handling 
  // try and catch 

  try {
    // code which i want it to be  execute 

  } catch(error )
  {
    console.log("");

  }

  //JSON.parse , JSON.Stringfiy ()

  // API (  GET , PUT ,Delete ,PATCH )
  fetch ("BAse URL ");
  fetch ("https://dummyjson.com/");
  // async , awit 
   const baseurl ="https://dummyjson.com/";
  async function getProuduct (){
     const response = await  fetch ("https://dummyjson.com/products");
     const data = await response.json();
     console.log(data );
  }

  // api request => server responed=> continue process
