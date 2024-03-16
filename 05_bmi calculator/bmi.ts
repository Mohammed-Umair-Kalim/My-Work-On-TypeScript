import inquirer from "inquirer";
let bmi = await inquirer.prompt([
    {
    name:"height",
    type:"number",
    message:"Enter Your Height In Meters: "
    },

    {
        name:"weight",
        type:"number",
        message:"Enter Your Weight In Kilograms: "
        },

])

console.log(`
    Your Body Mass Index is: ${bmi.weight /(bmi.height * bmi.height)}
`)
