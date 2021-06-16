import { runUI, addEmployeeUI, openTab, searchEmployeeUI } from "./employees/ui";
import './style.css';
import {Employee} from './employees/model/employee';

window.addEmployeeUI = addEmployeeUI; 
window.openTab = openTab; 
window.searchEmployeeUI = searchEmployeeUI;
runUI();
