/* 
A function is a block of JS code, that is defined once but can be executed or invoked any number of times. JS functions are 
paramitised this means that when defined, they can include a list of parameters to be passed, these will work as local variables within 
the function boundaries. 
Function inovocations provide values or arguments for the functions parameters. Functions will often use the values passed as parameters,
in order to compute a return value, which becomes the value of the function innovacation expression. The expression being the results of code excution as 
a value.
In addition to the arguments innvocation has another value, the "innvocation context" this is the value of the keyword "THIS"

if a function is assigned to an object. It is known as a method of that object. Rather than a standalone function. When a function is invoked on or ran through an object 
that object is the invocation context or the the "This" value for the function.

What this would look like is so;
*/

function Name(){
    return this.first
}
var person = {
    first : "Harrison",
    second: "Stevens",
    GetName : Name
}
console.log("Here")
console.log(person.GetName())

//This will assign the function name as a new method for the object person. This means that we are able to use this, to refer to the Person instance. 
//What this does is it assigns the property GetName the function code. We can then execute it as function by calling it with the brackets after it.

//In some cases we  may decide that actually we want the object to refernce the function simply as a function. Passing through the first name each time,
//at the point of decleration for the property get name. This means rather than the property being a function in its own right, it simply calls the function 
// and passes a value to it. Both examples will produce the same outcome but through different means.

function Name(first){
    return first
}
function person(first,second){
    this.first = first;
    this.second = second;
    this.GetName = Name(this.first);
}
var dave = new person("dave","stevens");


console.log("Here")
console.log(dave.GetName)

//Now if we wanted the object to be a default, meaning that each new instance would be assigned as we go along we could do it one of three ways;

//First we can object very simply, then assign the values after 
function Name(){
    return this.first
}
function person(){
    this.first = "";
    this.second = "";
    this.GetName = Name;
}
var dave = new person();
dave.first = "Dave";
dave.second = "Stevens"

console.log("Here")
console.log(dave.GetName())

//Here person is created as a function so that it can be used as a constructor. What this means is the keyword new can be used to construct a new instance of the 
//object each time. Here we see that person will have the following assciated properties, as we use this to refernce the instance of the object we have currently 
//invoked. once we have created the instance of the object Person as Dave, we then begin to set its properties and call the GetName function which will respond with dave

//The other way in which this can be done is to is to pass the values for the new instance as arguments and use them within the constructor function. This will 
//save time with having to perform assignments after.
function Name(){
    return this.first
}
function person(first,second){
    this.first = first;
    this.second = second;
    this.GetName = Name;
}
var dave = new person("dave","stevens");


console.log("Here")
console.log(dave.GetName())

//The difference here us that we have moved the assigment into being parameters. The values we wish to use are passed when the object construct function is invoked.
//This gets the values and stores them as local varables within the constructor function. From here they are assigned to the instance.

//The final way is the use of other functions within, this along with the first may be the least pratical due to how easy it is to reassign values in JS. Though 
//it can still have its place.

function Name(){
    return this.first
}
function SetName(first,second){
  this.first = first;
  this.second = second;
  return;
}

function person(first,second){
    this.first = first;
    this.second = second;
    this.GetName = Name;
    this.NewName = SetName;
}
var dave = new person("dave","stevens");
dave.NewName("Dave2","Steve");

console.log("Here")
console.log(dave.GetName())

//This way we have the ability only refernce the current instance of the object person. We have total ability to manipulate its values and use the new values in place 
//of the old. Where previously we passed dave in during the innovacation ie. constcutor stage. We now are able to assign its value, and then successfully change it 
// using the setName method.
//Below we have decided to create another instance of the object. It now exists as a standalone instance, but has the same methods and properties as dave did when 
//it was invoked. The differences here are the values which are assigned 
var dave = new person("dave","stevens");
dave.NewName("Dave2","Steve");
var trigger = new person("trigger","stevens")
console.log(dave.GetName(),trigger.GetName())