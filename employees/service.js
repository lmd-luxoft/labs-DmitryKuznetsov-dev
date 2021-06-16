import { DATA } from "./employees-json";

// function findByName(name, surname) {
//   let res = [];
//   for (let e of DATA.employees) {
//     if ((!name || e.name === name) && (!surname || e.surname === surname)) {
//       res.push(e);
//     }
//   }

//   return res;
// }

export function addEmployee(name, surname) {
  if (!name || name.length == 0 || !surname || surname.length == 0) {
    throw new Error("name and surname should be not empty");
  }

  let maxId = 0;
  for (let e of DATA.employees) {
    if (e.id > maxId) maxId = e.id;
  }
  let id = maxId + 1;
  DATA.employees.push({ id, name, surname });

  return id;
}

export function removeEmployee(id) {
  let index = 0;
  for (let e of DATA.employees) {
    if (e.id === id) break;
    index++;
  }

  DATA.employees.splice(index, 1);
}

export function getEmployees() {
  return DATA.employees;
}

// function showEmployee (employee) {
//   console.log("тут");
//   const keys = Object.keys(employee);
//   let userInfo = `Информация о сотруднике ${employee["name"]}:\n`;
//   for (let key of keys) {
//     userInfo += `${key} = ${employee[key]}\n`;
//   }

//   console.log(userInfo);
// };

// function showEmployees() {
//   for (let e of DATA.employees) {
//     showEmployee(e);
//   }
// }

const employeeMap = {};

export function findById(id) {
  if (employeeMap[id]) {
    return employeeMap[id];
  }
  for (var e of DATA.employees) {
    if (id == e.id) {
      employeeMap[id] = e;
      return e;
    }
  }
}

// addPhone = (id, phone) => {
//   const employee = findById(id);
//   const phones = employee.phones;
//   if (!phones) {
//     employee.phones = [];
//   }
//   employee.phones.push(phone);
// };

// setDateOfBirth = (id, date) => {
//   const employee = findById(id);
//   employee.dateOfBirth = date;
// };

// getAge = (id) => {
//   const employee = findById(id);
//   let ageDiff = Date.now() - employee.dateOfBirth.getTime();
//   let ageDate = new Date(ageDiff); // miliseconds from epoch
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

// formatDate = (date) => {
//   let day = date.getDate();
//   if (day < 10) day = "0" + day;
//   let month = date.getMonth() + 1;
//   if (month < 10) month = "0" + month;
//   let year = date.getFullYear();

//   return day + "." + month + "." + year;
// };

// getEmployeeInfo = (id) => {
//   const e = findById(id);

//   const phones = e.phones ? `Список телефонов: ${e.phones}` : "";
//   const age = e.dateOfBirth ? `Возраст: ${getAge(e.id)}` : "";
//   return `  
//       Имя: ${e.name} 
//       Фамилия: ${e.surname} 
//       Дата рождения: ${formatDate(e.dateOfBirth)} 
//       ${phones}  
//       ${age} 
//     `;
// };

// testEmployee = () => {
//   addPhone(2, "555-55-55");
//   addPhone(2, "666-66-66");
//   setDateOfBirth(2, new Date(2000, 1, 1));
//   const info = getEmployeeInfo(2);
//   console.log(info);
// };

// getEmployeeJSON = (id) => {
//   const e = findById(id);
//   return JSON.stringify(e);
// };

export function setEmployeeManager(id, managerId) {
  const employee = findById(id);
  employee.managerRef = managerId;
}

export function searchEmployees(name, surname, managerRef) {
  let results = [];
  for (let e of DATA.employees) {
    if (
      (!name || e.name == name) &&
      (!surname || e.surname == surname) &&
      (!managerRef || e.managerRef == managerRef)
    ) {
      results.push(e);
    }
  }
  return results;
}
