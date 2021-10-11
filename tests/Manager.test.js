const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Test Suite", () => {
    it("Should Get the Manager's Name", () => {
      const emp = new Manager("Ryan", 1, "ryan@gmail.com", 25);
      expect(emp.getName()).toBe("Ryan");
    });
    it("Should Get the Manager's ID", () => {
      const emp = new Manager("Ryan", 1, "ryan@gmail.com", 25);
      expect(emp.getID()).toBe(1);
    });
    it("Should Get the Manager's Email", () => {
      const emp = new Manager("Ryan", 1, "ryan@gmail.com", 25);
      expect(emp.getEmail()).toBe("ryan@gmail.com");
    });
    it("Should Get the Manager's Office Number", () => {
      const emp = new Manager("Ryan", 1, "ryan@gmail.com", 25);
      expect(emp.getOffice()).toBe(25);
    });
    it("Should Overwrite Employee and Return Manager", () => {
      const emp = new Manager("Ryan", 1, "ryan@gmail.com", 25);
      expect(emp.getRole()).toBe("Manager");
    });
  });
});
