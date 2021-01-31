const Employee = require('../lib/Employee');

describe("Employee Class", () => {
	const employee = new Employee("Justin", 1001, 'test@gmail.com');
	it('should have a name', () => {
		const employeeName = "Justin"
		expect(employee.name).toBe(employeeName);
	});
	it('should have an id', () => {
		const id = 1001;
		expect(employee.id).toEqual(id);
		expect(typeof employee.id).toBe('number');
	});
	it('should have an email', () => {
		const email = 'test@gmail.com';
		expect(employee.email).toBe(email);
	});
	it('should return its name', () => {
		const name = "Justin";
		expect(employee.getName()).toBe(name);
	});
	it('should return its ID', () => {
		const id = 1001;
		expect(employee.getId()).toBe(id);
	});
	it('should return its email', () => {
		const email = "test@gmail.com";
		expect(employee.getEmail()).toBe(email);
	});
	it('should return Employee as the role', () => {
		expect(employee.getRole()).toBe('Employee');
	});
});