class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    this.deleteGrade = null;
  }
  updateGrades(grades) {
    let tbody = document.querySelector('tbody');
    let noGrades = document.querySelector('#no-grades');
    tbody.innerHTML = '';
    for (let i = 0; i < grades.length; i++) {

      this.renderGradeRow(grades[i], this.deleteGrade);
    }
    if (grades.length === 0) {
      noGrades.classList.remove('d-none');
      noGrades.style.cssText = "font-size: 2rem; font-weight: bold;";
    } else {
      noGrades.style.cssText = '';
      noGrades.classList.add('d-none');
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
    tr.appendChild(td3);
    tr.appendChild(td4);
    button.addEventListener('click', function() {
      deleteGrade(data.id);
    });
    this.tableElement.appendChild(tr);
  }
}
