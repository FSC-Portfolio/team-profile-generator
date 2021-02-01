"use strict";
const Engineer = require('../lib/Engineer');

describe("Engineer Class", () => {
	const engineer = new Engineer("Justin", 1001, 'test@gmail.com', 'jayarghargh');
	it('should have a github username', () => {
		const github = "jayarghargh";
		expect(engineer.getGithub()).toBe(github);
	});
	it('should have a role of Engineer', () => {
		expect(engineer.getRole()).toBe("Engineer");
	});
});