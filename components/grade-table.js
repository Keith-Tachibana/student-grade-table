class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    this.deleteGrade = null;
    this.changeFormMode = null;
  }
  updateGrades(grades) {
    $('tbody').html('');
    for (let i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    }
    if (grades.length === 0) {
      $('#no-grades').removeClass('d-none');
      $('#no-grades').css({
        'font-size': '2rem',
        'font-weight': 'bold'
      });
    } else {
      $('#no-grades').css({
        'font-size': '',
        'font-weight': ''
      });
      $('#no-grades').addClass('d-none');
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  onEditClick(changeFormMode) {
    this.changeFormMode = changeFormMode;
  }
  renderGradeRow(data, deleteGrade) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let deleteButton = document.createElement('button');
    let editButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'float-right');
    deleteButton.innerHTML = 'Delete <i class="fas fa-trash-alt"></i>';
    editButton.classList.add('btn', 'btn-primary', 'mr-4', 'float-right');
    editButton.innerHTML = 'Edit <i class="fas fa-edit"></i>';
    td1.textContent = data.name;
    td2.textContent = data.course;
    td3.textContent = data.grade;
    td4.appendChild(deleteButton);
    td4.appendChild(editButton);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    deleteButton.addEventListener('click', function() {
      deleteGrade(data.id);
    });
    editButton.addEventListener('click', function() {
      this.changeFormMode(true);
      $('#form-title').text('Update Grade');
      $('#add-button').text('Update');
      $('form').attr("updatingID", data.id);
      $('#name').val(data.name);
      $('#course').val(data.course);
      $('#grade').val(data.grade);
    }.bind(this));
    this.tableElement.appendChild(tr);
  }
}
