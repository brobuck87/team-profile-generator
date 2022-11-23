const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  it("Should be an instance of Employee class", () => {
    const employee = new Employee();
    expect(employee).toBeInstanceOf(Employee);
  });
  describe("getRole", () => {
    it("Should return employee", () => {
      const employee = new Employee();
      expect(employee.getRole()).toBe("Employee");
    });
  });
});
