const table = document.querySelector('table');
const header = document.querySelector('header');

const gradeTable = new GradeTable(table);
const pageHeader = new PageHeader(header);
const app = new App(gradeTable, pageHeader);
app.start();
