const inquirer = require("inquirer");
const fs = require("fs");


const Manager = require("./src/lib/manager");
const Intern = require("./src/lib/intern");
const Engineer = require("./src/lib/engineer");

const render = require("./src/lib/renderer")

// Questions being prompted to the user 

const employeeIds = []
const teamMembers = []
function mainMenu() {
    function newManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please enter a manager's name",
            },
            {
                type: "input",
                name: "managerId",
                message: "Please enter the manager's ID number"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter the manager's email"
            },
            {
                type: "input",
                name: "managerOffice",
                message: "What is the manager's office number?"
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
            teamMembers.push(manager);
            employeeIds.push(answers.managerId)
            buildTeam();
        })
    }
    newManager();
}
mainMenu();
function buildTeam() {
    inquirer.prompt([
        {type:"list",
        name: "addAnEmployee",
        message: "Which type of employee would you like to add to your team?",
        choices: [
            "Engineer",
            "Intern",
            "New manager",
            "None"
        ]
        }
    ]).then(choice => {
        if (choice.addAnEmployee == "Engineer") {
            addEngineer();
        } else if (choice.addAnEmployee == "Intern"){
            addIntern();
        } else if (choice.addAnEmployee == "New Manager") {
            newManager();
        } else {
            console.log("Thank you for using this app. Your page is generated now!...");
            createFile();
        }
    })
}

function addEngineer() {
      inquirer.prompt([
          {
              type: "input",
              name: "engineerName",
              message: "Please enter the engineer's name",
          },
          {
              type: "input",
              name: "engineerId",
              message: "Please enter the engineer's ID number"
          },
          {
              type: "input",
              name: "engineerEmail",
              message: "Please enter the engineer's email"
          },
          {
              type: "input",
              name: "engineerGithub",
              message: "What is the engineer's Github?"
          }]).then(answers => {
              const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
              teamMembers.push(engineer)
              endOfAddAnEmployee();
          })
  }
  function endOfAddAnEmployee () {
      inquirer.prompt([
          {
              type: "list",
              name:"yesOrNo",
              message: "Would you like to add another team member?",
              choices: [
                  "Yes",
                  "No"
              ]
          }
      ]).then(choice => {
          if (choice.yesOrNo == "Yes") {
              buildTeam();
          } else {
              console.log("Thank you for using this app. Your page is generated now!...");
              createFile();
          }
      })
  }
  function addIntern() {
      inquirer.prompt([
          {
              type: "input",
              name: "internName",
              message: "Please enter the intern's name",
          },
          {
              type: "input",
              name: "internId",
              message: "Please enter the intern's ID number"
          },
          {
              type: "input",
              name: "internEmail",
              message: "Please enter the intern's email"
          },
          {
              type: "input",
              name: "internSchool",
              message: "Which school does the intern attend?"
          }]).then(answers => {
              const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
              teamMembers.push(intern)
              endOfAddAnEmployee();
          })
  }
  
  function createFile() { 
  
      fs.writeFileSync("./generated/generated.html", render(teamMembers), "utf-8")
  }