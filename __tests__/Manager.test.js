"use strict";
const Manager = require('../lib/Manager');

describe("Manager Class", () => {
	const manager = new Manager("Justin", 1001, 'test@gmail.com', 'A23');
	it('should have an office', () => {
		const officeNumber = 'A23';
		expect(manager.officeNumber).toBe(officeNumber);
	});
	it('should have a role of Manager', () => {
		expect(manager.getRole()).toBe("Manager");
	});
});