class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    if (isNaN(newAverage)) {
      $('#badge-avg').text('N/A');
    } else {
      $('#badge-avg').text(newAverage.toFixed(2));
    }
  }
}
