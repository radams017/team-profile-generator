const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Test Suite", () => {
    it("Should Get the Employees Name", () => {
      const emp = new Employee("Ryan", 1, "ryan@gmail.com");
      expect(emp.getName()).toBe("Ryan");
    });
    it("Should Get the Employees ID", () => {
      const emp = new Employee("Ryan", 1, "ryan@gmail.com");
      expect(emp.getID()).toBe(1);
    });
    it("Should Get the Employees Email", () => {
      const emp = new Employee("Ryan", 1, "ryan@gmail.com");
      expect(emp.getEmail()).toBe("ryan@gmail.com");
    });
  });
});
