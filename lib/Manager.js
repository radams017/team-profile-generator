import Employee from "./Employee";

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getOffice() {
    return officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

export default Manager;
