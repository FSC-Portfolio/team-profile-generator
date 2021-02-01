const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const thisManager = new Manager("justin", 1001, "jayarghargh@gmail.com", 23);
console.log(thisManager.getName(), thisManager.getRole());

const thisEngineer = new Engineer("justin", 1001, "jayarghargh@gmail.com", "jayarghargh");
console.log(thisEngineer.getRole());

const thisIntern = new Intern("justin", 1001, "jayarghargh@gmail.com", "Monash");
console.log(thisIntern.getRole());

// Enter managers creds

// menu to add engineer / intern

// add selection, return to menu

// exit option