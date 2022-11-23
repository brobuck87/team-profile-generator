const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager Class", () => {
  it("Should be an instance of Employee class", () => {
    const manager = new Manager();
    expect(manager).toBeInstanceOf(Manager);
  });
  it("Should be an instance of Intern class", () => {
    const manager = new Manager();
    expect(manager).toBeInstanceOf(Manager);
  });
  describe("getRole", () => {
    it("Should return manager", () => {
      const manager = new Manager();
      expect(manager.getRole()).toBe("Manager");
    });
  });
});
