class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    this.tableElement.innerHTML = '';
    for (let i = 0; i < grades.lenth; i++) {
      let tr = document.createElement('tr');
      let td = document.createElement('td');

    }
  }
}
