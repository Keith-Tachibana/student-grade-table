class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    let badge = document.querySelector('#badge-avg');
    badge.textContent = newAverage.toFixed(2);
  }
}
