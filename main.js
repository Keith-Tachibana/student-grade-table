const table = document.querySelector('table');
const header = document.querySelector('header');
const form = document.querySelector('form');

const gradeTable = new GradeTable(table);
const pageHeader = new PageHeader(header);
const gradeForm = new GradeForm(form);
const app = new App(gradeTable, pageHeader, gradeForm);
app.start();
