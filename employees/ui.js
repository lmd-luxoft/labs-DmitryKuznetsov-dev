import { removeEmployee, addEmployee } from './service';

let PLACEHOLDER = "employeesPlaceholder";

function clearEmployeesPlaceholder() {
  document.getElementById(PLACEHOLDER).innerHTML = "";
}

function showEmployees(employees) {
  clearEmployeesPlaceholder();
  const ul = document.createElement("ul");

  for (let employee of employees) {
    const li = document.createElement("li");
    ul.appendChild(li);

    li.innerHTML = employee.name + " " + employee.surname;
  }
  document.getElementById(PLACEHOLDER).appendChild(ul);
}

export function runUI() {
  showEmployees(DATA.employees);
}

export function addEmployeeUI() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const id = addEmployee(name, surname);
  showEmployees(DATA.employees);
};
