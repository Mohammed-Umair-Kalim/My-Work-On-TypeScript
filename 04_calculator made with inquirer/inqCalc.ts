import inquirer from "inquirer";

let simple_calculator = await inquirer.prompt([
    {
    name:"num1",
    type:"number",
    message:"Enter first number: "
    },
    
    {
    name:"op",
    type:"string",
    message:"Enter operator: "
    },

    {
    name:"num2",
    type:"number",
    message:"Enter second number: "
    }
])

if(simple_calculator.op == "+") {console.log("Addition:",simple_calculator.num1 + simple_calculator.num2)}
if(simple_calculator.op == "-") {console.log("Subtraction:",simple_calculator.num1 - simple_calculator.num2)}
if(simple_calculator.op == "*") {console.log("Multiplication:",simple_calculator.num1 * simple_calculator.num2)}
if(simple_calculator.op == "/") {console.log("Division:",simple_calculator.num1 / simple_calculator.num2)}
if(simple_calculator.op == "%") {console.log("Reminder:",simple_calculator.num1 % simple_calculator.num2)}
if(simple_calculator.op == "**") {console.log("Exponent:",simple_calculator.num1 ** simple_calculator.num2)}

// let a = 3 + 4 * 5
// console.log("Printing a:",a)

// let b = 3 + 4 * 5
// b++
// console.log("Printing b:",b)