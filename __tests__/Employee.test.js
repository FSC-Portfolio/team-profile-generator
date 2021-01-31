const Employee = require('../lib/Employee');

describe("Employee Class", () => {
	it('should create an employee', () => {
		const employee = new Employee();
		expect(employee).toBe(Employee);
	});
});