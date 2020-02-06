class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
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
      this.renderGradeRow(grades, this.deleteGrade);
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let button = document.createElement('button');
    button.classList.add('btn', 'btn-danger');
    button.textContent = "DELETE";
    td1.textContent = data.name;
    td2.textContent = data.course;
    td3.textContent = data.grade;
    td4.appendChild(button);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td2);
    tr.appendChild(td4);
    button.addEventListener('click', function() {
      deleteGrade(data.id);
    });
    this.tableElement.appendChild(tr);
  }
}
