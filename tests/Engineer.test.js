const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
  const engineer = new Engineer("");
  it("Should be an instance of Employee class", () => {
    expect(engineer).toBeInstanceOf(Employee);
  });
  it("Should be an instance of Engineer class", () => {
    expect(engineer).toBeInstanceOf(Engineer);
  });
  describe("getRole", () => {
    it("Should return engineer", () => {
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
  describe("getGithub", () => {
    it("Should return the user inputted github", () => {
      expect(engineer.getGithub()).toBe(this.github);
    });
  });
});
