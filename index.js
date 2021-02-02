// Load packages
const inquirer = require('inquirer');
const fs = require('fs');
const templateIndex = './dist/index.html';
const templateCard = require('./src/card');
const templateHeader = require('./src/header');
const templateFooter = require('./src/footer');

// Load my classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Array to hold all the employee objects.
const employees = [];

// Set up all the questions
const joinQuestions = (q1, q2) => {
	// Takes two arrays and joins them together after 'safely' copying the first array.
	q1 = JSON.stringify(q1);
	q1 = JSON.parse(q1);

	// Push array two contents to array 1.
	for (const item in q2) {
		q1.push(q2[item]);
	}

	// Return the new array.
	return q1;
}

// An array of questions to be asked for each team member.
// TODO these questions _could_ be added to the classes.
let standardQuestions = [
	{
		type: 'input',
		message: 'Please enter a name: ',
		name: 'username'
	},
	{
		type: 'number',
		message: 'Please enter ID Number: ',
		name: 'id'
	},
	{
		type: 'input',
		message: 'Please enter an email: ',
		name: 'email'
	},
]

const menuQuestions = [
	{
	type: "list",
	message: "would you like to add...",
	choices: ["Engineer", "Intern", "Quit"],
	name: "keepAdding"
	},
]

const managerQuestions = [
	{
		type: 'input',
		message: 'Please enter an office number: ',
		name: 'office'
	},
]

const engineerQuestions = [
	{
	type: 'input',
	message: 'Please enter a GitHub username: ',
	name: 'github'
	},
]

const internQuestions = [
	{
	type: 'input',
	message: 'Please enter a school: ',
	name: 'school'
	},
]

// This is where the magic happens: async, await, inquirer.prompt
async function main() {
	// Ask the Manager Questions and create a Manager first
	const askManager = await inquirer.prompt(joinQuestions(standardQuestions, managerQuestions));
	employees.push(new Manager(askManager.username, askManager.id, askManager.email, askManager.officeNumber));

	// Check if the user wants to add more team members.
	let newQ = await inquirer.prompt(menuQuestions);

	// Set up for branching and recursion.
	if (newQ.keepAdding !== 'Quit') {
		let gameOn = true;
		while (gameOn) {
			switch (newQ.keepAdding) {
				case 'Engineer':
					// Ask Engineer Q's
					const askEngineer = await inquirer.prompt(joinQuestions(standardQuestions, engineerQuestions));
					// Create the new Engineer and add to employees array.
					employees.push(new Engineer(askEngineer.username, askEngineer.id, askEngineer.email, askEngineer.github));
					newQ = await inquirer.prompt(menuQuestions);
					break;
				case 'Intern':
					// Ask Intern Q's, create new Intern.
					const askIntern = await inquirer.prompt(joinQuestions(standardQuestions, internQuestions));
					// Create the new Intern and add to employees array.
					employees.push(new Intern(askIntern.username, askIntern.id, askIntern.email, askIntern.school));
					newQ = await inquirer.prompt(menuQuestions);
					break;
				default:
					// Simply exit the loop.
					gameOn = false;
			}
		}
	}
	// The user has quit - get the output ready.
	let fileOutput = templateHeader.returnHeader();
	for (const employee in employees) {
		console.log(employees[employee].getRole());
		// Merge the responses with the template.
		fileOutput += templateCard.createCard(employees[employee]);
	}

	// add the footer to the output
	fileOutput += templateFooter.returnFooter();

	// Write the readme to the exports file.
	fs.writeFile(templateIndex, fileOutput, (err) =>
		err ? console.error(err) : console.log('File exported')
	);
}

// Run the program, assign main() as a variable to ditch the promise ignored warning.
let promise = main();