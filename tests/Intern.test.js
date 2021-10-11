const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Test Suite", () => {
    it("Should Get the Intern's Name", () => {
      const emp = new Intern("Ryan", 1, "ryan@gmail.com", "baylor university");
      expect(emp.getName()).toBe("Ryan");
    });
    it("Should Get the Intern's ID", () => {
      const emp = new Intern("Ryan", 1, "ryan@gmail.com", "baylor university");
      expect(emp.getID()).toBe(1);
    });
    it("Should Get the Intern's Email", () => {
      const emp = new Intern("Ryan", 1, "ryan@gmail.com", "baylor university");
      expect(emp.getEmail()).toBe("ryan@gmail.com");
    });
    it("Should Get the Intern's School", () => {
      const emp = new Intern("Ryan", 1, "ryan@gmail.com", "baylor university");
      expect(emp.getSchool()).toBe("baylor university");
    });
    it("Should Overwrite Employee and Return Intern", () => {
      const emp = new Intern("Ryan", 1, "ryan@gmail.com", "baylor university");
      expect(emp.getRole()).toBe("Intern");
    });
  });
});
