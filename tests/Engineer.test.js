const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Test Suite", () => {
    it("Should Get the Engineer's Name", () => {
      const emp = new Engineer("Ryan", 1, "ryan@gmail.com", "radams017");
      expect(emp.getName()).toBe("Ryan");
    });
    it("Should Get the Engineer's ID", () => {
      const emp = new Engineer("Ryan", 1, "ryan@gmail.com", "radams017");
      expect(emp.getID()).toBe(1);
    });
    it("Should Get the Engineer's Email", () => {
      const emp = new Engineer("Ryan", 1, "ryan@gmail.com", "radams017");
      expect(emp.getEmail()).toBe("ryan@gmail.com");
    });
    it("Should Get the Engineer's Github Username", () => {
      const emp = new Engineer("Ryan", 1, "ryan@gmail.com", "radams017");
      expect(emp.getGit()).toBe("radams017");
    });
    it("Should Overwrite Employee and Return Engineer", () => {
      const emp = new Engineer("Ryan", 1, "ryan@gmail.com", "radams017");
      expect(emp.getRole()).toBe("Engineer");
    });
  });
});
