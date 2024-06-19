import inquirer from "inquirer";

const answers: {
  Sentence: String;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: "ENTER YOUR SENTENCE TO COUNT THE WORDS",
  },
]);

const words = answers.Sentence.trim().split(" ");

console.log(words);


console.log(`Your sentence word count is ${words.length}`);