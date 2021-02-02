"use strict";

const createCard = (employee) => {
	// Creates a card for each employee.
	let roleHeading;
	let roleLink;

	switch (employee.getRole()) {
		// Customises the card based on role.
		case 'Manager':
			roleHeading = 'Office Number';
			roleLink = employee.getOffice();
			break;
		case 'Engineer':
			roleHeading = "GitHub";
			roleLink = `<a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
			break;
		case 'Intern':
			roleHeading = "School";
			roleLink = employee.getSchool();
			break
		default:
			roleHeading = employee.getRole();
	}

	// Setup and return the card.
	let empCard = `
	<div class="card" style="width: 18rem;">
	<img src="https://loremflickr.com/200/200/portrait?random=${employee.getId()}" class="card-img-top" alt="random portrait image">
		<div class="card-body">
			<h5 class="card-title">${employee.getName()}</h5>
			<h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
			<p class="card-text">ID Number: ${employee.getId()}</p>
<!--			<p class="card-text">Email: ${employee.getEmail()}</p>-->
			<p class="card-text">${roleHeading}: ${roleLink}</p>
			<a href="mailto: ${employee.getEmail()}" class="btn btn-primary">Email ${employee.getName()}</a>
		</div>
</div>`;
	return empCard;
}

module.exports = {
	createCard,
};