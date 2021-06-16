import { Person } from "./person";

export class Employee extends Person {
  constructor(name, surname, department) {
    super(name, surname);
    this.department = department;
  }
  toString() {
    const phones = this.phones ? `Список телефонов: ${this.phones}` : "";
    return ` ${this.fullName} \ ${this.dateOfBirth} ${this.age} ${phones}`;
  }

  static fromJSON(obj) {
    return Object.assign(new Employee(), obj);
  }
}

export function jsonToEmployees(employeesJSON) {
  let employees = [];
  for (let e of employeesJSON) {
    employees.push(Employee.fromJSON(e));
  }
  return employees;
}
window.Employee = Employee;
