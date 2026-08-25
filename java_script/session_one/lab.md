 Lab Assignments 

Please do these assignments (Use strict mode in all assignments): 

On your page, show alert for the user that say “Welcome to my site”, then show him prompt ask him to enter his name and write to the page  “ welcome + his name”. (Remark what happen to the home page after writing welcome page). 
Make a function in external JS file, that takes 2 parameters and return sum of them (function return the result, don't alert or print inside it), and make a button that when clicked; asks the user to enter 2 numbers (prompt), call the sum function, and display the result returned by the function in the console. 
Make a function that takes today’s temperature as a parameter, prints: “HOT” if the entered temperature are more than or equals 30 and “Cold” if it’s less than 30 (use ternary conditional operator). 
Change the previous function to take 2 parameters: Temperature and Actual feel temperature to have 3 cases: 
Prints normal if both of temperature and actualFeel between 25 and 30. 
Prints Cold if both of temperature and actualFeel less than 25. 
Prints Hot if both of temperature and actualFeel higher than 30. 
Prints “Ambiguous, can’t detect”, in any different case. 
Can you use ternary conditional operator in previous example? Why? 
Can you use switch case in previous example? Why? 

Make a function that takes Student faculty as a parameter, checks: 
If the entered faculty: FCI, show message: “You’re eligible to Programing tracks”. 
If the entered faculty: Engineering, show message: “You’re eligible to Network and Embedded tracks”. 
If the entered faculty: Commerce, show message: “You’re eligible to ERP and Social media tracks”. 
For any other faculty, show message: “You’re eligible to SW fundamentals track”. 
(Use switch(). And why it’s better in that case?). 

Write a function that takes 2 parameters: start and end number and print odd numbers between the given 2 numbers. 
Make a buttons on a page when user clicks it, ask him to enter math expression (Ex. 3+4*5/10*8), and then pass this expression (user input) to a function that take one parameter and execute this expression and then show the result of this expression for the user in an alert in that format: (You entered: 3+4*5, and the result is: 23).  
On contact page prompt user to enter his name, make sure that name is string, and let the user enter his birth year and make sure that it is a number, and it is less than 2010, and then calculate his age. For each prompt if user input valid show him next prompt, if not valid show him the same prompt again until user enters it correctly (use loops). And after validating user input, write all user input on the page in that format: 
Name: ahmed 

Birth year: 1981 

Age: 30 

Try debuggers in the browser and log some debugging messages to the console log. 
Try lecture example on: Hoisting, let, const. 
 
Review and test the following: 

Try this code using strict mode and without strict mode, what’s the difference? And why? 
function foo() { 
    var x; 
    x = 5; 
    y = 6;    return x + y; 
} 
Console.log(foo()); 
Will this code work with strict mode? Explain why? 
var y;	 
y=10;  
x = 5;  
console.log(x);  
console.log(y);  
var x;  
What’s the value of y variable in the following code? And why? 
var x = 5;  
console.log(x);  
console.log(y);  
var y = 7;  
What are the expected errors (2 errors or undefined output) from the following code? And why? What’s the difference between var & let? 
function test(){ 
for (let i = 0; i < 10; i++) { 
  		alert(i); 
alert (x); 
let x=10; 
} 
console.log(i); 
} 
----------------------------------------------------------------------------------------------------------------------------------------------------------------- 
Bonus Assignments: 

Make function that write “welcome to my page” 6 times using h1 to h6 header sizes using one line (document.write)  javascript code “see attached image” . (Use for loop, and don’t use h1 to h6 explicitly). 
 
Write the previous output (Q.4) on a table and create the table on runtime, like this:  
Name 
Ahmed 
Birth year 
1981 
Age 
30 
Work on the mentioned self-study topics on the lecture slides: 
What’s XSS (cross-site scripting)? 
What are new features in ES6, with demo? 
What’s TypeScript? And what are its new features? 
Design a list of skills like the following, and when click (X) of each one it should closed. 
Image result for upwork add skills 

=================================================================== 
<Script>document.write(“Thank YOU”) </Script> 