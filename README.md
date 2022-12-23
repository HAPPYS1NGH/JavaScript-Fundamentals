# JavaScript-Fundamentals AU

## JAVASCRIPT BASICS

## Intro to Javascript
Variable -> A key feature of programming languages is the ability to store some value for later use. We store values in something called a variable.

Boolean -> Boolean is actually quite simple. It can only be one of two values: true or false.

Strings -> Strings are a new primary type . It is a bunch of characters.

Let -> Using the keyword let instead of const will allow us to make the value mutable.

Comments -> Comments are an important part of writing programs! When we write a program, we want to let other programmers know about certain choices we made. JavaScript engines will not execute this line. Comments are only written for humans to better understand the program.

## Functions and Operators
Functions -> A function is re-usable code! One important aspect of functions is the ability to return an output.

Addition Operator -> The + is referred to as an addition operator. This operator takes two numbers and adds them together. For instance, 3 + 1 would evaluate to 4.

Multiplication Operator -> We can also multiply numbers using the multiplication operator. (*)

Division Operator -> The divide operator takes two inputs and divides the left-side by the right-side.
Random Ranges
The function Math.random generates a number between 0 and 1, not including 1.

Random -> If we wanted to generate a random number between 0 and 100, we could simply multiply the output:

// randomNumber will be between 0 and 100
const randomNumber = Math.random() * 100;
Similarily, if we wanted to get a random number between 25 and 100, we could multiply then add:

// randomNumber will be between 25 and 100
const randomNumber = (Math.random() * 75) + 25;
The actual number here will include values after the decimal point, like 81.00635445515044. We'll learn in the next stage how to trim those values to make it an integer.


Floor -> The function will round a number down to the nearest integer. For example if we had the number, 2.9999, the function will round this input down to 2.

## Conditionals

if -> when you need to branch based on a condition.

Operator === -> The === operator is commonly referred to as the strict equality operator. It compares two values and evaluates to true if they are equal.

Operator ==! -> !== or the strict inequality operator will evaluate to true if the two values are not equal.

Else ->The else statement runs only if the if condition is not true.

Greater/ Less Than Operators -> The > and < will evaluate to false if the operands are equal

Greater/Less than equal to Operator -> Unlike the > and < operators, both >= and <= will evaluate to true when the operands are equal.

Else if -> It is used to Choose between more than two conditions and if the condition does not match the else statement is executed .

## Loops

Loops -> Often we need to write code to repeatedly do some task until a certain condition is met. This is where we can use loops!

Factorial -> A factorial is the product of all positive integers greater than 0 up to and including the factorial number n.

Modulus Operator -> This operator is called the modulus operator. It will tell us the remainder of a division.


## DATA STORAGE

## String Manipulation

Looking Characters -> In JavaScript, you can look up characters in strings by index. There are two ways to do this: with charAt or square brackets ([]).

Character Casing -> Often with strings we want to ignore the character casing. We want to find "x" whether it is lower-case "x" or upper-case "X". //"Hello".toLowerCase() 

