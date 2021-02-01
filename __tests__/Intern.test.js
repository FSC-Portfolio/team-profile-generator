"use strict";
const Intern = require('../lib/Intern');

describe("Intern Class", () => {
	const intern = new Intern("Justin", 1001, 'test@gmail.com', 'Monash');
	it('should have a school', () => {
		const school = 'Monash';
		expect(intern.getSchool()).toBe(school);
	});
	it('should have a role of Intern', () => {
		expect(intern.getRole()).toBe("Intern");
	});
});
