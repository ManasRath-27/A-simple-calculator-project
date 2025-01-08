# About

Today I learned the basics of javascript like variables and operators, template literals, if else statement, type conversion and type coercion but also learned somthing new while making this simple calculator project.

The first issue I encountered was taking user input via prompt and converting it to a number. Here, I learned about Number and parseInt. Both convert a string into a number, but I still don't fully understand how parseInt works, so I used Number to convert the string into a number.

Then, I wanted the user to specify which operation to perform out of the four (+, -, \*, /). However, I faced another challenge—how to use this string input in an expression. My knowledge of if-else statements helped me resolve this.

Next, I used the logical OR (||) operator to check what symbol or instruction was provided by the user. Initially, I made a mistake. Instead of writing (operation === "+" || operation === "add"), I wrote (operation === "+" || "add"). As a result, the code did not work. Later, I searched for the issue and asked ChatGPT for help, where I learned that the OR operator works with truthy and falsy values.

I still don’t fully understand what truthy and falsy values are, so I plan to learn about them tomorrow.
