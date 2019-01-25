// Javascript is dynamic as it has data types, but they are not bound to variable
//Variable is a symbolic name for a value 
//Varibales are defined with the use of the VAR keyword
var x;      //This Declared a variable named x

//Values of a variable can be assigned and changed with an = sign
var p = 0; //Here we are initiating the variable of P and assiging it a value of 0
p; //Here we would see the value of P as 0.

// Javascript supports 7 different data types 
// ******************* NUMBERS ***********************
x = 1; //Numbers **1
x = 0.01; //There is only one type for numbers. This covers integers and real numbers **1
// i.e. decimals and whole numbers

// ********************* STRING *************************
x = "Hello"; // String values can be depicted within quotation marks **2
x = 'Hi'; //Single qoutes are also used to show string **2

// ********************* BOOLEAN (LOGICAL TYPE) ***********
x = true; // This is a boolean value **3
x = false; // This is also a boolean value **3 

//********************** NULL ***************************
x = null; // This is a seperate data type in its own right **4

//********************** UNDEFINED ************************
x = undefined; // This is like null and is its own data type **5

//The two other which are importnat within the realm of javascript are Objects and Arrays. These are also classified as data stuctures.

//********************** OBJECTS ************************

//Classed as the most important within Javascript. The object is collection of key->value pairs or a string->value map
/* POINTS ABOUT OBJECT
 ** they are enclosed within curly braces 
 ** A property will have a key which will exist as the left hand assignment
 ** The property will also have a value, which will exist on the right of the assignement
*/
var Book = {
    topic : "Dinosaurs",
    author : "T-Rex Dickens"
}

/* ACCESS AND USE PROPERTIES 
 ** we can access an property using square braces []
 ** we can also access a property using a full stop .
 ** we can create new properties through assignment 
 ** we can make a property an empty object if needed using assignment and curly braces
*/

Book['topic']; //Access
Book.topic; //Access
Book.Published = "Today"; //New Property 
Book.Content = {}; //A New Property with an empty object


//********************** ARRAYS ************************
// Javascript also supports arrays, this are numerically indexed lists of values. This means values are ordered in numerical index. 
// And can be accessed using that same numerical index value

/* Initliase
 ** we can initalise an empty array or initiate it with values from the start. The equals is used to show what we want to bind the variable too
 ** Then curly braces show that we want it to be an array 
*/
var empty = []; // An empty array 
var prime = [2,3,5,7]; // A Array declared with values

/* Access and Use
 ** we can access the values within the array, by using their numerical index. This will determine the point from within the array we want to extract a value from
 ** this can be done by stating the array, then using the square brackets and then the index value e.g. PRIME[1] would be -> 3
 ** We can also use functions on the array, these are supplied by javascript and allow the developer to perform task quicker and with greater ease. A common function
 ** used when working with accessing values is LENGTH. This will return the numerical length of the array, this is a representation of the number of indivdual data instances 
 ** there are.
*/

prime[0]; //This will show 2
prime.length // This will give a value of 4
 
//As an array will start with a index of 0, if we wanted to access the last value we would use length - 1
prime[prime.length - 1] // This will return the last value in the array which would be 7

/* Assigment
 ** We are able to add and alter the assignment of values in the array using the indexed position. if we wanted to add a new value to the end of an array 
 ** we could use the length function again, this will give us the index value which would be the last value of data in the array. We can also change a datas value
 ** by using its indexed postion and the assignment operator
*/

prime[prime.length] = 9; // This will add a value, after the value 7. if we wanted to access this later we would use the prime.length -1 example
prime[prime.length - 1] = 11; // Here we have changed the last value in the array to 11

//********************** ARRAYS MEET OBJECTS ************************
/*
** Arrays are able to hold another array, this would be a nested array. Or they can hold an object. This works both ways.
** when an array exists within an object, it is a nested array.
** when an object exists within an array, it is a nested object. 
*/

var points = [
    {y:0,x:0},
    {y:1,x:1}
]
//These are co ordinates which are held within an array. These are held as objects are each numerical index. To access these we would use:
points[1].x // This would give you 1
points[0].y //This would give you 0


var data = {
    trail1 : [[1,2],[1,2]],
    trail2 : [[2,3],[2,3]]
}

// The object data has two properties, each contain an array, with two nested arrays. If we wanted to access these we would use:
data.trail1[1][1] // This would give you 2
data.trail2[0][0] // this would give you 2

//********************** EXPRESSIONS ************************

/*
    Expressions are a phrase used in javascript which can be evaluated to produce a value. This means when they executed they will give a value. The use
    of . or [] within objects and arrays refer to their values via an object property or array element this is an expression. A common way in which expressions
    are formed is through the of operators.
*/

//********************** OPERATORS ************************

// These are acts which can be carried out on a value, or values to produces a new value. The values which are used will be called operands.

//Most commonly seen are Arithmetic Operators. Those which we recongise from basic maths

3 + 2 // This is addition. This expression gives the value 5
3 - 2 // This is subtraction This expression gives the value 1
3 * 2 // This is multiplication This expression gives the value 6
3 / 2 // This is division This expression gives the value 1.5
points[1].x - points[1].x // This is a more complicated version, but is still subtration This expression gives the value 0

//As the + value will only apply addition. This means when it is used on strings, it will combine the strings togther, but it wont change their values
"3" + "2" //This expression gives the value "32" rather than the 5 we saw before. This is because the data type here is string

//Javascript also has some shorthand for arithmetic operators, these help to produce more efficient code and save time
var count = 0; //Define a variable and intialise it with 0
count ++; // Increment the value by 1, count is now 1
count --; // Decrement the value by 1, count is now 0 again. Or -1 if we didnt do the previous step
count += 2; // This assigns the value of count + 2, to the variable count
count -= 2; //This assigns the value of count - 2, to the variable count
count *= 2; //This assigns the value of count x 2 (count multiplied by 2), to the variable count

