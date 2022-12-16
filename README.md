# JavaScript-Fundamentals AU

## JAVASCRIPT BASICS

## Intro to Javascript
Variable - A key feature of programming languages is the ability to store some value for later use. We store values in something called a variable.

Boolean - Boolean is actually quite simple. It can only be one of two values: true or false.

Strings - Strings are a new primary type . It is a bunch of characters.

Let - Using the keyword let instead of const will allow us to make the value mutable.

Comments - Comments are an important part of writing programs! When we write a program, we want to let other programmers know about certain choices we made. JavaScript engines will not execute this line. Comments are only written for humans to better understand the program.

## Functions and Operators
Functions - A function is re-usable code! One important aspect of functions is the ability to return an output.

Addition Operator - The + is referred to as an addition operator. This operator takes two numbers and adds them together. For instance, 3 + 1 would evaluate to 4.

Multiplication Operator - We can also multiply numbers using the multiplication operator. (*)

Division Operator - The divide operator takes two inputs and divides the left-side by the right-side.
Random Ranges
The function Math.random generates a number between 0 and 1, not including 1.

Random- If we wanted to generate a random number between 0 and 100, we could simply multiply the output:

// randomNumber will be between 0 and 100
const randomNumber = Math.random() * 100;
Similarily, if we wanted to get a random number between 25 and 100, we could multiply then add:

// randomNumber will be between 25 and 100
const randomNumber = (Math.random() * 75) + 25;
The actual number here will include values after the decimal point, like 81.00635445515044. We'll learn in the next stage how to trim those values to make it an integer.

Floor
The function will round a number down to the nearest integer. For example if we had the number, 2.9999, the function will round this input down to 2.

## Conditionals