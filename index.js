const File = require("fs");
const Inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//gets team name
function getTeamName() {
  Inquirer.prompt([
    {
      name: "name",
      type: "Input",
      message: "What is your team's name?",
    },
  ]).then(({ name }) => {
    let teamName = name;
    console.log(
      `\nThank You. Your Team Name has been set as "${teamName}".\n\nPlease Add Your Team Members.\n`
    );
    addTeamMember();
  });
}

//adds a single team member
function addTeamMember() {
  let teamArr = [];
  Inquirer.prompt([
    {
      name: "name",
      type: "Input",
      message: "Please enter the name of this team member:",
    },
    {
      name: "id",
      type: "Input",
      message: "Please enter the ID of this team member:",
    },
    {
      name: "email",
      type: "Input",
      message: "Please enter the email of this team member:",
    },
    {
      name: "role",
      type: "list",
      message: "Please select the role of this team member:",
      choices: ["Engineer", "Intern", "Manager"],
    },
    {
      name: "github",
      type: "Input",
      message: "Please enter the Engineer's Github.",
      when: ({ role }) => role === "Engineer",
    },
    {
      name: "school",
      type: "Input",
      message: "Please enter the Intern's school.",
      when: ({ role }) => role === "Intern",
    },
    {
      name: "office",
      type: "Input",
      message: "Please enter the Manager's office number.",
      when: ({ role }) => role === "Manager",
    },
  ]).then((res) => {
    let newEmp;
    switch (res.role) {
      case "Engineer":
        newEmp = new Engineer(res.name, res.id, res.email, res.github);
        teamArr.push(newEmp);
        break;
      case "Intern":
        newEmp = new Intern(res.name, res.id, res.email, res.school);
        teamArr.push(newEmp);
        break;
      case "Manager":
        newEmp = new Manager(res.name, res.id, res.email, res.office);
        teamArr.push(newEmp);
        break;
      default:
        console.log("Alert: No team member detected!");
    }
    console.log(teamArr);
    addTeamMembers();
  });
}
// loops if true
function addTeamMembers() {
  Inquirer.prompt([
    {
      name: "continue",
      type: "confirm",
      message: "Would you like to add another team member?",
    },
  ]).then((res) => {
    console.log(res);
  });
}

//initiates application
getTeamName();
