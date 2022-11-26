const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateSite = require("./src/generateSite");
// const generateSite = require("./src/generateSite");

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the manager's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
];

const otherRoleQuestions = [
  {
    type: "list",
    name: "menu",
    message: "Do you want to add another role, or exit?",
    choices: ["Engineer", "Intern", "Exit"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the engineer?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the ID of the engineer?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of the engineer?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the github of the engineer?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the intern?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the ID of the intern?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of the intern?",
  },
  {
    type: "input",
    name: "school",
    message: "What school does the intern go to?",
  },
];
// WHEN I start the application
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

async function init() {
  const employees = [];
  const { name, id, email, officeNumber } = await inquirer.prompt(
    managerQuestions
  );
  const managerResponses = new Manager(name, id, email, officeNumber);
  employees.push(managerResponses);
  const roster = await mainMenu(employees);
  const site = generateSite(roster);
  writeToFile("index.html", site);
}

async function mainMenu(employees) {
  const roleOrExit = await inquirer.prompt(otherRoleQuestions);
  if (roleOrExit.menu == "Engineer") {
    const newEngineer = await addEngineer();
    employees.push(newEngineer);
    mainMenu(employees);
  } else if (roleOrExit.menu == "Intern") {
    const newIntern = await addIntern();
    employees.push(newIntern);
    mainMenu(employees);
  } else {
    console.log(employees);
    return employees;
  }
}

async function addEngineer() {
  // prompt user for engineer name, ID, email and github
  const { name, id, email, github } = await inquirer.prompt(engineerQuestions);
  // create new engineer object
  const engineerResponses = new Engineer(name, id, email, github);
  // return engineer
  return engineerResponses;
}

async function addIntern() {
  // prompt user for Intern name, ID, email and school
  const { name, id, email, school } = await inquirer.prompt(internQuestions);
  // create new engineer object
  const internResponses = new Intern(name, id, email, school);
  // return engineer
  return internResponses;
}
init();
