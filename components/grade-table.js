class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    for (let i = 0; i < grades.length; i++) {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      td1.textContent = grades[i].name;
      td2.textContent = grades[i].course;
      td3.textContent = grades[i].grade;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      this.tableElement.appendChild(tr);
    }
  }
}
