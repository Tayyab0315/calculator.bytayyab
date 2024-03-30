import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "kindly enter first number: ",
    },
    {
        type: "number",
        name: "numberTwo",
        message: "kindly enter second number: ",
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "Select Operator: "
    },
]);
if (answers.operator === "+") {
    console.log("answer is :", +answers.numberOne + answers.numberTwo);
}
else if (answers.operator === "-") {
    console.log("answer is :", +answers.numberOne - answers.numberTwo);
}
else if (answers.operator === "*") {
    console.log("answer is :", +answers.numberOne * answers.numberTwo);
}
else
    (answers.operator === "/");
{
    console.log("answer is :", +answers.numberOne / answers.numberTwo);
}
