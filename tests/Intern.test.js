const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern Class", () => {
  it("Should be an instance of Employee class", () => {
    const intern = new Intern();
    expect(intern).toBeInstanceOf(Employee);
  });
  it("Should be an instance of Intern class", () => {
    const intern = new Intern();
    expect(intern).toBeInstanceOf(Intern);
  });
  describe("getRole", () => {
    it("Should return intern", () => {
      const intern = new Intern();
      expect(intern.getRole()).toBe("Intern");
    });
  });
});
