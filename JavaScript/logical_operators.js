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



