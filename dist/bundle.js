(()=>{"use strict";const e={employees:[{id:1,name:"Пафнутий",surname:"Пафнутьев",department:"IT"},{id:2,name:"Дмитрий",surname:"Кузнецов",department:"IT"}]};findByName=(t,n)=>{let o=[];for(let l of e.employees)t&&l.name!==t||n&&l.surname!==n||o.push(l);return o},showEmployee=e=>{const t=Object.keys(e);let n=`Информация о сотруднике ${e.name}:\n`;for(let o of t)n+=`${o} = ${e[o]}\n`;console.log(n)},showEmployees=()=>{for(let t of e.employees)showEmployee(t)};const t={};function n(n){if(t[n])return t[n];for(var o of e.employees)if(n==o.id)return t[n]=o,o}addPhone=(e,t)=>{const o=n(e);o.phones||(o.phones=[]),o.phones.push(t)},setDateOfBirth=(e,t)=>{n(e).dateOfBirth=t},getAge=e=>{const t=n(e);let o=Date.now()-t.dateOfBirth.getTime(),l=new Date(o);return Math.abs(l.getUTCFullYear()-1970)},formatDate=e=>{let t=e.getDate();t<10&&(t="0"+t);let n=e.getMonth()+1;return n<10&&(n="0"+n),t+"."+n+"."+e.getFullYear()},getEmployeeInfo=e=>{const t=n(e),o=t.phones?`Список телефонов: ${t.phones}`:"",l=t.dateOfBirth?`Возраст: ${getAge(t.id)}`:"";return`  \n      Имя: ${t.name} \n      Фамилия: ${t.surname} \n      Дата рождения: ${formatDate(t.dateOfBirth)} \n      ${o}  \n      ${l} \n    `},testEmployee=()=>{addPhone(2,"555-55-55"),addPhone(2,"666-66-66"),setDateOfBirth(2,new Date(2e3,1,1));const e=getEmployeeInfo(2);console.log(e)},getEmployeeJSON=e=>{const t=n(e);return JSON.stringify(t)};let o="employeesPlaceholder";function l(e){document.getElementById(o).innerHTML="";const t=document.createElement("ul");for(let n of e){const e=document.createElement("li");t.appendChild(e),e.innerHTML=n.name+" "+n.surname}document.getElementById(o).appendChild(t)}window.addEmployeeUI=function(){!function(t,n){if(!t||0==t.length||!n||0==n.length)throw new Error("name and surname should be not empty");let o=0;for(let t of e.employees)t.id>o&&(o=t.id);let l=o+1;e.employees.push({newId:l,name:t,surname:n})}(document.getElementById("name").value,document.getElementById("surname").value),l(DATA.employees)},l(DATA.employees)})();
//# sourceMappingURL=bundle.js.map