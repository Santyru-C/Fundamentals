/* Logical  OR ||
In JS || has some extra features compared with classic operators

ex
Given multiple OR'ed values the operator does the following:
- Evalueates operands from left to right
- For each operand, converts it to boolean. If the result is true,
stops and returns the original value of the operand.
- If all operands have been evaluated, returns the last operand

A value is returned in its original for without the conversion
*/

alert( null || 0 || 1); // 1 (1 is truthy)
alert( undefined || null || 0) // 0 (all falsy, returns the last value)

/* Useful to get the first value from a list of variables
 and for short circuit evaluation */

 // Logical AND  &&
 /* Just like OR, it evaluates operands from left to right
 but it returns the original value of the first false evaluated value.
 Returns the last operand if all are truthy */

 // NOT !
 /*Converts the operand to boolean type and returns the inverse value
 
 If we use !! (double signs) can be used to convert a value
 to a boolean type.*/

// IF statement
// Executes if the condition evaluates to true

// ELSE statement
// optional executes when the if condition evaluates to false

let age = 14
if (age >= 14 && age <= 90) {
    alert("nice")
} 

if (!(age >= 14 && age <= 90)) {
    alert("age less than 14 OR greater than 90")
}

if (age < 14 || age > 90) {
    alert("age less than 14 OR greater than 90")
}

let user = prompt("Insert Username")

if (user === "Admin") {
    password = prompt("Write password:")

    if (password === "TheMaster") {
        alert("Welcome!")
    }
    else if (password === ""){
        alert("Cancelled")
    }
    else{
        alert("Wrong Password")
    }
}

else if (user === "") {
    alert("Cancelled")
}

else {
    alert("I don't know you")
}

// About FALSY values
/* When testing boolean values. Any value that is not
false, undefined, null, 0, Nan, or an empty string ""
actually returns true when tested as a conditional
statement, therefore you can use a variable name on its
own to test whether it is true, or even that it exists*/

// SWITCH STATEMENTS
/* They take a single expression/value as an input,
and then look through several choices until they find
one that matches that value, executing the corresponding 
code that goes aling with it.

Some pseudocode as example

switch (expression or variable){
    case choice1:
        run this code;
        break;
    
    case choice2:
        run this code instead;
        break;
        
    - include as many cases as you want
    
    case choice3:
    case choice4: //there can be multiple cases that execute to one block
        run this code for the two above;
        break;

    default:
        if none of the above, run this code;
        
    Se evalua la expresion y se da el case que sea igual a esta*/

//TERNARY OPERATOR

/* Tests a condition and returns one value/expression if
it is true, and another if it is false -- this can be useful
in some situations, and can take up a lot less code than
an if...else block if you have two choices that are chosen
netween via a true/false condition

pseudocode:
condition ? run this code : run this code instead
c ? t : f

We can also use a sequence of ? for values that depend
on more than one condition

c ? t :
    c ? t :
    c ? t : 
    break

This is harder to read though, so avoid using except
in very simple cases.
*/
