"use strict";
const createCard = (employee) => {
	let empCard = `<div className="card" style="width: 18rem;">
	<img src="https://loremflickr.com/200/200/${employee.getRole()}?random=${employee.getId()}" className="card-img-top" alt="...">
		<div className="card-body">
			<h5 className="card-title">${employee.getRole()}</h5>
			<p className="card-text">${employee.getName()}</p>
			<p className="card-text">${employee.getId()}</p>
			<p className="card-text">${employee.getEmail()}</p>
		</div>
	</div>`;
	return empCard;
}

module.exports = {
	createCard,
};
// <a href="#" className="btn btn-primary">Go somewhere</a>