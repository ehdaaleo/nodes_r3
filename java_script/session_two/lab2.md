

Please do the following assignments: 

Create array that contain some tips about JavaScript (Array of 10 strings, each string is tip about JS), and show random tip for the user each time he opens the page "Tip of the day".  
Make a button that display the current date and time in local format on the page. 
Ask the user to enter his Email, and use function strings (Don’t use RegExp) to check if the Email contains @, and not in the first or last index. 
 
Use the same full name regular expression with input (Use pattern attribute, without using JavaScript code). 
Create an array that hold the following students grades : 60, 100,10,15,85, and handle the following: 
Sort the array numerically descending. 
Using the sorted Array find the highest student degree (first degree less than or equal to 100) [Use find()]. 
Print the grades of all students with grades below 60 [Use filter()]. 
Create an array of objects that hold student name along with his degree (Each element of the array is an object has 2 properties: Name and Degree). 
Find student Name, who got degree between 90 and 100 [Use find()]. 
Print students names, who got a degree less than 60 [Use filter()]. 
Add a new student to the array [Use push()], and then use for…in to print all elements of the array. 
Remove the last student of the array [Use pop()], and then use for…of to print all elements of the array. 
Sort the array alphabetically based on the student name.  
Use splice() function to add 2 new students after the second element of the array [Bonus]. 
Use splice() function to remove 1 student after the third element in the array [Bonus]. 
Show prompt that ask user to enter his birth date and tell user to enter the date in the following format (DD – MM – YYYY) ex. 22–01–1999, and then create function that take user input as a parameter and ensure that the string is entered in this format (that user entered string is 10 characters and contains (-) after the second character and after fifth character).[Don't use RegExp, use string functions]. 
If the user input was correct: make the function create new date object, and initialize it with Day, Month, year values (using date constructor: Date(y,m,d)) and then show alert to the user with the date in date string format.  
If user input wasn't correct, show alert saying "Wong Date Format".  
Create button “show date” that calls the function.  
Use Try catch and onError to handle any errors in your page. 
 

Bonus assignments:  

Make a function that takes date string as a parameter, and returns the Day name (Saturday, Sunday,…) of the given date. 
In assignment No.5, ask the user to enter his mobile number in International format for the Egypt Code (00201xxxxxxxxx) format use regular expression to validate Mobile no. entered by the user, to be 14 numbers (not letters), and starts with: Egypt code (002) and after it (010 or 012 or 011), then the rest of the number (8 digits). 
In assignment No.2 calculate the user’s Age (In years, Months, days) from his entered birth date and print it to the page (you need to handle the case if for example the entered date is 30-12-2000, and the current date is 1-11-2018, so the days and months of the age shouldn’t appear as negative numbers). 
Ask the user to enter his birth date, and then choose the color he want to use to display his birthdate with it (Give him choices: (r) red, (b) blue, (g) green) and he enters the letter of color and use associative array to map his entered letter to color (if he entered r, use red color,…etc), and then display this text: "Current Date:" in bold font, and next to it the current date value in local format using the color he choose. (Don’t use HTML tags, and don't use if condition or switch to check the color). 
In previous assignment No, make the function if user entered date format is correct initialize the date object with this date and make the function return the date object, and if it isn’t in correct format throw an exception, and use another function to call the previous function and handle this exception using (Try    Catch), and show alert that shows description for the error if the date entered by user isn’t valid. 
Try to handle the previous exception using onError Event. 
 

<Script> document.write(“Thank YOU”) </Script> 