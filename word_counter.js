import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        typee: "input",
        message: "ENTER YOUR SENTENCE TO COUNT THE WORDS",
    },
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
