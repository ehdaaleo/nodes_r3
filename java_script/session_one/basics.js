function sayHello(){
    alert ("hello");
 }
 /*
 console.log("hello with tech mastery ");
 console.log(10);
 console.log(5+3);
 

 // single line 

 let age = 22;
 age =23;
 console.log(age);
 const name =" elyas";
 name = " ehdaa";
 console.log(name);


 // let => string , boolean , int  . undefind, null 
 let  num =null  ;
 console.log.log(num);

 // typeof =>
    let firstName="ehdaa";
 console.log(typeof firstName);
 // opertors => arthimtc  (+, -,/, *, %, ++ ,--)
 let result = 10+5;
 console.log( result );
 let age = 22;
 age ++;
 console.log(age);
 // assignment opertors  => 
    let score =10;
    score +=5;    //score =score+5;
 score -=5;
  score /=5;
   score *=5;
   // Comparion > ,< , + , <=,>=
 */
 // == vs ===
 let num =5;
 let name ="5";

  console.log ( num === name );
  // Logical operators =? && , ||, !=
  let age =22;
  let hasID=true;
  console.log(age>=18 && hasID);
  let firstName="ehdaa";
  let lastName ="salah ";
  let fullName = firstName+" "+lastName;
  console.log( fullName);

  /// way more clean to use it => template literals 
  console.log(`my name is ${firstName} and i am ${age} years old   `);



  // condation statement 
  // condation => شرط معين  لو شرط تحقق =< ه
  // if ( condation ) { true => code will be excute  }
  if(age<=18) 
  {
    console.log(" child  ");

  }
    else 
  {
    console.log(" aduilt ");
  }

  let garde =86;
  if( garde >=90)
  {
    console.log("execellent ");

  }
  else if ( grade >=80)
  {    console.log("very good ");

  }
 else if ( grade >=70)
  {    console.log(" good ");

  }
   else if ( grade >=60)
  {    console.log("D ");

  }
  else 
  {
     console.log("f ");
  }

  // nested condation 

  if ( age >=18)
  {
    if ( hasID)
    {
        console.log("allowed ");

    }
  }

  // switch  => one exepersion 
  let day =" monday";
  switch ( day){
    case "monday":
        console.log(" start to week ");
        break;
        case "friday":
            console.log("weekend");
        break;
        default:
                  console.log("weekend");
                  break;    
  }
