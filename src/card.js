"use strict";

const createCard = (employee) => {
	const employeeValues = Object.values(employee);
	let roleHeading;
	let roleLink = employeeValues[3];

	switch (employee.getRole()) {
		case 'Manager':
			roleHeading = 'Office Number';
			break;
		case 'Engineer':
			roleHeading = "GitHub";
			roleLink = `<a href="https://github.com/${employeeValues[3]}" target="_blank">${employeeValues[3]}</a>`;
			break;
		case 'Intern':
			roleHeading = "School";
			break
		default:
			roleHeading = employee.getRole();
			roleLink = employeeValues[3];
	}


	let empCard = `
	<div class="card" style="width: 18rem;">
	<img src="https://loremflickr.com/200/200/${employee.getRole()}?random=${employee.getId()}" class="card-img-top" alt="random portrait image">
		<div class="card-body">
			<h5 class="card-title">${employeeValues[0]}</h5>
			<h6 class="card-subtitle mb-2 text-muted">${employeeValues[1]}</h6>
			<p class="card-text">ID Number: ${employeeValues[2]}</p>
			<p class="card-text">${roleHeading}: ${roleLink}</p>
		</div>
</div>`;
	return empCard;
}

module.exports = {
	createCard,
};
// <a href="#" className="btn btn-primary">Go somewhere</a>