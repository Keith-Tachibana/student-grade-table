class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFormMode = this.changeFormMode.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit);
    this.createGrade = null;
    this.updateGrade = null;
    this.updating = false;
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  changeFormMode(newUpdate) {
    this.updating = newUpdate;
  }
  onUpdateClick(updateGrade) {
    this.updateGrade = updateGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let name = formData.get('name');
    let course = formData.get('course');
    let grade = formData.get('grade');
    let id = $('form').attr('updatingID');
    if (this.updating) {
      this.updateGrade(id, name, course, grade);
      $('#form-title').text('Add Grade');
      $('#add-button').text('Add');
    } else {
      this.createGrade(name, course, grade);
    }
    event.target.reset();
  }
}
